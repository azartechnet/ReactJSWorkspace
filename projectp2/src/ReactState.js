import React from 'react';
import ReactDOM from 'react-dom/client';

export class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            empid:1001,
            empname:"azar",
            empdep:"Trainer"
        };
    }
    render(){
        return (
            <div>
                <h1>My{this.state.empid}</h1>
                <p>
                    {this.state.empname}
                    {this.state.empdep}
                </p>
            </div>
        );
    }
}