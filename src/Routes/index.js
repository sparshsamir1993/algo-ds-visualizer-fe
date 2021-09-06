import { Switch, Route, Link } from "react-router-dom";
import routesData from "./routes";

let routes = [];
routes = routesData.map((routeData, index) => {
    return (
        <Route key={index} exact path={routeData.path}>
            {routeData.component}
        </Route>
    )
})
const Routes = () => {
    return (
        <Switch>
            {routes}
        </Switch>
    )
}

export default Routes;