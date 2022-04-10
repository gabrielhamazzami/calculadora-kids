import styled from "styled-components";
import { PopUpProps } from ".";

export const Container = styled.div<PopUpProps>`
    width: 100vw;
    height: 100vh;
    position: fixed;
    background: rgba(1, 1, 1, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: ${props => props.openModal ? "visible" : "hidden"};
    top: 50%;
    transform: translateY(-50%);
    z-index: 99;
    .Modal{
        width: 260px;
        height: 279px;
        border-radius: 10px;
        background: white;
        font-weight: bold;
        font-size: 26px;
        color: ${props => props.success ? "#4EBE4B" : "#BE4B4B"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        

        button{
            width: 200px;
            height: 40px;
            font-weight: bold;
            font-size: 20px;
            background: ${props => props.success ? "linear-gradient(180deg, #4EBE4B 0%, #3A8E38 100%)" : "linear-gradient(180deg, #BE4B4B 0%, #8E3838 100%);"};
            border: none;
            border-radius: 50px;
            color: white;
            margin-top: 10px;
            cursor: pointer;
        }
        .LottieAnimation{
            width: 100px;
        }
    }
`