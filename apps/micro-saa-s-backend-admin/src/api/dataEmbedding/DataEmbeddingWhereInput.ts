import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DataEmbeddingWhereInput = {
  chatbot?: ChatbotWhereUniqueInput;
  data?: StringNullableFilter;
  embedding?: JsonFilter;
  id?: StringFilter;
};
