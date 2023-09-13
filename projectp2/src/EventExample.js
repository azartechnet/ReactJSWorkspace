import React from 'react';
import  ReactDOM from 'react-dom/client';

function Football()
{
    const shoot=(a)=>{
        alert("GreatShot!!"+a)
    }
    return(
        <button onClick={()=>shoot("Goal!!!")}>Take the shot!!</button>
    );
}

export default Football;