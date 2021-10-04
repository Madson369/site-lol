import styled from "styled-components";




export const RegionDropwn = styled.div`
  position: absolute;
  top: 100%;
  z-index: 2;
  height: ${(props) => props.visible == true? '300px':'0px'};
  overflow: hidden;
  transition: height 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);

`;
