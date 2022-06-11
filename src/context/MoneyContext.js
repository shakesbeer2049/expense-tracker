import { createContext, useState } from "react";

const MoneyContext = createContext();

export function MoneyProvider({children}){
    const [input, setInput] = useState(0);
    const [note, setNote] = useState("");
    const [type, setType] = useState("inc");
    const[date, setDate] = useState(new Date());
    return(
        <MoneyContext.Provider value={{input, setInput, type, setType, note, setNote, date, setDate}}>
            {children}
        </MoneyContext.Provider>
    )
}

export default MoneyContext;