import React from "react";
import { ReactDOM } from "react-dom/client";

function MyForm()
{
   return(
    <form>
        <label>Enter the UserName</label>
        <input type="text"/>
        <input type="submit" value="Login"/>
    </form>
   )
}

export default MyForm;