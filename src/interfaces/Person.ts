import { Types } from 'mongoose';
import { Gender } from '../enums';
import Address from './Address';

export default interface Person {
  _id?: Types.ObjectId;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  nif?: string;
  gender?: Gender;
  picture?: string;
  color?: string;
  address?: Address;
}
