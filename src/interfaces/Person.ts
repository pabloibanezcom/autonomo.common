import { ObjectId } from 'mongoose';
import Address from './Address';

export default interface Person {
  _id: ObjectId;
  auth0UserId?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
  address?: Address;
}
