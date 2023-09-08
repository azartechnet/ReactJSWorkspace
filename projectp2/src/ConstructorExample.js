import React from "react";
import ReactDOM from "react-dom";
export class Sample extends React.Component
{
    constructor(props)
    {
        super(props);
        //this.state={c1:"welcome1"};
        
    }
    render()
    {
        //return<h2>I am a {this.state.c1}</h2>

        return <h2>I am a {this.props.c1}</h2>
    }
}