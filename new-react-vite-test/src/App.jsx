import "./App.css";
import Buttons from "./components/Buttons";
import Form from "./components/Form";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  
  return (
    <div className="container">
      <h1>Welcome To SWEL Bank</h1>
      <Buttons/>
      <Table />
      <Form />
    </div>
  );
}

export default App;
