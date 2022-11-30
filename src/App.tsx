import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import UsersPage from "./user/pages/UsersPage";
import UserPage from "./user/pages/UserPage";
import NewPlacePage from "./places/pages/NewPlacePage";

export default function App() {
    return (
        <>
            <Switch>
                <Route path={"/places/new"} component={NewPlacePage} />
                <Route path={"/users"} exact component={UsersPage} />
                <Route path={"/users/:uid"} component={UserPage} />
                <Route path={"*"}>
                    <Redirect to={"/users"} />
                </Route>
            </Switch>
        </>
    );
}
