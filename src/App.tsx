import React from "react";
import { Admin, DataProvider, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./App.css";

const dataProvider: DataProvider = jsonServerProvider(
  "http://jsonplaceholder.typicode.com"
);

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
