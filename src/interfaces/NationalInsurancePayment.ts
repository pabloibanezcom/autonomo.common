import { Types } from 'mongoose';
import AmountCurrency from './AmountCurrency';

export default interface NationalInsurancePayment {
  person: Types.ObjectId;
  taxYear: Types.ObjectId;
  date: Date;
  amount: AmountCurrency;
  description?: string;
}