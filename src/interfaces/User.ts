import { Types } from 'mongoose';
import Address from './Address';

export default interface User {
  _id?: Types.ObjectId;
  auth0UserId?: string;
  isAdmin?: boolean;
  firstName?: string;
  lastName?: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
  address?: Address;
  defaultBusiness?: Types.ObjectId;
}
