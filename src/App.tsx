import React, { Suspense, useCallback, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import UpdatePlacePage from "./places/pages/UpdatePlacePage";
import AuthPage from "./user/pages/Auth";
import { AuthContext } from "./shared/context/auth-context";

const MainNavigation = React.lazy(
    () => import("./shared/components/Navigation/MainNavigation")
);
const UsersPage = React.lazy(() => import("./user/pages/UsersPage"));
const UserPlacesPage = React.lazy(
    () => import("./places/pages/UserPlacesPage")
);
const NewPlacePage = React.lazy(() => import("./places/pages/NewPlacePage"));

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;

    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route path={"/"} exact component={UsersPage} />
                <Route path={"/:uid/places"} component={UserPlacesPage} />
                <Route path={"/places/new"} exact component={NewPlacePage} />
                <Route path={"/places/:placeId"} component={UpdatePlacePage} />
                <Redirect to={"/"} />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path={"/"} exact component={UsersPage} />
                <Route path={"/:uid/places"} component={UserPlacesPage} />
                <Route path={"/auth"} component={AuthPage} />
                <Redirect to={"/auth"} />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <Suspense fallback={<LoadingSpinner />}>
                <MainNavigation />
                <main>{routes}</main>
            </Suspense>
        </AuthContext.Provider>
    );
}
