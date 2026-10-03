export interface ContactMessage {
  id?: string;
  name: string;
  company?: string;
  email: string;
  message: string;
  status?: string;
  createdAt?: Date;
}
