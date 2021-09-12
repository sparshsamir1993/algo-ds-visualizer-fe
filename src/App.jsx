import { Menu, Close } from "@material-ui/icons";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/organisms/NavBar";
import Routes from "./Routes";
import "./styles/index.scss";
const App = () => {
    let [navState, setNavState] = useState("collapsed");

    return (
        <BrowserRouter>
            <div className="top-nav">
                {navState === "collapsed" && <Menu onClick={() => navState === "collapsed" ? setNavState("expanded") : setNavState("collapsed")}></Menu>}
                {navState === "expanded" && <Close onClick={() => navState === "collapsed" ? setNavState("expanded") : setNavState("collapsed")}></Close>}
            </div>
            <NavBar state={navState} setNavState={setNavState} />
            <Routes />
        </BrowserRouter>
    )
}

export default App;