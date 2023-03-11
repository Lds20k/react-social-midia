import "./Buttons.css"

function Button({loginOnClick}){
    return (
        <div className="row mt-3">
            <div className="col">
                <button onClick={loginOnClick} className="btn btn-success">Login</button>
            </div>
            <div className="col">
                <button className="btn btn-secondary float-end">Register</button>
            </div>
        </div>
    )
}

export default Button;
