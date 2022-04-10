import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content:space-around;
    width: 300px;
    height:400px ;
    button{
        transition: 1.5s;
        width: 70px;
        height: 70px;
        color: #000000;
        font-size: 2rem;
        padding: 5px;
        background: white;
        border: 1px solid #000000;
        border-radius: 15px;
        margin: 5px;
        cursor: pointer;
        &:active{
            transform: scale(90%);
        }

    }
    
    button:nth-child(11), button:nth-child(12), button:nth-child(13),  button:nth-child(14),  button:nth-child(15){
        background:#4AFFF4 ;
    }
    button:nth-child(15){
        color: #ffff;
        background: #FF5353;
    }
    .disable{
        position: relative;
        transition: 1s;
        opacity: 0.7;
        color: #ccc;
        z-index: 0;
    }

`


export const ContentResult = styled.div`
    display: flex;
    justify-content:center ;
    align-items: center;
    height: 100px;
    width: 290px;
    margin: 0 auto;
`
