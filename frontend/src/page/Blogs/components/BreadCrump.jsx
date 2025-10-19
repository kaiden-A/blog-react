import './styles/BreadCrump.css';

import { Link } from 'react-router-dom';
function BreadCrump({auhtor , title}){

    return(

        <div className="container">
            <div className="breadcrumb">
                <Link to={'/'}>Home</Link> &gt; 
                <Link to={`/${auhtor}`}>{auhtor}</Link> &gt; 
                <span>{title}</span>
            </div>
        </div>
    )
}

export default BreadCrump;