import styled from "styled-components";


export const Box1 = styled.div`
    height: 150px;
    width:150px;
    border: 1px solid;
    filter: none;
    @media (min-width: 700px) { 
        width: 250px;
        height: 250px ;
    }
`

export const Box2 = styled.div`
     height: 150px;
    width:150px;
    border: 1px solid;
    filter: none;
    @media (min-width: 700px) { 
        width: 250px;
        height: 250px ;
    }
`

export const Box3 = styled.div`
    height: 150px;
    width:150px;
    border: 1px solid;
    filter: none;
    @media (min-width: 700px) { 
        width: 250px;
        height: 250px ;
    }
`
export const Box4 = styled.div`
    height: 150px;
    width:150px;
    border: 1px solid;
    filter: none;
    @media (min-width: 700px) { 
        width: 250px;
        height: 250px ;
    }
`


export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width:304px;
    height:304px;
    margin-bottom: 3rem;
    
    .disable{
        filter: grayscale(100%);
    }

    img{
        width:100% ;
        height:100% ;
    }

    @media (min-width: 700px) { 
        width: 504px;
        height:504px ;
    }
`