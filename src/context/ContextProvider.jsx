import React, { useState, createContext, useContext } from 'react';
import {english} from './LanguageText';

const StateContext = createContext();

const initialState = {
    activeMenu: false,
    language: english,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [language, setLanguage] = useState(english);

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                language,
                setLanguage,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);