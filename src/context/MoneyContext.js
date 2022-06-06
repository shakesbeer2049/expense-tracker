import { createContext, useState } from "react";

const MoneyContext = createContext();

export function MoneyProvider({children}){
    const [input, setInput] = useState(0);
    const [type, setType] = useState("inc");
    return(
        <MoneyContext.Provider value={{input, setInput, type, setType}}>
            {children}
        </MoneyContext.Provider>
    )
}

export default MoneyContext;