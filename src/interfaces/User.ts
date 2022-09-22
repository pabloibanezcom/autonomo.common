import { PopulatedDoc, Types } from 'mongoose';
import { Business, Person, UserBusiness } from '.';
import File from './File';

export default interface User {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  isAdmin?: boolean;
  picture?: File;
  defaultBusiness?: PopulatedDoc<Business>;
  businesses?: UserBusiness[];
  person: PopulatedDoc<Person>;
}
