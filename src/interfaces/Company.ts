import { Types } from 'mongoose';
import Address from './Address';
import Person from './Person';

export default interface Company {
  _id: Types.ObjectId;
  business: Types.ObjectId;
  name: string;
  cifVat?: string;
  address?: Address;
  director?: Person;
}
