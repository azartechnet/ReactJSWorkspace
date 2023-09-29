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
         salary:1000,
         emailid:"azar@gmail.com"
        };
    }
    changeValue=()=>{
        this.setState({empname:"mohamed"});
    }
    render(){
        return(
            <div>
            <h1>My{this.state.empname}</h1>
            <p>
                Its a {this.state.empid}
                {this.state.salary}
                from {this.state.emailid}
            </p>
            <button type="button" onClick={this.changeValue}>ChangeValue</button>
        </div>   
        );
       
    }
}