import { Chatbot as TChatbot } from "../api/chatbot/Chatbot";

export const CHATBOT_TITLE_FIELD = "botName";

export const ChatbotTitle = (record: TChatbot): string => {
  return record.botName?.toString() || String(record.id);
};
