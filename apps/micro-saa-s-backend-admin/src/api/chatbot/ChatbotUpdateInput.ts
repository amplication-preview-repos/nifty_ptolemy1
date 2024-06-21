import { DataEmbeddingUpdateManyWithoutChatbotsInput } from "./DataEmbeddingUpdateManyWithoutChatbotsInput";
import { FaqUpdateManyWithoutChatbotsInput } from "./FaqUpdateManyWithoutChatbotsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ChatbotUpdateInput = {
  botName?: string | null;
  companyName?: string | null;
  contactDetails?: string | null;
  dataEmbeddings?: DataEmbeddingUpdateManyWithoutChatbotsInput;
  description?: string | null;
  faqs?: FaqUpdateManyWithoutChatbotsInput;
  user?: UserWhereUniqueInput | null;
};
