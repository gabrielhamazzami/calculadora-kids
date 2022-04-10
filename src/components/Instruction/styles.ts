import styled from "styled-components";

export const ModalStyle = styled.main`
  .modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  };

  .container {
    background: linear-gradient(180deg, #4E3A91 0%, #E53B4E 100%);
    width: 70%;
    height: 70%;
    padding: 30px 30px;
    overflow-y: scroll;
  }
  
  .close {
    background-color: transparent;
    border: none;
    outline: none;
    width: 32px;
    height: 32px;
    right: calc(-100% + 30px);
    top: 1px;
    cursor: pointer;
    display: flex;
    position: relative;
    align-items: center;
    &:before,
    &:after {
      content: ' ';
      position: absolute;
      width: 2.5px;
      height: 24px;
      background-color: red;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }

  @media(min-width: 700px){
        justify-content: center;
    }

`