import { UserUpdateManyWithoutEnterprisesInput } from "./UserUpdateManyWithoutEnterprisesInput";

export type EnterpriseUpdateInput = {
  contactDetails?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutEnterprisesInput;
};
