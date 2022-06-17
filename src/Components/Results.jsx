import React from "react";

import DataTable from "react-data-table-component";
import { PrimaryButton } from "../Styles/WorkArea.styled";
import saveJSON from "../utils";

const Results = ({ tableName, database }) => {
  let columns = [];
  //refactoring data for table component
  if (tableName.length > 0)
    for (const key of Object.keys(database[tableName][0])) {
      columns.push({
        name: key,
        selector: (row) => row[key],
      });
    }

  return (
    <>
      <div
        style={{
          height: "calc(100% - 65px)",
          overflow: "scroll",
          border: "1px solid #E8E1ED",
          borderRadius: "5px",
        }}
      >
        <DataTable columns={columns || {}} data={database[tableName] || {}} />
      </div>
      <PrimaryButton
        style={{ marginTop: "20px" }}
        onClick={() => {
          saveJSON(database[tableName], `${tableName}.json`);
        }}
      >
        Export
      </PrimaryButton>
    </>
  );
};

export default Results;
