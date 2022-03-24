import React,{createContext, useReducer} from 'react';

export const PageMangeContext = createContext();


const initialState = {
    num : 1,
    fixedNum : 1,
}
const reducer = (state, action) => {
    switch(action.type) {
        case "prev" :
            return { num : state.num - 1};
        case "next":
            return { num : state.num + 1};
        default:
            return state;
    }
}
const PageManage = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <PageMangeContext.Provider value={{manageState : state, manageDispatch : dispatch}}>
            {props.children}
        </PageMangeContext.Provider>
    );
};

export default PageManage;