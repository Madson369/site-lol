import styled from "styled-components";

let elo = {
  UNRANKED: "WHITE",
  IRON: "#574D4F",
  BRONZE: "#8C523A",
  SILVER: "#80989D",
  GOLD: "#cd792f",
  PLATINUM: "#4E9996",
  DIAMOND: "#576BCE",
  MASTER: "#9848E0",
  GRANDMASTER: "#CD4545",
  CHALLENGER: "#F4C874",
};

export const EloColor = styled.span`
  font-size: 14px;
  color: ${(props) => elo[props.color || "GOLD"]};
`;
