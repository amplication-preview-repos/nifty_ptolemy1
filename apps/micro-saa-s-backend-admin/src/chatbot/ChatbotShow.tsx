import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHATBOT_TITLE_FIELD } from "./ChatbotTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ChatbotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="botName" source="botName" />
        <TextField label="companyName" source="companyName" />
        <TextField label="contactDetails" source="contactDetails" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="DataEmbedding"
          target="chatbotId"
          label="DataEmbeddings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="chatbot"
              source="chatbot.id"
              reference="Chatbot"
            >
              <TextField source={CHATBOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="embedding" source="embedding" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Faq" target="chatbotId" label="FAQS">
          <Datagrid rowClick="show">
            <TextField label="answer" source="answer" />
            <ReferenceField
              label="chatbot"
              source="chatbot.id"
              reference="Chatbot"
            >
              <TextField source={CHATBOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="question" source="question" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
