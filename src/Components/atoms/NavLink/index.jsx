import { Link } from "react-router-dom";
const NavLink = ({ link, label, navState, setNavState }) => {
    let state = navState === "collapsed" ? "expanded" : "collapsed";
    return (
        <li>
            {setNavState && <Link to={link} onClick={() => setNavState(state)}>{label}</Link>}
            {!setNavState && <Link to={link} >{label}</Link>}
        </li>
    )
}

export default NavLink;