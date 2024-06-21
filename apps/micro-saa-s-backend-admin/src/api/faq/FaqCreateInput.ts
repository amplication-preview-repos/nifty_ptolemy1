import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";

export type FaqCreateInput = {
  answer?: string | null;
  chatbot?: ChatbotWhereUniqueInput | null;
  question?: string | null;
};
