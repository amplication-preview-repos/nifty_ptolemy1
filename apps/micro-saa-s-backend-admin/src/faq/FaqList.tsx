import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CHATBOT_TITLE_FIELD } from "../chatbot/ChatbotTitle";

export const FaqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FAQS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="answer" source="answer" />
        <ReferenceField label="chatbot" source="chatbot.id" reference="Chatbot">
          <TextField source={CHATBOT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="question" source="question" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};