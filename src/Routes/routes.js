import Algorithms from "../Pages/Algorithms";
import Dashboard from "../Pages/Dashboard";
import HackerRank from "../Pages/HackerRank";
import Abbreviation from "../Pages/HackerRank/DynamicProgramming/Abbreviation";

const routes = [
    {
        path: "/",
        component: <Dashboard />
    },
    {
        path: "/algo",
        component: <Algorithms />
    },
    {
        path: "/hackerrank",
        component: <HackerRank />
    },
    {
        path: "/hackerrank/dynamicProgramming/abbreviation",
        component: <Abbreviation />
    }
]

export default routes;