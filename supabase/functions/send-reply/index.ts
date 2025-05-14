
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.4";
import { Resend } from "npm:resend@2.0.0";

const resendApiKey = Deno.env.get("RESEND_API_KEY");
const resend = new Resend(resendApiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messageId, replyText } = await req.json();
    
    // Create Supabase admin client to access message data
    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // Fetch the original message to get recipient details
    const { data: message, error: messageError } = await supabase
      .from("messages")
      .select("*")
      .eq("id", messageId)
      .single();
    
    if (messageError || !message) {
      throw new Error("Message not found: " + messageError?.message);
    }

    // Send the email reply using Resend
    const emailResponse = await resend.emails.send({
      from: "Jax Premier Health <info@jaxpremierhealth.com>",
      reply_to: "info@jaxpremierhealth.com",
      to: [message.email],
      subject: `Re: ${message.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h2 style="color: #333; margin-top: 0;">Response from Jax Premier Health</h2>
            <p style="color: #555; white-space: pre-line;">${replyText}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #777; font-size: 14px;">In reference to your message: "${message.subject}"</p>
            <p style="color: #777; font-size: 14px;">Original message: <br><em>${message.message}</em></p>
          </div>
          <div style="margin-top: 20px; color: #999; font-size: 12px;">
            <p>Jax Premier Health<br>
            9010 R G Skinner Parkway, Jacksonville, FL 32068<br>
            (904) 468-2055</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Try to update message with reply information using snake_case for column names
    try {
      const { error: updateError } = await supabase
        .from("messages")
        .update({ 
          has_been_replied: true,
          last_replied_at: new Date().toISOString()
        })
        .eq("id", messageId);
      
      if (updateError) {
        console.error("Error updating message status:", updateError);
      }
    } catch (updateError) {
      console.error("Error updating message status:", updateError);
      // Continue execution even if this fails
    }

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: { 
        "Content-Type": "application/json",
        ...corsHeaders
      },
    });
  } catch (error) {
    console.error("Error sending reply:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Failed to send email reply" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        },
      }
    );
  }
};

serve(handler);
