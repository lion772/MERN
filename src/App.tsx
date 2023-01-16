import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner/LoadingSpinner";
import UpdatePlacePage from "./places/pages/UpdatePlacePage";
import AuthPage from "./user/pages/Auth";

const MainNavigation = React.lazy(
    () => import("./shared/components/Navigation/MainNavigation")
);
const UsersPage = React.lazy(() => import("./user/pages/UsersPage"));
const UserPlacesPage = React.lazy(
    () => import("./places/pages/UserPlacesPage")
);
const NewPlacePage = React.lazy(() => import("./places/pages/NewPlacePage"));

export default function App() {
    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <MainNavigation />
                <main>
                    <Switch>
                        <Route path={"/"} exact component={UsersPage} />
                        <Route
                            path={"/:uid/places"}
                            component={UserPlacesPage}
                        />
                        <Route
                            path={"/places/new"}
                            exact
                            component={NewPlacePage}
                        />
                        <Route
                            path={"/places/:placeId"}
                            component={UpdatePlacePage}
                        />
                        <Route path={"/auth"} component={AuthPage} />
                        <Redirect to={"/"} />
                    </Switch>
                </main>
            </Suspense>
        </>
    );
}
