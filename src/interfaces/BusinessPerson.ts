import { PopulatedDoc } from 'mongoose';
import { BusinessRole } from '../enums';
import Person from './Person';

export default interface BusinessPerson {
  person: PopulatedDoc<Person>;
  role: BusinessRole;
  since?: Date;
}
