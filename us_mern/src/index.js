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

/*import App from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Function Componenets
/*function Product()
{
  return(
    <>
    <h1>Welcome to the  function</h1>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Product/>)*/

//Function props
/*function Product(props)
{
  return(
    <h2>The name of the product is {props.name},and 
    it costs ${props.price}.It has been rated with {props.rating}/5 stars.</h2>
  )
}
// product({name:"Laptop", price:1349, rating:4})
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Product name="Iphone" price={11876} rating={4.5} />)*/

//class component

//import { Component } from "react";
/*class Product extends React.Component
{
  render(){
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Price:{this.props.price}$</p>
        <p>Rating :{this.props.rating}/5</p>

      </div>
    )

  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Product name="azar" price="1000" rating="4.5"/>)*/

//Component in Component

function Category()
{
  return(
    <h1>This is Category Component</h1>
  )
}
function Product()
{
  return(
    <>
    <h1>This is Product Component</h1>
    <Category/>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Product/>)

