import { styled } from "styled-components";
import { BaseButton, GoogleSignInbutton, InvertedButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    padding: 15px;
    border: 2px solid rgb(94, 94, 94);
    background-color: #222;
    top: 90px;
    right: 40px;
    z-index: 5;

    ${BaseButton},
    ${GoogleSignInbutton},
    ${InvertedButton} {
      margin-top: auto;
    }
`;

export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`
export const CartItems = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

  