import { Chatbot } from "../chatbot/Chatbot";
import { JsonValue } from "type-fest";

export type DataEmbedding = {
  chatbot?: Chatbot | null;
  createdAt: Date;
  data: string | null;
  embedding: JsonValue;
  id: string;
  updatedAt: Date;
};
