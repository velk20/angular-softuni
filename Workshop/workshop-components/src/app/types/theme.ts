import { User } from './user';
import {Post} from "./post";

export interface Theme {
  subscribers: string[];
  posts: Post[];
  _id: string;
  themeName: string;
  userId: User;
  created_at: string;
  updatedAt: string;
  __v: number;
}
