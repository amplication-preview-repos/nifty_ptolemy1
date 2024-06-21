import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EnterpriseWhereInput = {
  contactDetails?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
