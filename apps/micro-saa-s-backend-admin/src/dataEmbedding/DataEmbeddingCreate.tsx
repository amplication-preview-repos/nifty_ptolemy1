import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatbotTitle } from "../chatbot/ChatbotTitle";

export const DataEmbeddingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="chatbot.id" reference="Chatbot" label="chatbot">
          <SelectInput optionText={ChatbotTitle} />
        </ReferenceInput>
        <TextInput label="data" multiline source="data" />
        <div />
      </SimpleForm>
    </Create>
  );
};
