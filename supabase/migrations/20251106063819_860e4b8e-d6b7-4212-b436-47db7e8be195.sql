-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create courses table
CREATE TABLE public.courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    duration TEXT NOT NULL,
    description TEXT,
    topics TEXT[] NOT NULL DEFAULT '{}',
    image_url TEXT,
    status TEXT NOT NULL DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Courses policies
CREATE POLICY "Anyone can view active courses"
ON public.courses FOR SELECT
USING (status = 'active' OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert courses"
ON public.courses FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update courses"
ON public.courses FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete courses"
ON public.courses FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create admissions table
CREATE TABLE public.admissions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    father_name TEXT NOT NULL,
    course_id UUID REFERENCES public.courses(id),
    course_name TEXT NOT NULL,
    cnic TEXT,
    email TEXT NOT NULL,
    contact_number TEXT NOT NULL,
    address TEXT NOT NULL,
    gender TEXT NOT NULL,
    qualification TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

-- Admissions policies
CREATE POLICY "Anyone can submit admission"
ON public.admissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Admins can view all admissions"
ON public.admissions FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update admissions"
ON public.admissions FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete admissions"
ON public.admissions FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create gallery table
CREATE TABLE public.gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    caption TEXT,
    image_url TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;

-- Gallery policies
CREATE POLICY "Anyone can view gallery"
ON public.gallery FOR SELECT
USING (true);

CREATE POLICY "Admins can insert gallery"
ON public.gallery FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update gallery"
ON public.gallery FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete gallery"
ON public.gallery FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create FAQs table
CREATE TABLE public.faqs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'general',
    order_number INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;

-- FAQs policies
CREATE POLICY "Anyone can view faqs"
ON public.faqs FOR SELECT
USING (true);

CREATE POLICY "Admins can insert faqs"
ON public.faqs FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update faqs"
ON public.faqs FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete faqs"
ON public.faqs FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create contact_settings table
CREATE TABLE public.contact_settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    key TEXT NOT NULL UNIQUE,
    value TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_settings ENABLE ROW LEVEL SECURITY;

-- Contact settings policies
CREATE POLICY "Anyone can view contact settings"
ON public.contact_settings FOR SELECT
USING (true);

CREATE POLICY "Admins can update contact settings"
ON public.contact_settings FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add triggers
CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_faqs_updated_at
BEFORE UPDATE ON public.faqs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_contact_settings_updated_at
BEFORE UPDATE ON public.contact_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default contact settings
INSERT INTO public.contact_settings (key, value) VALUES
('phone1', '0344-3493518'),
('phone2', '0341-2445679'),
('whatsapp1', '03443493518'),
('whatsapp2', '03412445679'),
('email', 'nextgencomputeracademy234@gmail.com'),
('address', 'Karachi, Pakistan');

-- Insert initial courses from the requirements
INSERT INTO public.courses (title, category, duration, description, topics) VALUES
('CIT (Certificate in Information Technology)', 'CIT', '6 Months', 'Perfect for beginners who want to build strong computer fundamentals and office productivity skills.', ARRAY['Office Automation', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Adobe Photoshop', 'Inpage', 'Windows Installation', 'Internet']),
('IT (Information Technology)', 'IT', '6 Months', 'Comprehensive IT course with additional graphic design tools for enhanced creativity.', ARRAY['Office Automation', 'MS Word', 'MS Excel', 'MS PowerPoint', 'Adobe Photoshop', 'Adobe Illustrator', 'Windows Installation', 'Internet']),
('Digital Marketing', 'Digital Marketing', '6 Months', 'Master the art of digital marketing and grow your online business presence across multiple platforms.', ARRAY['Facebook Marketing', 'Instagram Marketing', 'SEO (Search Engine Optimization)', 'Shopify Store Setup', 'YouTube Marketing', 'Google Ads', 'Amazon Marketing', 'E-Commerce']),
('Graphic Designing', 'Graphic Designing', '6 Months', 'Learn professional graphic design tools to create stunning visuals and designs for print and digital media.', ARRAY['Adobe Photoshop', 'Adobe Illustrator', 'Corel Draw', 'Inpage']),
('Web Designing', 'Web Designing', '6 Months', 'Design beautiful and user-friendly websites using industry-standard design tools and modern UI/UX principles.', ARRAY['Adobe Photoshop', 'Adobe Illustrator', 'Figma']),
('Web Development - Frontend', 'Web Development', '3 Months', 'Build interactive and responsive websites with modern frontend technologies.', ARRAY['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'ReactJS']),
('Web Development - Backend', 'Web Development', '3 Months', 'Master server-side programming and database management for dynamic web applications.', ARRAY['Django/Flask', 'MySQL (with Django and Flask)', 'Express JS', 'Mango DB (with Express JS)']),
('Web Development - Full Stack', 'Web Development', '9-10 Months', 'Complete web development training covering both frontend and backend technologies for building full-scale applications.', ARRAY['HTML, CSS, JavaScript', 'Cloud Computing', 'Database Management', 'Django, Flask, ExpressJS']);