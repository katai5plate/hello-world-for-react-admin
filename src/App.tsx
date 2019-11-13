import React from "react";
import { Admin, DataProvider } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import "./App.css";

const dataProvider: DataProvider = jsonServerProvider(
  "http://jsonplaceholder.typicode.com"
);

const App: React.FC = () => <Admin dataProvider={dataProvider} />;

export default App;
