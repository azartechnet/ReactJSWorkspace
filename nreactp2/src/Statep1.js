import React from "react";
import { ReactDOM } from "react-dom/client";

export class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            empid:1001,
            empname:"azar",
            salary:1000
        };
    }
    render(){
        return(
            <div>
                <h1>This is my empid value is{this.state.empid}</h1>
                <h1>This is my empname value is{this.state.empname}</h1>
                <p>This is my salary value is{this.state.salary}</p>
            </div>
        )
    }
}