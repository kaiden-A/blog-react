import './styles/Success.css'

function Success({open ,message }){

    if(!open) return null

    return(
        <div className="success-message">
            {`✅ ${message}`} 
        </div>
    )

}

export default Success;