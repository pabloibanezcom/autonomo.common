import { Types } from 'mongoose';
import { Person, UserBusiness } from '.';

export default interface User {
  _id?: Types.ObjectId;
  email: string;
  password: string;
  isAdmin?: boolean;
  defaultBusiness?: Types.ObjectId;
  businesses?: UserBusiness[];
  person: Person;
}
