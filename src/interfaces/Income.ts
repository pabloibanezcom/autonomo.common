import { PopulatedDoc, Types } from 'mongoose';
import Company from './Company';
import Invoice from './Invoice';

export default interface Income extends Invoice {
  _id?: Types.ObjectId;
  client: PopulatedDoc<Company>;
}
