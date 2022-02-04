import { Types } from 'mongoose';

export default interface YearReport {
  _id?: Types.ObjectId;
  creationDate: Date;
  taxYear: Types.ObjectId;
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
