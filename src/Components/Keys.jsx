import React, { useState } from "react";
import { ReactComponent as Down } from "../img/down.svg";
import { ReactComponent as Up } from "../img/up.svg";
import {
  Icon,
  NameAndRecords,
  PreviewWrapper,
  TableKeysTile,
  TableName,
  TableTiles,
  TileWrapper,
} from "../Styles/Keys.styled";
import { capitalize } from "../utils";

const PreviewTableKeys = ({ expanded, keys }) => {
  return (
    <PreviewWrapper expanded={expanded}>
      <TableKeysTile>Table Keys</TableKeysTile>
      <div>
        {keys.map((key, i) => (
          <TableTiles key={i}>{key}</TableTiles>
        ))}
      </div>
    </PreviewWrapper>
  );
};

const Keys = ({ name, keys, records, setRunQuery }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <TileWrapper>
        <NameAndRecords>
          <TableName
            onClick={() => {
              setRunQuery(`SELECT * FROM ${name}`);
            }}
          >
            {capitalize(name)}
          </TableName>
          <p>{records}</p>
        </NameAndRecords>
        <Icon onClick={() => setExpanded(!expanded)}>
          {expanded ? <Up></Up> : <Down></Down>}
        </Icon>
      </TileWrapper>
      <PreviewTableKeys expanded={expanded} keys={keys} />
    </>
  );
};

export default Keys;
