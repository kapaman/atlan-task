import React, { useState } from "react";
import {
  Body,
  WorkspaceWrapper,
  Header,
  ToggleButton,
  Wrapper,
  TableHeading,
  TableSubHeading,
} from "../Styles/Directory.styled";
import { ReactComponent as Left } from "../img/left.svg";
import { ReactComponent as Right } from "../img/right.svg";
import { ReactComponent as WorkSpace } from "../img/workspace.svg";
import Keys from "./Keys";

const Directory = ({ overviewData, setRunQuery }) => {
  const [collapsed, setCollapsed] = useState(false);

  const getHeader = () => {
    if (collapsed) {
      return (
        <WorkSpace
          style={{ cursor: "pointer" }}
          onClick={() => setCollapsed(false)}
        />
      );
    }
    return (
      <>
        <p>Workspace</p>
        <ToggleButton
          collapsed={collapsed}
          onClick={() => {
            setCollapsed(true);
          }}
        >
          <Left />
        </ToggleButton>
      </>
    );
  };

  const getBodyContent = () => {
    if (collapsed) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            cursor: "pointer",
          }}
          onClick={() => setCollapsed(false)}
        >
          <Right />
        </div>
      );
    }

    return (
      <WorkspaceWrapper>
        <TableHeading>Tables</TableHeading>
        <TableSubHeading>Tables with their respective records</TableSubHeading>
        {overviewData.map((table, i) => (
          <Keys
            name={table.name}
            keys={table.keys}
            records={table.records}
            setRunQuery={setRunQuery}
            key={i}
          />
        ))}
      </WorkspaceWrapper>
    );
  };

  return (
    <Wrapper collapsed={collapsed}>
      <Header collapsed={collapsed}>{getHeader()}</Header>
      <Body collapsed={collapsed}>{getBodyContent()}</Body>
    </Wrapper>
  );
};

export default Directory;
