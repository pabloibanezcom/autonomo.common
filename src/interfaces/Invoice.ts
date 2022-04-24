import { PopulatedDoc, Types } from 'mongoose';
import Currency from '../types/Currency';
import InvoiceType from '../types/InvoiceType';
import Category from './Category';
import Company from './Company';
import CurrencyAmount from './CurrencyAmount';
import File from './File';

export interface InvoiceProductOrService {
  descriptionLine1: string;
  descriptionLine2?: string;
  quantity: number;
  unitPrice: CurrencyAmount;
  subtotal: CurrencyAmount;
  taxPct: number;
  tax: CurrencyAmount;
  total: CurrencyAmount;
}

export default interface Invoice {
  _id?: Types.ObjectId;
  number: string;
  business: Types.ObjectId;
  type: InvoiceType;
  issuerOrClient: PopulatedDoc<Company>;
  issuedDate: Date;
  paymentDate?: Date;
  productsOrServices?: InvoiceProductOrService[];
  categories?: PopulatedDoc<Category>[];
  baseCurrency: Currency;
  subtotal: CurrencyAmount;
  subtotalBaseCurrency?: CurrencyAmount;
  taxPct: number;
  tax: CurrencyAmount;
  taxBaseCurrency?: CurrencyAmount;
  deductibleTaxPct?: number;
  deductibleTax?: CurrencyAmount;
  isDeductible?: boolean;
  total: CurrencyAmount;
  totalBaseCurrency?: CurrencyAmount;
  file?: File;
}
