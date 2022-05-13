import { Types } from 'mongoose';

export default interface Category {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  name: string;
  color: string;
  altColor: string;
  type: string;
}
