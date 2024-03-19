import React from "react";
import ReactDOM from "react-dom/client";

/*function Sample()
{
  return <h1>Welcome to the Application</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Sample />);*/

 //Basic Rendering 

 /*const App=()=>{
  return(
    <div>
      <h1>Welcome to heading tag</h1>
      <p>This is Paragraph Tag</p>
    </div>
  )
 }
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<App />)*/

 //Dynamic Rendering

 /*const App=()=>{
  const username="mohamed"
  const  age=25;
  return (
    <>
    <h1>Hello {username}</h1>
     <h6>You are {age} years old.</h6>
     <h3>{new Date().toLocaleDateString()}</h3>
   </>
   );
 }
 const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);*/

  //React List

  const Myele=()=>{
    return(
      <ul>
       <li>Item 1</li>
        <li>Item 2</li>
          <li>Item 3</li>  
         </ul>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Myele/>)