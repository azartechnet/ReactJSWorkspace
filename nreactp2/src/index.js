import React from "react";
import ReactDOM  from "react-dom/client";
import Sample from "./App";

/*class Sample extends React.Component
{
   render()
   {
    return<h2>Welcome to the class components</h2>
   }
}

const c1=document.getElementById('root');
const root=ReactDOM.createRoot(c1);
root.render(<Sample/>);*/

//Props is an properties using as arguments in the function
/*function Sample(props)
{
  return <h2>I am a {props.c1}Sample!!</h2>
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample c1="Welcome"/>)*/

//Creating a Multiple function

/*function Sample()
{
  return<h2>This is Sample function</h2>
}
function MainFunction()
{
  return(
    <>
       <h1>This is MainFunction</h1>
       <Sample/>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MainFunction/>)*/

//This concepts of Component in file

const r1=ReactDOM.createRoot(document.getElementById('root'))

r1.render(<Sample/>)



