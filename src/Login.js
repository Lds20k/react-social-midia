import React from "react";
import Buttons from "./components/buttons/Buttons";
import Field from "./components/field/Field"
import "./App.css"

function Login({ setSession }) {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();

    function Logon(){
        if(username === "lucas" && password === "123")
            setSession({"username": username})
    }

    return (
        <div className="container h-100">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-5 p-3 bg-dark rounded shadow-lg">
                    <div className="row text-white">
                        <h1>Login</h1>
                    </div>
                    <Field fieldName="Username" setFieldState={setUsername} />
                    <Field type="password" fieldName="Password" setFieldState={setPassword} />
                    <Buttons loginOnClick={Logon} />
                </div>
            </div>
        </div>
    );
}

export default Login;
