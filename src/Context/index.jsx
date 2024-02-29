import { createContext,useState } from "react"

export const PortfolioContext = createContext();

export const PortfolioProvider = ({children}) => {
    const [head, setHead] = useState(false);

    return (
        <PortfolioContext.Provider value={{
            head,
            setHead,
        }}>
            {children}
        </PortfolioContext.Provider>
    )
}