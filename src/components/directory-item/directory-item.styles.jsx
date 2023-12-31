import styled from "styled-components"

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: 2s;
    background-image: ${({imageUrl}) => `url(${imageUrl})`}
`
export const Body = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    border-radius: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
    transition-duration: 0.5s;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #151515;
      text-transform: uppercase;
    }

    p {
      font-weight: lighter;
      font-size: 16px;
    }
`

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    border-radius: .5rem;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
      cursor: pointer;

      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & ${Body} {
        opacity: 0.9;
        transition-duration: 0.5s;
      }
    }
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }
`