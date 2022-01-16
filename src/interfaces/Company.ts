import { Types } from 'mongoose';
import Address from './Address';
import Person from './Person';
import Shareholding from './Shareholding';

export default interface Company {
  _id: Types.ObjectId;
  name: string;
  cifVat?: string;
  address?: Address;
  director?: Person;
  shareholdings?: Shareholding[];
}
