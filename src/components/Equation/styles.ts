import styled from "styled-components";

export const Container = styled.div`
    width: 260px;
    height: 80px;
    border-radius: 15px;
    background: #ffffff;
    display: flex;
    justify-content:center ;
    align-items: center;
    border: 1px solid;
    margin: 0 auto;
    white-space: nowrap;
    overflow: auto;
    text-overflow: ellipsis;


    p, span{
        font-weight: bold;
        font-size: 2rem;
        margin:0 0.5rem ;
        color: #000;
    }

    .result{
        display:flex ;
        justify-items:center ;
        align-items:center ;
        background: #FF5F5F;
        color: white;
        border-radius:15px;
        svg{
            width:100%;
            font-size: 2rem;
        }
    }

    .match-result{
        color: #22be22;
    }
`