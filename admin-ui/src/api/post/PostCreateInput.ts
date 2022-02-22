import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type PostCreateInput = {
  author?: AuthorWhereUniqueInput | null;
  content?: string | null;
  featuredImage?: string | null;
  tags?: TagWhereUniqueInput | null;
  title?: string | null;
};
