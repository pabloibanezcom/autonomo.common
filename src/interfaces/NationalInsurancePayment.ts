import { Types } from 'mongoose';
import CurrencyAmount from './CurrencyAmount';

export default interface NationalInsurancePayment {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  person: Types.ObjectId;
  date: Date;
  amount: CurrencyAmount;
  description?: string;
}
