import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { ChatbotTitle } from "../chatbot/ChatbotTitle";
import { EnterpriseTitle } from "../enterprise/EnterpriseTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="chatbots"
          reference="Chatbot"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChatbotTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="enterprise.id"
          reference="Enterprise"
          label="enterprise"
        >
          <SelectInput optionText={EnterpriseTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
