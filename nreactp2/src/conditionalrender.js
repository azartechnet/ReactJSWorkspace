import React from "react";
import { ReactDOM } from "react-dom/client";

function MissedGoal()
{
    return<h1>MISSED!!</h1>
}
function MadeGoal()
{
    return<h1>GOAL!!</h1>
}
export function Goal(props)
{
    const isGoal=props.isGoal;

    //let isGoal=false

    //isGoal?MadeGoal():MissedGoal()
   /* if(isGoal)
    {
        return <MadeGoal/>
    }
    return <MissedGoal/>*/
   // { isGoal ? <MadeGoal/> : <MissedGoal/>}
   //TerOperator
   return isGoal ? <MadeGoal /> : <MissedGoal />;
}