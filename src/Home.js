import React from "react";

function Home({ session, setSession }) {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Olá {session.username}</a>
                <button onClick={() => setSession()} className="btn btn-danger">Sair</button>
            </div>
        </nav>
    );
}

export default Home;
