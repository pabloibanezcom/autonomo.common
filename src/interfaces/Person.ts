import { ObjectId } from 'mongoose';

export default interface Person {
  _id: ObjectId;
  auth0UserId?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  nif?: string;
  gender?: 'male' | 'female';
  picture?: string;
}
