import React from "react";
import Buttons from "./components/buttons/Buttons";
import Field from "./components/field/Field"
import "./App.css"
import Login from "./Login";
import Home from "./Home";

function App() {
    const [session, setSession] = React.useState();

    if(session && session.username) 
        return (<Home session={session} setSession={setSession}/>)
    else 
        return (<Login setSession={setSession}/>)
}

export default App;
