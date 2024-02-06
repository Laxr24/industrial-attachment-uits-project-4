import { useContext } from "react";
import { userContext } from "../components/UserProviderByContext";
import { Navigate } from "react-router-dom";

const PrivateRout = ({children}) => {

    const { user } = useContext(userContext);
     
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRout;