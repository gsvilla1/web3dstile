CREATE TABLE public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  message text not null default '',
  created_at timestamptz not null default now()
);

GRANT INSERT ON public.contact_requests TO anon;
GRANT ALL ON public.contact_requests TO service_role;

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact request"
  ON public.contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);