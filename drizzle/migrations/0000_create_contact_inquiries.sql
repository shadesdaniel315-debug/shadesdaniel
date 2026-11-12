CREATE TABLE public.contact_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  company TEXT CHECK (company IS NULL OR char_length(company) <= 200),
  service TEXT NOT NULL CHECK (char_length(service) BETWEEN 1 AND 100),
  budget TEXT CHECK (budget IS NULL OR char_length(budget) <= 50),
  details TEXT NOT NULL CHECK (char_length(details) BETWEEN 10 AND 3000),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_inquiries TO anon;
GRANT ALL ON public.contact_inquiries TO service_role;

ALTER TABLE public.contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit inquiries"
ON public.contact_inquiries
FOR INSERT
TO anon
WITH CHECK (true);