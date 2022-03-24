import React,{useReducer, createContext} from 'react';

export const Theme = createContext();

const initialState = {
    theme: ""
}
const ThemeContext = (props) => {

    const reducer = (state , action) => {
        switch(action.type){
            case "DARK" :
                return { theme : "night"}
            case "LIGHT" :
                return { theme : ""}
            default:
                return initialState
        }
    }
    const [theme, themeDispatch] = useReducer(reducer, initialState);
    return (
        <Theme.Provider value={{theme , themeDispatch}}>
            {props.children}
        </Theme.Provider>
    );
};

export default ThemeContext;