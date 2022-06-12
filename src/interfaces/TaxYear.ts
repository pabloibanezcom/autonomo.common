import { Types } from 'mongoose';
import TaxDefinition from './TaxDefinition';

export default interface TaxYear {
  _id?: Types.ObjectId;
  name: string;
  country: string;
  startDate: Date;
  endDate: Date;
  incomeTax?: TaxDefinition;
  dividendsTax?: TaxDefinition;
  vatBands?: number[];
}
