import { Route,Routes} from "react-router-dom";
import {Register} from "./register"
import {Login} from "./login"



export const Routing = () => {
    console.log("Routing component rendered");
    return <Routes>
        <Route path="register" element={<Register></Register>} />
        <Route path="login" element={<Login></Login>} />
     </Routes>
   
}