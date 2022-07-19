import styled from "styled-components";
import {
  Button as ButtonComp
} from "@mui/material";
export const Container = styled.div `
  /* background-image: url("/Logo.png"); */
  padding-top: 5.5rem;  
  width: 100vw;
  background-size: cover;
  min-height: 100vh;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  gap:1em
`;
export const Button = styled(ButtonComp)`
 background-color: ${({ unable }) =>
        !unable ? "hsl(300, 100%, 25%, 1)" : "hsl(300, 100%, 25%, 0.1)"};
  color: white;
  background: linear-gradient(92.43deg, #FF00A8 19.97% , #8C46FF 111.92%);
  box-shadow: 1px 1px 1px #333;
  :hover {
    background-color: hsl(300, 100%, 25%, 0.1);
  }
  cursor: ${({ unable }) => (!unable ? "pointer" : "not-allowed")};
  /* cursor: not-allowed; */
`;