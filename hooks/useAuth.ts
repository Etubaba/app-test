import React from "react";
import { AuthContext } from "../Provider/auth";


function useAuth() {
    return React.useContext(AuthContext);
}

export default useAuth