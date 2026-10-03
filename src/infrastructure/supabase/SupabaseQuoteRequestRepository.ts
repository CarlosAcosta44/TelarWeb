import { QuoteRequest } from '../../domain/entities/QuoteRequest';
import { QuoteRequestRepository } from '../../domain/repositories/QuoteRequestRepository';
import { createClient } from '@supabase/supabase-js';

// En un caso real esto vendría de variables de entorno configuradas correctamente en Next.js
// Usamos ! para asertar que existen ya que Next.js debería arrojar error si no están en producción.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Cliente Singleton
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export class SupabaseQuoteRequestRepository implements QuoteRequestRepository {
  async save(request: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<void> {
    const { error } = await supabase
      .from('quote_requests')
      .insert([
        {
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
          status: 'pending' // Default value
        }
      ]);

    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(`Failed to save quote request: ${error.message}`);
    }
  }
}
