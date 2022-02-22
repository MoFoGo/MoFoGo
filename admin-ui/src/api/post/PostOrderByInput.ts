import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  featuredImage?: SortOrder;
  id?: SortOrder;
  tagsId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
