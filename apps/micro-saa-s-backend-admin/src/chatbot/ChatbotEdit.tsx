import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DataEmbeddingTitle } from "../dataEmbedding/DataEmbeddingTitle";
import { FaqTitle } from "../faq/FaqTitle";
import { UserTitle } from "../user/UserTitle";

export const ChatbotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="botName" source="botName" />
        <TextInput label="companyName" source="companyName" />
        <TextInput label="contactDetails" multiline source="contactDetails" />
        <ReferenceArrayInput
          source="dataEmbeddings"
          reference="DataEmbedding"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DataEmbeddingTitle} />
        </ReferenceArrayInput>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="faqs"
          reference="Faq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FaqTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
