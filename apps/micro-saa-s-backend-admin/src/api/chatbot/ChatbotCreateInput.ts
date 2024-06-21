import { DataEmbeddingCreateNestedManyWithoutChatbotsInput } from "./DataEmbeddingCreateNestedManyWithoutChatbotsInput";
import { FaqCreateNestedManyWithoutChatbotsInput } from "./FaqCreateNestedManyWithoutChatbotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatbotCreateInput = {
  botName?: string | null;
  companyName?: string | null;
  contactDetails?: string | null;
  dataEmbeddings?: DataEmbeddingCreateNestedManyWithoutChatbotsInput;
  description?: string | null;
  faqs?: FaqCreateNestedManyWithoutChatbotsInput;
  user?: UserWhereUniqueInput | null;
};
