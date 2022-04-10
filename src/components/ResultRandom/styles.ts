import styled from "styled-components";

export const Container = styled.div`
    display:flex ;
`


export const BoxResult = styled.div`
    width: 65px;
    height: 65px;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
    background: #70B62F;
    border: 2px solid #ffffff;
    border-radius: 10px;
    margin: 0 15px;
    cursor:pointer;
    white-space: nowrap;
    overflow: auto;
    text-overflow: ellipsis;
    &:active{
        transform: scale(90%);
    }

`