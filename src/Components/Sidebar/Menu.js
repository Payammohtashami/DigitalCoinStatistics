import React,{useReducer , useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import { Theme } from '../../Context/ThemeContext';
// Styles
import '../../assets/scss/style.scss';
const initialState = {
    home: "active",
    news: "",
    exchange: "",
    calculator: "",
    setting: ""

}

const Menu = () => {
    const {theme} = useContext(Theme)
    const reducer = (state , action)=> {
        switch(action.type) {
            case "home":
                return {home: "active", news: "", exchange: "", calculator: "", setting: ""}
            case "news":
                return {home: "", news: "active", exchange: "", calculator: "", setting: ""}
            case "exchange":
                return {home: "", news: "", exchange: "active", calculator: "", setting: ""}
            case "calculator":
                return {home: "", news: "", exchange: "", calculator: "active", setting: ""}
            case "setting":
                return {home: "", news: "", exchange: "", calculator: "", setting: "active"}
            default:
                return initialState;
        }
    }
    const [active , dispatch] = useReducer(reducer , initialState)

    return (
        <div>
            
            <ul className={`list night ${theme.theme}`}>
                <Link to="/"><li onClick={() => {dispatch({type:"home"})}} className={`list-item ${active.home} ${theme.theme}`}><i className={`list-item-icon fa fa-home ${theme.theme} `}></i><span>Home</span></li></Link>
                <Link to="/News"><li onClick={() => {dispatch({type:"news"})}}  className={`list-item ${active.news} ${theme.theme}`}><i className={`list-item-icon fa fa-tv ${theme.theme} `}></i><span>News</span></li></Link>
                <Link to="/Exchange"><li onClick={() => {dispatch({type:"exchange"})}} className={`list-item ${active.exchange} ${theme.theme}`}><i className={`list-item-icon fa fa-exchange ${theme.theme} `}></i><span>Exchange</span></li></Link>
                <Link to="/Calculator"><li onClick={() => {dispatch({type:"calculator"})}} className={`list-item ${active.calculator} ${theme.theme}`}><i className={`list-item-icon fa fa-calculator ${theme.theme} `}></i><span>Calculator</span></li></Link>
                <Link to="/Setting"><li onClick={() => {dispatch({type:"setting"})}} className={`list-item ${active.setting} ${theme.theme}`}><i className={`list-item-icon fa fa-gears ${theme.theme} `}></i><span>Setting</span></li></Link>
            </ul>
        </div>
    );
};


export default Menu;