import Company from './Company';

type Currency = 'GBP' | 'EUR' | 'USD';

interface DescriptionElement {
  description_line_1: string;
  description_line_2?: string;
  quantity: number;
  unit_price: number;
  unit_price_currency: Currency;
}

export default interface Invoice {
  number: string;
  to: Company;
  issued_date: Date;
  payment_date?: Date;
  description?: DescriptionElement[];
  tax_base: number;
  tax_base_currency: Currency;
  tax_pct: number;
  tax: number;
  tax_currency: Currency;
  total: number;
  total_currency: Currency;
  total_euro: number;
  currency_rate?: number;
}
