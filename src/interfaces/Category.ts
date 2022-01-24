import { Types } from 'mongoose';

export default interface Category {
  user: Types.ObjectId;
  name: string;
  color: string;
  type: string;
}
