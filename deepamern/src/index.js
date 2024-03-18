import React from "react";
import  ReactDOM from "react-dom/client";

/*function Sample()
{
   return <h1>Welcome to the Application</h1>
}

const r1=document.getElementById("root");
const root = ReactDOM.createRoot(r1);
 root.render(<Sample />)*/

 //Basic Rendering

 /*const App=()=>{

  return (
    <div>
      <h1>Welcome  to our application!</h1>
       <p>This is a paragraph.</p>
    </div>
  )

 }
 const r1=document.getElementById("root");
const root = ReactDOM.createRoot(r1);
 root.render(<App />)*/

 //Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return (
    <div>
      <h1>Hello{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
 }
 const r1=document.getElementById("root");
 const root = ReactDOM.createRoot(r1);
  root.render(<App />)*/

//With JSX

/*const myelem=<h1>Welcome to the JSX</h1>
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(myelem)*/

//Without JSX

const myelem=React.createElement('h1',null,'Welcome to the Js');
  const root=ReactDOM.createRoot(document.getElementById('root'));
   root.render(myelem)

   //List
