import { Types } from 'mongoose';
import Address from './Address';

export default interface Person {
  _id?: Types.ObjectId;
  firstName?: string;
  lastName?: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
  address?: Address;
}
