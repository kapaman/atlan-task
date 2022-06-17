import styled from "styled-components";
export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: ${({ expanded }) => (expanded ? "1px solid #E8E1ED" : "none")};
  border-radius: 8px;
  justify-content: flex-start;
  align-items: flex-start;
  max-height: ${({ expanded }) => (expanded ? "150px" : 0)};
  margin-top: ${({ expanded }) => (expanded ? "10px" : 0)};
  transition: max-height 0.5s, padding 0.5s, margin-top 0.5s;
  overflow: scroll;
`;

export const TableTiles = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #293def;
  padding: 6px 15px;
  width: 100%;
`;

export const TableKeysTile = styled.div`
  background: #f3f3f3;
  color: #293def;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  padding: 10px 15px;
  width: 100%;
`;
