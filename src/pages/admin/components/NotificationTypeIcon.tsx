
import { Calendar, Mail, Trash2, Bell, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface NotificationTypeIconProps {
  type: string;
}

export const NotificationTypeIcon = ({ type }: NotificationTypeIconProps) => {
  switch (type) {
    case "appointment":
      return <Calendar className="h-4 w-4 text-blue-500" />;
    case "message":
      return <Mail className="h-4 w-4 text-green-500" />;
    case "cancellation":
      return <Trash2 className="h-4 w-4 text-red-500" />;
    case "system":
      return <Bell className="h-4 w-4 text-yellow-500" />;
    default:
      return <MessageCircle className="h-4 w-4 text-primary" />;
  }
};

interface NotificationTypeBadgeProps {
  type: string;
}

export const NotificationTypeBadge = ({ type }: NotificationTypeBadgeProps) => {
  switch (type) {
    case "appointment":
      return <Badge className="bg-blue-500">Appointment</Badge>;
    case "message":
      return <Badge className="bg-green-500">Message</Badge>;
    case "cancellation":
      return <Badge className="bg-red-500">Cancellation</Badge>;
    case "system":
      return <Badge className="bg-yellow-500">System</Badge>;
    default:
      return <Badge>{type.charAt(0).toUpperCase() + type.slice(1)}</Badge>;
  }
};
