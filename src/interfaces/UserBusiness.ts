import { Types } from 'mongoose';
import { BusinessRoles } from '../enums';
import { GrantTypes } from '../enums/GrantTypes';

export default interface UserBusiness {
  business: Types.ObjectId;
  grantType: GrantTypes;
  role: BusinessRoles;
}
