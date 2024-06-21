import { ChatbotListRelationFilter } from "../chatbot/ChatbotListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnterpriseWhereUniqueInput } from "../enterprise/EnterpriseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  chatbots?: ChatbotListRelationFilter;
  email?: StringNullableFilter;
  enterprise?: EnterpriseWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
