import { ChatbotUpdateManyWithoutUsersInput } from "./ChatbotUpdateManyWithoutUsersInput";
import { EnterpriseWhereUniqueInput } from "../enterprise/EnterpriseWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  chatbots?: ChatbotUpdateManyWithoutUsersInput;
  email?: string | null;
  enterprise?: EnterpriseWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
