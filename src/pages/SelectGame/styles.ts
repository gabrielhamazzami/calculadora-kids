import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: auto;
    gap: 10px;
    padding-bottom: 20px;
    background: linear-gradient(180deg, #3A47D4 0%, #84C9D0 100%);

    img{
        margin: 10px;
        cursor:pointer ;
    }

    img:hover{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.1);
        transition:all 0.5s ease; 
    }

    .Games{
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        margin: 30px 30px;
        
        img{
            width: 260px;
            margin: auto;
            border: 4px solid white;
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        .Games{
            width: 600px;
        }
    }

    @media (min-width: 1024px) {
        .Games{
            width: 900px;
        }
    }


    h4{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 20x;
        text-align: center;
    }
`