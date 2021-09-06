import Algorithms from "../Pages/Algorithms";
import Dashboard from "../Pages/Dashboard";

const routes = [
    {
        path: "/",
        component: <Dashboard />
    },
    {
        path: "/algo",
        component: <Algorithms />
    }
]

export default routes;