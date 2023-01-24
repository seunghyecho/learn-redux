import React from "react";
import "./App.css";
import UsersContainer from "./containers/UsersContainer";
import {Route} from 'react-router-dom';
import UserContainer from "./containers/UserContainer";

function App() {
    return (
        <div className="App">
            <UsersContainer/>
            <Route path='/users/:id' render={({match}) => <UserContainer id={match.params.id}/>}/>
        </div>
    );
}

export default App;
