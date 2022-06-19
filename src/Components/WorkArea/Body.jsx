import React from "react";
import {
  WorkspaceBody,
  ButtonWrapper,
  PrimaryButton,
  ResetButton,
  TextArea,
} from "../../Styles/WorkArea.styled";
import Results from "../Results";

const Body = ({
  resultSection,
  tableName,
  database,
  setQuery,
  query,
  handleRun,
}) => {
  if (resultSection === true) {
    return (
      <WorkspaceBody>
        <Results
          style={{
            border: "1px solid #E8E1ED",
          }}
          database={database}
          tableName={tableName}
        ></Results>
      </WorkspaceBody>
    );
  }

  return (
    <WorkspaceBody>
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
    </WorkspaceBody>
  );
};

export default Body;
