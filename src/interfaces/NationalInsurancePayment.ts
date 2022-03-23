import { Types } from 'mongoose';
import AmountCurrency from './AmountCurrency';

export default interface NationalInsurancePayment {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  person: Types.ObjectId;
  date: Date;
  amount: AmountCurrency;
  description?: string;
}
