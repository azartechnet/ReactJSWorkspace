import React from "react";
import { ReactDOM } from "react-dom/client";

function Football()
{
    const shoot=(a)=>{
        alert(a);
    }
    return(
        <button onClick={()=>shoot("WelcomeAzar")}>ClickHere</button>
    );
}

export default Football;