-- Fix security linter issue: Add RLS policies for user_roles table
CREATE POLICY "Admins can view all user roles"
ON public.user_roles FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can manage user roles"
ON public.user_roles FOR ALL
USING (has_role(auth.uid(), 'admin'::app_role));