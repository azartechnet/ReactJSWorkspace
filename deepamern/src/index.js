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

/*const myelem=React.createElement('h1',null,'Welcome to the Js');
  const root=ReactDOM.createRoot(document.getElementById('root'));
   root.render(myelem)*/

   //React List

   /*const myele=()=>(

    <div>
      <ul>
       <li>list1</li>
       <li>List2</li>
       <li>List3</li>
    </ul>
    </div>
   
   )
   const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(myelem)*/

    //fragmenttag
    
    /*import './index.css';
    const App=()=>{
      return (
        <>
           <h1>This is heading tag</h1>
           <p>This is paragraph tag</p>
           <form>
            <label>UserName</label>
            <input type='text'/>
            <label>Password</label>
            <input type="password"/>
            <input type='submit' value='Login'/>
           </form>
        </>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById("root"));
    r1.render(<App/>);*/

    //Conditional Rendering

    const x=9
    let text="hello";
    if(x>10){
      text="goodbye";
    }else if(x==10){
      text="ten"
    }else{
      text="x is less than 10"
    }
    const Myelm=()=>{
      return (
        <div>{text} world!</div>
      )
    }
    const r1=ReactDOM.createRoot(document.getElementById("root"));
    r1.render(<Myelm/>)
