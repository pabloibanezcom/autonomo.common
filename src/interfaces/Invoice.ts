import { Types } from 'mongoose';
import InvoiceType from '../types/InvoiceType';
import AmountCurrency from './AmountCurrency';
import File from './File';

interface DescriptionElement {
  descriptionLine1: string;
  descriptionLine2?: string;
  quantity: number;
  unitPrice: AmountCurrency;
}

export default interface Invoice {
  _id?: Types.ObjectId;
  number: string;
  business: Types.ObjectId;
  type: InvoiceType;
  issuerOrClient: Types.ObjectId;
  issuedDate: Date;
  paymentDate?: Date;
  description?: DescriptionElement[];
  categories?: Types.ObjectId[];
  subtotal: AmountCurrency;
  subtotalBaseCurrency?: AmountCurrency;
  taxPct: number;
  tax: AmountCurrency;
  taxBaseCurrency?: AmountCurrency;
  deductibleTaxPct?: number;
  deductibleTax?: AmountCurrency;
  isDeductible?: boolean;
  total: AmountCurrency;
  totalBaseCurrency?: AmountCurrency;
  file?: File;
}
