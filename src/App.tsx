import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./shared/components/UIElements/LoadingSpinner/LoadingSpinner";

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
                        <Route path={"/places/new"} component={NewPlacePage} />
                        <Route path="/places/:placeId" />
                        <Redirect to={"/"} />
                    </Switch>
                </main>
            </Suspense>
        </>
    );
}
