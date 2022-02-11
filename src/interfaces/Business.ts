import { Types } from 'mongoose';
import { AuthorisedPerson, Company, Person } from '.';
import BusinessType from '../types/BusinessType';

export default interface Business {
  _id?: Types.ObjectId;
  name: string;
  type: BusinessType;
  company?: Company;
  soleTrader?: Person;
  authorisedPeople: AuthorisedPerson[];
}
