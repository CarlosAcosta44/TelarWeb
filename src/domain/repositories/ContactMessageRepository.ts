import { ContactMessage } from '../entities/ContactMessage';

export interface ContactMessageRepository {
  save(message: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<void>;
}
