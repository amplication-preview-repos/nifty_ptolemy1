import { Chatbot } from "../chatbot/Chatbot";
import { Enterprise } from "../enterprise/Enterprise";
import { JsonValue } from "type-fest";

export type User = {
  chatbots?: Array<Chatbot>;
  createdAt: Date;
  email: string | null;
  enterprise?: Enterprise | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
