import { Types } from 'mongoose';
import TaxPaymentType from '../types/TaxPaymentType';
import AmountCurrency from './AmountCurrency';

export default interface TaxPayment {
  payer: Types.ObjectId;
  payerType: string;
  type: TaxPaymentType;
  date: Date;
  amount: AmountCurrency;
  description?: string;
}
