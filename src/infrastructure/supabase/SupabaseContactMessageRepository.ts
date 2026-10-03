import { ContactMessage } from '../../domain/entities/ContactMessage';
import { ContactMessageRepository } from '../../domain/repositories/ContactMessageRepository';
import { supabase } from './SupabaseQuoteRequestRepository'; // Reusing the same singleton client

export class SupabaseContactMessageRepository implements ContactMessageRepository {
  async save(message: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<void> {
    const { error } = await supabase
      .from('contact_messages')
      .insert([
        {
          name: message.name,
          company: message.company,
          email: message.email,
          message: message.message,
          status: 'unread'
        }
      ]);

    if (error) {
      console.error('Supabase insert error (contact_messages):', error);
      throw new Error(`Failed to save contact message: ${error.message}`);
    }
  }
}
