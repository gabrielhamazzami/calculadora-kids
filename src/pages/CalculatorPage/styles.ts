import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
    flex-wrap:wrap ;
    width:100% ;
    background: linear-gradient(180deg, #F83601 0%, #FACA22 100%);

    display: flex;
    justify-content: space-around;
    align-items: center;


    .div1{
        button{
            margin: 10px 15px;
            background: #F83601;
            color: white;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            padding:0.5rem;
            cursor: pointer;
        }
    }

    @media (min-width: 700px) {
        height: 100vh;
    }

`