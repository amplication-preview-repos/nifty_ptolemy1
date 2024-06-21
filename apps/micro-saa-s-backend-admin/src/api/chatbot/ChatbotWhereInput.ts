import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataEmbeddingListRelationFilter } from "../dataEmbedding/DataEmbeddingListRelationFilter";
import { FaqListRelationFilter } from "../faq/FaqListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatbotWhereInput = {
  botName?: StringNullableFilter;
  companyName?: StringNullableFilter;
  contactDetails?: StringNullableFilter;
  dataEmbeddings?: DataEmbeddingListRelationFilter;
  description?: StringNullableFilter;
  faqs?: FaqListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
