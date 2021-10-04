import { load } from "dotenv";
import styled, { keyframes } from "styled-components";

const loading = keyframes`
    from {

        left: -200px;

    }
    to {
        left: 100%;
    }


`;

export const Skeleton = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: 3px;
  background-color: #11112a;
  border: ${(props) => props.border ? '10px solid #11112a':''};
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;

  ::before {
    content: "";
    display: block;
    position: absolute;
    left: -200px;
    top: 0;
    height: 100%;
    width: 200px;
    background: linear-gradient(to right, #0f0f25 0%, #28283f 50%, #0f0f25 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  }
`;
