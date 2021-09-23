import styled from "styled-components";

let cores = {
  BR: "#31db9e",
  NA: "#ff9b00",
  EUW: "#1246ae",
  EUN: "#1274ae",
  KR: "#561ac8",
  JP: "#ff4e8c",
  RU: "#d0021b",
  OCE: "#7ad0d7",
  TR: "#ff4e50",
  LAN: "#ffc400",
};
export const Region = styled.div`
  background-color: ${(props) => cores[props.cor || "BR"]};
  width: 40px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bolder;
  cursor: pointer;
`;
