import "./Field.css"

function Input({fieldName, setFieldState, type}){
    return (
        <div className="row">
            <div className="col">
                <input className="form-control mt-3 rounded text-center" type={type} onChange={(e) => setFieldState(e.target.value)} placeholder={fieldName}></input>
            </div>
        </div>
    )
}

export default Input;
