import { styled } from "styled-components";


export const BaseButton = styled.button`
    width: 90%;
    height: 40px;
    letter-spacing: 0.5px;
    line-height: 40px;
    padding: 0 35px 0 35px;
    font-size: 1rem;
    margin: 20px 0;
    border-radius: 0.6rem;
    background-color: rgb(29, 5, 150);
    color: white;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition-duration: 0.2s;

    &:hover {
      background-color: rgb(78, 12, 231);
      color: white;
      border: 1px solid black;
    }
`;

export const GoogleSignInbutton = styled(BaseButton)`
    background-color: orangered;
    color: white;

    &:hover {
      background-color: rgb(190, 105, 39); 
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: rgb(55, 12, 197);
    color: white;
    transition-duration: 0.2s;

    &:hover {
      background-color: blueviolet;
      color: white;
      border: none;
    }
`;