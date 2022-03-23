import { Types } from 'mongoose';
import TaxType from '../types/TaxType';
import AmountCurrency from './AmountCurrency';

export default interface TaxPayment {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  taxYear: Types.ObjectId;
  type: TaxType;
  date: Date;
  amount: AmountCurrency;
  description?: string;
}
