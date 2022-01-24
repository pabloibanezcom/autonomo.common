import { Types } from 'mongoose';
import AmountCurrency from './AmountCurrency';
import File from './File';

interface DescriptionElement {
  descriptionLine1: string;
  descriptionLine2?: string;
  quantity: number;
  unitPrice: AmountCurrency;
}

export default interface Invoice {
  number: string;
  issuer: Types.ObjectId;
  issuerType?: string;
  client: Types.ObjectId;
  clientType?: string;
  issuedDate: Date;
  paymentDate?: Date;
  description?: DescriptionElement[];
  categories?: Types.ObjectId[];
  subtotal: AmountCurrency;
  taxPct: number;
  tax: AmountCurrency;
  deductibleTaxPct?: number;
  deductibleTax?: AmountCurrency;
  total: AmountCurrency;
  totalOthers?: AmountCurrency[];
  file?: File;
}
