import { PopulatedDoc, Types } from 'mongoose';
import Company from './Company';
import CurrencyAmount from './CurrencyAmount';
import Invoice from './Invoice';
import Tag from './Tag';

export default interface Expense extends Invoice {
  _id?: Types.ObjectId;
  issuer: PopulatedDoc<Company>;
  tags?: PopulatedDoc<Tag>[];
  deductibleTaxPct?: number;
  deductibleTax?: CurrencyAmount;
  isDeductible: boolean;
}
