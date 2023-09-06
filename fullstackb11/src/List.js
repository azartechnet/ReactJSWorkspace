import React from "react";

import { ReactDOM } from "react";

function Employee(props)
{
    return<li>Lets {props.empname}</li>
}
function Sample()
{
    const emp=['azar','sheik','mohamed']
    return(
        <>
          <h1>Lets see the Employee</h1>
          <ul>
            {emp.map((c1)=><Employee empname={c1}/>)}
          </ul>
        </>
    );
}

export default Sample;