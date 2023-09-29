import React from "react";
import { ReactDOM } from "react-dom/client";
function Employee(props)
{
   return<li>This is an{props.empid}</li>
}
export function Noofday()
{
    const empname=['azar','mohamed','mohan'];
    return(
        <>
          <h1>This is Employee details</h1>
          <ul>
            {empname.map((c1)=><Employee empid={c1}/>)}
          </ul>
        </>
    );
}