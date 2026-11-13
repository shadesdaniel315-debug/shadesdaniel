DROP POLICY IF EXISTS "Visitors can submit inquiries" ON public.contact_inquiries;

CREATE POLICY "Visitors can submit valid inquiries"
ON public.contact_inquiries
FOR INSERT
TO anon
WITH CHECK (
  char_length(btrim(full_name)) BETWEEN 2 AND 100
  AND char_length(email) BETWEEN 3 AND 255
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (company IS NULL OR char_length(company) <= 200)
  AND service IN (
    'crm-setup', 'workflow-automation', 'lead-follow-up', 'funnels-forms',
    'appointments', 'ai-conversations', 'phone-messaging', 'troubleshooting', 'not-sure'
  )
  AND (budget IS NULL OR budget IN (
    'Not sure yet', 'Under $500', '$500 – $1,500', '$1,500 – $3,000', '$3,000+'
  ))
  AND char_length(btrim(details)) BETWEEN 20 AND 3000
  AND created_at BETWEEN now() - interval '5 minutes' AND now() + interval '5 minutes'
);