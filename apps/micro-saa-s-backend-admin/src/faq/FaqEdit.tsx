import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ChatbotTitle } from "../chatbot/ChatbotTitle";

export const FaqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="answer" multiline source="answer" />
        <ReferenceInput source="chatbot.id" reference="Chatbot" label="chatbot">
          <SelectInput optionText={ChatbotTitle} />
        </ReferenceInput>
        <TextInput label="question" source="question" />
      </SimpleForm>
    </Edit>
  );
};
