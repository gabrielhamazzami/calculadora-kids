import { useState } from "react"
import { useResult } from "../../Providers/Result"
import { generateExpretion, shuffleArray } from "../../utils/utils"
import { Container, BoxResult } from "./styles"

interface IResultRandom{
    resultParams: string | number
    arr: Array<number>
}

export const ResultRandom = ({ resultParams, arr }: IResultRandom) => {

    const { setCountResult, SetErrorResult, SetResult, SetPopUp, countResult, SetDisable, SetExp} = useResult()


    const verifyResult = (selectResult: number | string) => {
        if(selectResult == resultParams) {
            const expretion = generateExpretion() 
            SetExp(expretion)
            SetResult(eval(expretion))
            setCountResult(1)
            SetDisable(false)
            if(countResult === 3){
                SetPopUp(true)
                SetErrorResult(false)
            }
            
        }else{
            SetErrorResult(true)
            SetPopUp(true)
        } 
    }

    return(
        <Container>
            {arr.map(res =>  <BoxResult key={res} onClick={() => verifyResult(res)}>{res}</BoxResult>)}
        </Container>
    )
}