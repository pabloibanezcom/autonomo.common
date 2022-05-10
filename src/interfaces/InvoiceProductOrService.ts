import CurrencyAmount from './CurrencyAmount';

export default interface InvoiceProductOrService {
  descriptionLine1: string;
  descriptionLine2?: string;
  quantity: number;
  unitPrice: CurrencyAmount;
  subtotal: CurrencyAmount;
  taxPct: number;
  tax: CurrencyAmount;
  total: CurrencyAmount;
}
