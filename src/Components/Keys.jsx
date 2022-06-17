import React, { useState } from "react";
import { ReactComponent as Down } from "../img/down.svg";
import { ReactComponent as Up } from "../img/up.svg";
import {
  PreviewWrapper,
  TableKeysTile,
  TableTiles,
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
      <div
        style={{
          display: "flex",
          width: "100%",
          border: " 1px solid #E8E1ED",
          borderRadius: "8px",
          padding: "8px 10px 8px 15px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#293DEF",
          }}
        >
          <p
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "500" }}
            onClick={() => {
              setRunQuery(`SELECT * FROM ${name}`);
            }}
          >
            {capitalize(name)}
          </p>
          <p>{records}</p>
        </div>
        <div
          onClick={() => setExpanded(!expanded)}
          style={{
            marginLeft: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            height: "20px",
            width: "15px",
          }}
        >
          {expanded ? <Up></Up> : <Down></Down>}
        </div>
      </div>
      <PreviewTableKeys expanded={expanded} keys={keys} />
    </>
  );
};

export default Keys;
