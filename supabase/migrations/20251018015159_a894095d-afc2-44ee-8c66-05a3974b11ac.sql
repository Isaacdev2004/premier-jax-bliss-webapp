-- Assign admin role to jaxpremierhealthcenter@gmail.com
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
    ON CONFLICT (id) DO UPDATE 
    SET full_name = 'JAX Premier Health Admin';
    
    RAISE NOTICE 'Admin role successfully assigned to user: %', user_id_var;
  ELSE
    RAISE EXCEPTION 'User not found with email: jaxpremierhealthcenter@gmail.com';
  END IF;
END $$;