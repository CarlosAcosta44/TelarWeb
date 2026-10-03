import { ContactMessage } from '../../domain/entities/ContactMessage';
import { ContactMessageRepository } from '../../domain/repositories/ContactMessageRepository';
import { SupabaseContactMessageRepository } from '../../infrastructure/supabase/SupabaseContactMessageRepository';

export class SubmitContactMessage {
  private repository: ContactMessageRepository;

  constructor(repository?: ContactMessageRepository) {
    this.repository = repository ?? new SupabaseContactMessageRepository();
  }

  async execute(data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<void> {
    if (!data.name.trim()) throw new Error('El nombre es requerido.');
    if (!data.email.trim() || !data.email.includes('@'))
      throw new Error('El correo electrónico no es válido.');
    if (!data.message.trim()) throw new Error('El mensaje es requerido.');

    await this.repository.save(data);
  }
}
