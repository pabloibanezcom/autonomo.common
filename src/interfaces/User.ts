import { Types } from 'mongoose';
import Address from './Address';

export default interface User {
  _id?: Types.ObjectId;
  isAdmin?: boolean;
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
  color?: string;
  address?: Address;
  defaultBusiness?: Types.ObjectId;
}
