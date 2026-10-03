import { createClient } from '@supabase/supabase-js';
import { QuoteRequest } from '../../domain/entities/QuoteRequest';
import { QuoteRequestRepository } from '../../domain/repositories/QuoteRequestRepository';

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Falta configurar las variables de entorno de Supabase en .env.local (NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_ANON_KEY).');
  }

  return createClient(url, key);
}

export class SupabaseQuoteRequestRepository implements QuoteRequestRepository {
  async save(request: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<void> {
    const supabase = getSupabaseClient();

    const { error } = await supabase.from('quote_requests').insert({
      client_name: request.clientName,
      client_email: request.clientEmail,
      client_phone: request.clientPhone,
      project_type: request.projectType,
      views_scope: request.viewsScope,
      special_modules: request.specialModules,
      tech_architecture: request.techArchitecture,
      estimated_price_cop: request.estimatedPriceCop,
      estimated_price_usd: request.estimatedPriceUsd,
      estimated_timeline: request.estimatedTimeline,
    });

    if (error) {
      console.error('[SupabaseQuoteRequestRepository] Error saving quote:', error.message);
      throw new Error('No se pudo guardar la cotización. Por favor intenta de nuevo.');
    }
  }
}
