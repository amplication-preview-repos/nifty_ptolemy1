import { UserCreateNestedManyWithoutEnterprisesInput } from "./UserCreateNestedManyWithoutEnterprisesInput";

export type EnterpriseCreateInput = {
  contactDetails?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutEnterprisesInput;
};
