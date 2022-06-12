import { Types } from 'mongoose';
import Currency from '../types/Currency';
import Address from './Address';
import Person from './Person';

export default interface Company {
  _id: Types.ObjectId;
  business: Types.ObjectId;
  name: string;
  country?: string;
  cifVat?: string;
  address?: Address;
  creationDate?: Date;
  director?: Person;
  defaultCurrency?: Currency;
  color?: string;
}
