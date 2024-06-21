import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FaqWhereInput = {
  answer?: StringNullableFilter;
  chatbot?: ChatbotWhereUniqueInput;
  id?: StringFilter;
  question?: StringNullableFilter;
};
