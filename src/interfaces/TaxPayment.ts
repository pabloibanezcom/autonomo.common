import { Types } from 'mongoose';
import TaxType from '../types/TaxType';
import CurrencyAmount from './CurrencyAmount';

export default interface TaxPayment {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  taxYear: Types.ObjectId;
  type: TaxType;
  date: Date;
  amount: CurrencyAmount;
  description?: string;
}
