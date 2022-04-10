import { IProvider } from '../@types'
import { IResultProvider } from './Result'

export const Provider = ({ children }: IProvider) => {
    return(
        <IResultProvider>
            {children}
        </IResultProvider>
    )
}   