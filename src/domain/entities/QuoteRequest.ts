// Domain entity — no framework dependencies
export type ProjectType =
  | 'landing'
  | 'corporate'
  | 'ecommerce'
  | 'custom_saas'
  | 'ai_system';

export type ViewsScope = '1-3' | '4-7' | '8+' | 'dynamic';

export type QuoteStatus =
  | 'pending'
  | 'contacted'
  | 'negotiating'
  | 'closed_won'
  | 'closed_lost';

export interface QuoteRequest {
  id?: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  projectType: ProjectType;
  viewsScope: ViewsScope;
  specialModules: string[];
  techArchitecture: string;
  estimatedPriceCop: number;
  estimatedPriceUsd: number;
  estimatedTimeline: string;
  status?: QuoteStatus;
  createdAt?: string;
}
