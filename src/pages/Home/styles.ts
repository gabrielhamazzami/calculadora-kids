import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, #4E3A91 0%, #E53B4E 100%);

    display: flex;
    align-items: center;
    flex-direction: column;

    .Logo{
        width: 300px;
        height: 300px;
        margin-bottom: 40px;
    }

    .btn {
        background-color: transparent;
        border: none;
        color: #fff;
        font-size: 15px;
        width: 100px;
        height: 32px;
        top: 5px;
        position: relative;
        cursor: pointer;     
  }

    .Ft {
        width: 100%;
        height: 0.1px;
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 10px 0px 30px 0;
        color: #fff;
        font-family: Roboto;
        font-size: 15px;
    }

    .Aut {
        font-style: italic;
    }

    @media(min-width: 700px){
        justify-content: center;
    }

`