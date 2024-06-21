import { DataEmbedding } from "../dataEmbedding/DataEmbedding";
import { Faq } from "../faq/Faq";
import { User } from "../user/User";

export type Chatbot = {
  botName: string | null;
  companyName: string | null;
  contactDetails: string | null;
  createdAt: Date;
  dataEmbeddings?: Array<DataEmbedding>;
  description: string | null;
  faqs?: Array<Faq>;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
