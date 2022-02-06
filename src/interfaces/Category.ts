import { Types } from 'mongoose';

export default interface Category {
  business: Types.ObjectId;
  name: string;
  color: string;
  type: string;
}
