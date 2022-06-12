import { PopulatedDoc, Types } from 'mongoose';
import { Business, Person, UserBusiness } from '.';

export default interface User {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  isAdmin?: boolean;
  defaultBusiness?: PopulatedDoc<Business>;
  businesses?: UserBusiness[];
  person: PopulatedDoc<Person>;
}
