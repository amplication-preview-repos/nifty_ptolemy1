import { SortOrder } from "../../util/SortOrder";

export type ChatbotOrderByInput = {
  botName?: SortOrder;
  companyName?: SortOrder;
  contactDetails?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
