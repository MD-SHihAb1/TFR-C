import { Navigate, useLocation } from "react-router-dom";
import Loader from "../../pages/Lodder/Loader";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";

const SellerRoutes = ({children}) => {
    const {user, loading} = useAuth();
    const userData = useUserData();
    const location = useLocation();


    if(loading || !userData.role){
        return <Loader></Loader>
    } 
    if(user && userData.role === "seller"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default SellerRoutes;