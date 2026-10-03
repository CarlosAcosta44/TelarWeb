-- ========================================================
-- TELAR WEB - Database Schema for Supabase
-- Table: quote_requests
-- ========================================================

-- Create table for quote requests / leads
CREATE TABLE IF NOT EXISTS public.quote_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    client_phone TEXT NOT NULL,
    project_type TEXT NOT NULL CHECK (project_type IN ('landing', 'corporate', 'ecommerce', 'custom_saas', 'ai_system')),
    views_scope TEXT NOT NULL CHECK (views_scope IN ('1-3', '4-7', '8+', 'dynamic')),
    special_modules TEXT[] DEFAULT '{}',
    tech_architecture TEXT NOT NULL,
    estimated_price_cop NUMERIC NOT NULL,
    estimated_price_usd NUMERIC NOT NULL,
    estimated_timeline TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'negotiating', 'closed_won', 'closed_lost')),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_quote_requests_created_at ON public.quote_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON public.quote_requests (status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_client_email ON public.quote_requests (client_email);

-- Enable Row Level Security (RLS)
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- 1. Insert Policy: Allow anonymous and public visitors to submit new quote requests
CREATE POLICY "Allow public insert to quote_requests" 
ON public.quote_requests
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- 2. Select Policy: Only authenticated team members can read quotes
CREATE POLICY "Allow authenticated read on quote_requests" 
ON public.quote_requests
FOR SELECT 
TO authenticated
USING (true);

-- 3. Update Policy: Only authenticated team members can update status
CREATE POLICY "Allow authenticated update on quote_requests" 
ON public.quote_requests
FOR UPDATE 
TO authenticated
USING (true)
WITH CHECK (true);
