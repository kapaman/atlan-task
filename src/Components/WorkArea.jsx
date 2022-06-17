import React, { useEffect, useState } from "react";
import {
  Body,
  ButtonWrapper,
  Header,
  HeaderWrapper,
  PrimaryButton,
  ResetButton,
  TextArea,
  Wrapper,
} from "../Styles/WorkArea.styled";
import Results from "./Results";

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
  }, [runQuery]);

  const handleRun = () => {
    if (query === runQuery) {
      setResultSection(true);
      return;
    }
    setRunQuery(query);
  };

  const [resultSection, setResultSection] = useState(false);
  const [query, setQuery] = useState("");
  const getBodyContent = () => {
    if (resultSection === true) {
      return (
        <Body>
          <Results
            style={{
              border: "1px solid #E8E1ED",
            }}
            database={database}
            tableName={tableName}
          ></Results>
        </Body>
      );
    }

    return (
      <Body>
        <TextArea
          placeholder="Enter Query Here"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
        ></TextArea>
        <ButtonWrapper>
          <PrimaryButton onClick={handleRun}>Run</PrimaryButton>
          <ResetButton
            onClick={() => {
              setQuery("");
            }}
          >
            Reset
          </ResetButton>
        </ButtonWrapper>
      </Body>
    );
  };

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
      {getBodyContent()}
    </Wrapper>
  );
};

export default WorkArea;
