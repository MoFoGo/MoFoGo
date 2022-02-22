import { Author } from "../author/Author";
import { Tag } from "../tag/Tag";

export type Post = {
  author?: Author | null;
  content: string | null;
  createdAt: Date;
  featuredImage: string | null;
  id: string;
  tags?: Tag | null;
  title: string | null;
  updatedAt: Date;
};
