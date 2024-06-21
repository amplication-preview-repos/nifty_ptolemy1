import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { ChatbotTitle } from "../chatbot/ChatbotTitle";

export const DataEmbeddingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="chatbot.id" reference="Chatbot" label="chatbot">
          <SelectInput optionText={ChatbotTitle} />
        </ReferenceInput>
        <TextInput label="data" multiline source="data" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
