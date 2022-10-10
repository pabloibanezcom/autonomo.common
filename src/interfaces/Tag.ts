import { Types } from 'mongoose';

export default interface Tag {
  _id?: Types.ObjectId;
  business: Types.ObjectId;
  name: string;
  color: string;
  altColor: string;
}
