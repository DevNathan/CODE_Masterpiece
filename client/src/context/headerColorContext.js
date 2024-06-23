import {createContext, useContext, useState} from "react";

const HeaderColorContext = createContext();

const HeaderColorProvider = ({children}) => {
    const [isHeaderSpecialized, setIsHeaderSpecialized] = useState(false);

    return (
        <HeaderColorContext.Provider value={{isHeaderSpecialized, setIsHeaderSpecialized}}>
            {children}
        </HeaderColorContext.Provider>
    )
}

const useHeaderColor = () => useContext(HeaderColorContext);

export {HeaderColorProvider, useHeaderColor};