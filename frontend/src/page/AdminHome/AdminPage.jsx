import { useEffect, useState } from "react";
import SidebarAdmin from "../Global/SidebarAdmin";
import { Outlet , useNavigate} from "react-router-dom";
import LoadingSpinner from "../Global/LoadingSpinner";

function AdminPage(){

    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {


        const fetchData = async() => {

            try{

                const responses = await fetch(`http://localhost:5000/api/admin` , {
                    credentials : "include"
                });

                const data = await responses.json();
                
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
        <div style={{display : "flex" , flexDirection : "row"}}>
            <SidebarAdmin/>

            <Outlet/>
        </div>
    )

}

export default AdminPage;