import { Types } from 'mongoose';
import { BusinessRole } from '../enums';
import { GrantType } from '../enums/GrantType';

export default interface UserBusiness {
  business: Types.ObjectId;
  grantType: GrantType;
  role: BusinessRole;
}
