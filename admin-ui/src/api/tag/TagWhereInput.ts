import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TagWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
