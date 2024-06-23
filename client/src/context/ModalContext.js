import {createContext, useContext, useState} from "react";

const ModalContext = createContext();

export const ModalProvider = ({children}) => {
    const [selectedModal, setSelectedModal] = useState(null);

    return (
        <ModalContext.Provider value={{selectedModal, setSelectedModal}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);