import { Types } from 'mongoose';
import { BusinessRoles } from '../enums';

export default interface BusinessPerson {
  person: Types.ObjectId;
  role: BusinessRoles;
  since?: Date;
}
