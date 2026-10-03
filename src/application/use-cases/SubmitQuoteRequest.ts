import { QuoteRequest } from '../../domain/entities/QuoteRequest';
import { QuoteRequestRepository } from '../../domain/repositories/QuoteRequestRepository';
import { SupabaseQuoteRequestRepository } from '../../infrastructure/supabase/SupabaseQuoteRequestRepository';

export class SubmitQuoteRequest {
  private repository: QuoteRequestRepository;

  constructor(repository?: QuoteRequestRepository) {
    // Default to Supabase, but injectable for testing
    this.repository = repository ?? new SupabaseQuoteRequestRepository();
  }

  async execute(data: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<void> {
    // Business validation
    if (!data.clientName.trim()) throw new Error('El nombre es requerido.');
    if (!data.clientEmail.trim() || !data.clientEmail.includes('@'))
      throw new Error('El correo electrónico no es válido.');
    if (!data.clientPhone.trim()) throw new Error('El teléfono/WhatsApp es requerido.');
    if (data.estimatedPriceCop <= 0)
      throw new Error('El precio estimado no es válido.');

    await this.repository.save(data);
  }
}
