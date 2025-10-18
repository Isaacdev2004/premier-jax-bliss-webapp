-- This script will assign admin role to the specified email once the user account is created
-- First, you need to create the user account in Supabase Auth using the dashboard or signup

-- Function to assign admin role by email (run this after creating the user)
DO $$
DECLARE
  user_id_var UUID;
BEGIN
  -- Find user by email
  SELECT id INTO user_id_var 
  FROM auth.users 
  WHERE email = 'jaxpremierhealthcenter@gmail.com';
  
  -- If user exists, assign admin role
  IF user_id_var IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role)
    VALUES (user_id_var, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
    
    -- Also create profile if it doesn't exist
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (user_id_var, 'jaxpremierhealthcenter@gmail.com', 'JAX Premier Health Admin')
    ON CONFLICT (id) DO NOTHING;
    
    RAISE NOTICE 'Admin role assigned to user: %', user_id_var;
  ELSE
    RAISE NOTICE 'User not found. Please create the user account first in Supabase Auth.';
  END IF;
END $$;