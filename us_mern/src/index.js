import React from "react";
import ReactDOM  from "react-dom/client";

/*function Sample()
{
  return<h1>Welcome to the First Program</h1>
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//Basic Rendering

/*const App=()=>{
  return(
      <>
      <h1>Hello World!</h1>
      <p>This is a paragraph.</p>
      </>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<App />);*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<App/>)*/

//With JSX

/*const myelem=<h1>Welcome to the JSX Concepts</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//WithOut JSX

/*const myelem=React.createElement('h1',{},'Welcome without using JSX')

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//List in React

/*const myelem=(
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
  </ul>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

/*import './index.css'

function App()
{
  return(
    <>
    <h1 className="style1">Welcome to the External Importing..</h1>
    <h2 className="style1">Welcome to the heading-2</h2>
    </>
    
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Conditional Rendering

/*const x=9
let text="hello"
if(x>10){
  text="goodbye"
}else if(x==10){
  text="ten"
}
else{
  text="less than ten"
}
const myelem=()=>{
  return (
    <div>{text}</div>

  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem())*/

/*const x=9
const myelem=<h1>{(x<10)?"Welcome":"GoodBye"}</h1>
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(myelem);*/

//Importing and exporting

import App from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)


