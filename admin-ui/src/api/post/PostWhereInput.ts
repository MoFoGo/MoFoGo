import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TagWhereUniqueInput } from "../tag/TagWhereUniqueInput";

export type PostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  featuredImage?: StringNullableFilter;
  id?: StringFilter;
  tags?: TagWhereUniqueInput;
  title?: StringNullableFilter;
};
