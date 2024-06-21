import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type DataEmbeddingUpdateInput = {
  chatbot?: ChatbotWhereUniqueInput | null;
  data?: string | null;
  embedding?: InputJsonValue;
};
