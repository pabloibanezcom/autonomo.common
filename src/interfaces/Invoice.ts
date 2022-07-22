import { PopulatedDoc, Types } from 'mongoose';
import Currency from '../types/Currency';
import Category from './Category';
import CurrencyAmount from './CurrencyAmount';
import File from './File';
import InvoiceProductOrService from './InvoiceProductOrService';

export default interface Invoice {
  number?: string;
  description?: string;
  business: Types.ObjectId;
  issuedDate: Date;
  paymentDate?: Date;
  productsOrServices?: InvoiceProductOrService[];
  categories?: PopulatedDoc<Category>[];
  baseCurrency: Currency;
  exchangeRate?: Number;
  subtotal: CurrencyAmount;
  subtotalBaseCurrency?: CurrencyAmount;
  taxPct: Number;
  tax: CurrencyAmount;
  taxBaseCurrency?: CurrencyAmount;
  total: CurrencyAmount;
  totalBaseCurrency?: CurrencyAmount;
  file?: File;
}
