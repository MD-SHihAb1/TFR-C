import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useUserData from "../../Hooks/useUserData";
import Loader from "../../pages/Lodder/Loader";

const BuyerRoute = ({children}) => {
    const {user, loading} = useAuth();
    const userData = useUserData();
    const location = useLocation();


    if(loading || !userData.role){
        return <Loader></Loader>
    } 
    if(user && userData.role === "buyer"){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default BuyerRoute;