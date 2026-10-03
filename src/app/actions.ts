'use server';

import { SubmitQuoteRequest } from '@/application/use-cases/SubmitQuoteRequest';
import { SubmitContactMessage } from '@/application/use-cases/SubmitContactMessage';
import { QuoteRequest } from '@/domain/entities/QuoteRequest';
import { ContactMessage } from '@/domain/entities/ContactMessage';

export type ActionResult = { success: true } | { success: false; error: string };

export async function submitQuoteAction(
  data: Omit<QuoteRequest, 'id' | 'status' | 'createdAt'>
): Promise<ActionResult> {
  try {
    const useCase = new SubmitQuoteRequest();
    await useCase.execute(data);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error inesperado. Por favor intenta de nuevo.';
    return { success: false, error: message };
  }
}

export async function submitContactAction(
  data: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>
): Promise<ActionResult> {
  try {
    const useCase = new SubmitContactMessage();
    await useCase.execute(data);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error inesperado. Por favor intenta de nuevo.';
    return { success: false, error: message };
  }
}
