import { ChatbotWhereUniqueInput } from "../chatbot/ChatbotWhereUniqueInput";

export type FaqUpdateInput = {
  answer?: string | null;
  chatbot?: ChatbotWhereUniqueInput | null;
  question?: string | null;
};
