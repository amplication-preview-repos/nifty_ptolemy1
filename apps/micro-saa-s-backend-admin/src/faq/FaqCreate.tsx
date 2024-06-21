import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChatbotTitle } from "../chatbot/ChatbotTitle";

export const FaqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="answer" multiline source="answer" />
        <ReferenceInput source="chatbot.id" reference="Chatbot" label="chatbot">
          <SelectInput optionText={ChatbotTitle} />
        </ReferenceInput>
        <TextInput label="question" source="question" />
      </SimpleForm>
    </Create>
  );
};
