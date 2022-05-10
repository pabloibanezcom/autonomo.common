import { PopulatedDoc, Types } from 'mongoose';
import Company from './Company';
import CurrencyAmount from './CurrencyAmount';
import Invoice from './Invoice';

export default interface Expense extends Invoice {
  _id?: Types.ObjectId;
  issuer: PopulatedDoc<Company>;
  deductibleTaxPct?: number;
  deductibleTax?: CurrencyAmount;
  isDeductible: boolean;
}
