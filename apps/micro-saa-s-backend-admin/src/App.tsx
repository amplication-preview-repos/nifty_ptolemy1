import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EnterpriseList } from "./enterprise/EnterpriseList";
import { EnterpriseCreate } from "./enterprise/EnterpriseCreate";
import { EnterpriseEdit } from "./enterprise/EnterpriseEdit";
import { EnterpriseShow } from "./enterprise/EnterpriseShow";
import { ChatbotList } from "./chatbot/ChatbotList";
import { ChatbotCreate } from "./chatbot/ChatbotCreate";
import { ChatbotEdit } from "./chatbot/ChatbotEdit";
import { ChatbotShow } from "./chatbot/ChatbotShow";
import { DataEmbeddingList } from "./dataEmbedding/DataEmbeddingList";
import { DataEmbeddingCreate } from "./dataEmbedding/DataEmbeddingCreate";
import { DataEmbeddingEdit } from "./dataEmbedding/DataEmbeddingEdit";
import { DataEmbeddingShow } from "./dataEmbedding/DataEmbeddingShow";
import { FaqList } from "./faq/FaqList";
import { FaqCreate } from "./faq/FaqCreate";
import { FaqEdit } from "./faq/FaqEdit";
import { FaqShow } from "./faq/FaqShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MicroSaaSBackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Enterprise"
          list={EnterpriseList}
          edit={EnterpriseEdit}
          create={EnterpriseCreate}
          show={EnterpriseShow}
        />
        <Resource
          name="Chatbot"
          list={ChatbotList}
          edit={ChatbotEdit}
          create={ChatbotCreate}
          show={ChatbotShow}
        />
        <Resource
          name="DataEmbedding"
          list={DataEmbeddingList}
          edit={DataEmbeddingEdit}
          create={DataEmbeddingCreate}
          show={DataEmbeddingShow}
        />
        <Resource
          name="Faq"
          list={FaqList}
          edit={FaqEdit}
          create={FaqCreate}
          show={FaqShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
