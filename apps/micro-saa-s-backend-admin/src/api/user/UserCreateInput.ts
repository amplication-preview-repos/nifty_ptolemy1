import { ChatbotCreateNestedManyWithoutUsersInput } from "./ChatbotCreateNestedManyWithoutUsersInput";
import { EnterpriseWhereUniqueInput } from "../enterprise/EnterpriseWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  chatbots?: ChatbotCreateNestedManyWithoutUsersInput;
  email?: string | null;
  enterprise?: EnterpriseWhereUniqueInput | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
