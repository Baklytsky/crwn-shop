import styled from "styled-components";
import {BaseButton, GoogleSignInButton, InvertedButton} from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    width: 100%;
    margin-top: auto;
    height: auto;
    font-size: 12px;
  }`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`