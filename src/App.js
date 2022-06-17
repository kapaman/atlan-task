import { useEffect, useState } from "react";
import "./App.css";
import Directory from "./Components/Directory";
import WorkArea from "./Components/WorkArea";
import data from "./data.js";
import { Main, Navbar } from "./Styles/General.styled";

const App = () => {
  const [database, setDatabase] = useState(data);
  const [runQuery, setRunQuery] = useState("");

  // useEffect(() => {
  //   //can fetch here but we wont since we're using dummy data
  // }, []);

  let overviewData = [];
  for (const table in data) {
    overviewData.push({
      name: table,
      keys: Object.keys(data[table][0]),
      records: data[table].length,
    });
  }

  return (
    <div>
      <Navbar>ATLAN SQL EDITOR</Navbar>
      <Main>
        <Directory
          overviewData={overviewData}
          setRunQuery={setRunQuery}
        ></Directory>
        <WorkArea
          database={database}
          setRunQuery={setRunQuery}
          runQuery={runQuery}
        ></WorkArea>
      </Main>
    </div>
  );
};

export default App;
