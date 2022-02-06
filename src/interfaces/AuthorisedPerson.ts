import { Types } from 'mongoose';
import { GrantTypes } from '../enums/GrantTypes';

export default interface AuthorisedPerson {
  user: Types.ObjectId;
  grantType: GrantTypes;
}
