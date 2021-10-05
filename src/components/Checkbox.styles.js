import styled from "styled-components";

export const Checkbox = styled.input`
  border-radius: 3px;

  border: 1px solid white;
  width: 20px;
  height: 20px;

  outline: aliceblue;
  outline: 0px solid white;
  appearance: none;
  background-color: white;
  cursor: hover;
  cursor: pointer;

  &:checked {
    background-image: url(https://media.discordapp.net/attachments/427876466575933440/894774341399642112/content_08afe5b8-8b55-49d4-adf0-726f16958585.png);
  }
`;
