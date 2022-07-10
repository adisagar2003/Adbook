
import { useNavigate } from "react-router-dom";
const Protected = ({isLoggedIn,children})=>{
    const navigate  =useNavigate();
    if (!isLoggedIn) {
        navigate("/",{ replace: true });
        }
        return children;
       
};
export default Protected;