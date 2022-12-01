import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import UsersPage from "./user/pages/UsersPage";
import UserPage from "./user/pages/UserPage";
import NewPlacePage from "./places/pages/NewPlacePage";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

export default function App() {
    return (
        <>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path={"/"} exact component={UsersPage} />
                    <Route path={"/:uid/places"} component={UserPage} />
                    <Route path={"/places/new"} component={NewPlacePage} />
                    <Route path="/places/:placeId" />
                    <Redirect to={"/"} />
                </Switch>
            </main>
        </>
    );
}
