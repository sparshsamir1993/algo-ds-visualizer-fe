import NavLink from "../../atoms/NavLink";
let navData = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Algorithms",
        link: "/algo"
    },
    {
        title: "Data Structures",
        link: "/ds"
    },
    {
        title: "HackerRank",
        link: "/hackerrank"
    },
    {
        title: "Leetcode",
        link: "/leetcode"
    }
]
const NavBar = ({ state, setNavState }) => {
    return (
        <nav className={`navbar ${state}`}>
            <ul>
                {navData.map((item, index) => {
                    return <NavLink navState={state} setNavState={setNavState} label={item.title} link={item.link} key={index}></NavLink>
                })}
            </ul>
        </nav>
    )
}

export default NavBar;