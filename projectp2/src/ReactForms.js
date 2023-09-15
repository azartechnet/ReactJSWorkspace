import React from "react";
import ReactDOM from "react-dom/client";
function MyForm(){
    return(
        <form>
            <label>Enter Your Name:</label>
            <input type="text"/>
            <label>Enter Your Password:</label>
            <input type="password"/>
            <input type="submit" value="Login"/>
        </form>
    )
}
export default MyForm;