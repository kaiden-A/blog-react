import { useEffect, useState } from "react";
import SidebarAdmin from "../Global/SidebarAdmin";
import { Outlet , useNavigate} from "react-router-dom";
import LoadingSpinner from "../Global/LoadingSpinner";

import './styles/AdminPage.css'

function AdminPage(){

    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {


        const fetchData = async() => {

            try{

                const responses = await fetch(`https://backend-service-pmqg.onrender.com/api/admin` , {
                    credentials : "include"
                });

                const data = await responses.json();
                console.log(data);
                
                if(!data.cookies){
                    navigate('/login')

                }

            }catch(err){
                console.log(err);
            }
        }

        fetchData();
        setLoading(false);
    } , [])

    if(loading){
        return <LoadingSpinner text="check user..." size="large"/>
    }

    return(
        <div className="sidebar-admin">
            <SidebarAdmin/>

            <Outlet/>
        </div>
    )

}

export default AdminPage;