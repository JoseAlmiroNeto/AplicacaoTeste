import Context from "@mui/base/TabsUnstyled/TabsContext";
import { createContext, useContext, useState } from "react";

const form = {
addDados: (v) => {},
listaDeDados:[],

}
export const FormContext = createContext(form)
export const ContextProvider = ({children}) => {
    const [dados, setDados] = useState([])
    const addDados = (v) => {
        const data = dados
        data.push(v)
        setDados(data)
        {console.log(dados)}
    }
    return (
        <FormContext.Provider value={{
            addDados,
            listaDeDados:dados
        }}>
            {children}
        </FormContext.Provider>
    )
}
export const useDados = () => useContext(FormContext)