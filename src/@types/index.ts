import { ReactNode } from "react"

export interface IEquation {
    expretion: string | number
    result: string | number
}

export interface IButtonCalculator {
    value: number | string
    onClick?: (value1: number, value2: number) => void
}

export interface IProvider{
    children: ReactNode
}

export interface props {
    children: string | ReactNode | []
    onClose: () => void
    id?: string | undefined
}