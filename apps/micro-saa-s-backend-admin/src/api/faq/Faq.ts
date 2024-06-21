import { Chatbot } from "../chatbot/Chatbot";

export type Faq = {
  answer: string | null;
  chatbot?: Chatbot | null;
  createdAt: Date;
  id: string;
  question: string | null;
  updatedAt: Date;
};
