import React, { useEffect, useState } from "react";
import { Header, HeaderWrapper, Wrapper } from "../../Styles/WorkArea.styled";
import Body from "./Body";

const WorkArea = ({ runQuery, setRunQuery, database }) => {
  const [tableName, setTableName] = useState("");

  useEffect(() => {
    if (runQuery.length > 0 && setRunQuery !== runQuery) {
      setQuery(runQuery);
      //Ideally here we send the query to an SQL engine and get the results back
      //but I am going to display default results since I am not actually parsing the queries
      const splitQuery = runQuery.split(" ");
      let tableNameFromQuery = splitQuery.length >= 3 ? splitQuery[3] : "";

      if (
        tableNameFromQuery.length === 0 ||
        !(tableNameFromQuery in database)
      ) {
        setTableName("suppliers");
      } else {
        setTableName(tableNameFromQuery);
      }
      setResultSection(true);
    }
  }, [runQuery, setRunQuery, database]);

  const handleRun = () => {
    if (query === runQuery) {
      setResultSection(true);
      return;
    }
    setRunQuery(query);
  };

  const [resultSection, setResultSection] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <Wrapper
      style={{
        marginLeft: "20px",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <HeaderWrapper>
        <Header
          active={resultSection === false}
          onClick={() => setResultSection(false)}
        >
          Query
        </Header>
        <Header
          active={resultSection === true}
          onClick={() => setResultSection(true)}
        >
          Results
        </Header>
      </HeaderWrapper>
      <Body
        resultSection={resultSection}
        tableName={tableName}
        database={database}
        setQuery={setQuery}
        query={query}
        handleRun={handleRun}
      ></Body>
    </Wrapper>
  );
};

export default WorkArea;
