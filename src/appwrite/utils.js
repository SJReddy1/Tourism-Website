import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const PrivateRoutes = () => {
    const {authUser} = useUserContext();

    return authUser ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoutes;