import { Types } from 'mongoose';

export default interface YearReport {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  taxYear: Types.ObjectId;
  creationDate: Date;
  incomes: number;
  expenses: number;
  VATBalance: number;
  nationalInsurance: number;
  grossProfit: number;
  incomeTax: number;
  incomeTaxPaid: number;
  incomeTaxOwed: number;
  netIncome: number;
}
