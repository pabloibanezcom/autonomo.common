import { Types } from 'mongoose';
import Address from './Address';

export default interface Person {
  _id: Types.ObjectId;
  auth0UserId?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  role?: 'self-employed' | 'accountant';
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
  address?: Address;
}
