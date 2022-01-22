import { Types } from 'mongoose';
import TaxType from '../types/TaxType';
import AmountCurrency from './AmountCurrency';

export default interface TaxPayment {
  payer: Types.ObjectId;
  payerType: string;
  taxYear: Types.ObjectId;
  type: TaxType;
  date: Date;
  amount: AmountCurrency;
  description?: string;
}
