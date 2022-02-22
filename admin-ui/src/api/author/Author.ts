import { Post } from "../post/Post";

export type Author = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  profileImage: string | null;
  updatedAt: Date;
};
