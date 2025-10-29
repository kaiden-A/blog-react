import './styles/Error.css'

function Error({open ,message }){

    if(!open) return null

    return(
        <div className="error-message">
            {`❌ ${message}`} 
        </div>
    )

}

export default Error;