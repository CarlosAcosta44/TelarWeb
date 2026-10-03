import { QuoteRequest } from '../entities/QuoteRequest';

// Repository interface — defines the contract, not the implementation
export interface QuoteRequestRepository {
  save(request: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>): Promise<void>;
}
