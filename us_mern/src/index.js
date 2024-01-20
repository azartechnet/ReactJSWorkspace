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

/*function Category()
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
*/
//Component Constructor

//If there is a constructor() function in your component this function will be called the
//component get initiated
//When Using constructor function to inheritance of the parent Component(React.Component)
//by including the super() statement

/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={empid:1001}
  }
  render()
  {
    return<h2>This is Sample Application{this.state.empid}</h2>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

/*class Sample extends React.Component
{
  render()
  {
    return(
      <>
      <h1>{this.props.empName}</h1>
      <h2>{this.props.empid}</h2>
      </>
    )
  }
}
const r1=document.getElementById('root')
const empName="John Doe"
const empid=1003
const element=<Sample empName={empName} empid={empid} />
ReactDOM.createRoot(r1).render(element)*/

//Props in the Constructor
/*class Sample extends React.Component
{
  constructor(props){
    super(props);
  }
  render()
  {
    return(
      <>
      <h1>{this.props.model}</h1>
      </>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample model="Ford"/>)*/

//Component in Component using class

/*class Sample1 extends React.Component
{
  render()
  {
    return(
      <>
      <h1>This is First Component</h1>
      </>
    )
  }
}
class Sample2 extends React.Component
{
  render(){
    return(
      <>
      <h2>This is Second Component</h2>
      <Sample1/>
      </>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2/>)*/

//React State

/*class Sample extends React.Component
{
  constructor(props){
    super(props);
    this.state={
     empid:1001,
     ename:"John",
     salary:5000
    }
}
render()
{
  return(
    <>
    <h1>This is State Concepts</h1>
    <p>
      Employee ID : {this.state.empid}
      <br />
      Name        : {this.state.ename}
      <br />
      Salary      : {this.state.salary}
    </p>
    </>
  )
}
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Changing the state Object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      empid:"1001",
      empname:"azar",
      designation:"IT"

    }
  }
    changeValue=()=>{
      //changing single value of the object
        this.setState({empname:"mohamed"})     
    }
    render()
    {
      return(
        <div>
          <h1>My {this.state.empid}</h1>
          <h2>MY {this.state.empname}</h2>
          <h2>MY {this.state.designation}</h2>
       
        <button type="button" onClick={this.changeValue}>Change Value</button>
        </div>
      )
    }
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample/>)*/

  //React Event

  /*function Football(){
    const shoot=()=>{
      alert("Ball is Shooted")
    }
    return (
      <div>
        <button onClick={shoot} >Shoot Ball</button>
      </div>
      );
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Football />);*/

  //React Event Arguments
 
  /*function Football() {
    const shoot = (e) => {
      console.log(e.currentTarget.innerText);
      alert("Ball is Shooted " + e.currentTarget.innerText + " Time");
    };
  
    return (
      <div>
        <button onClick={shoot.bind(null, "Morning")}>Shoot Ball Morning</button><br />
        <button onClick={shoot.bind(null, "Afternoon")}>Shoot Ball Afternoon</button><br />
        <button onClick={shoot.bind(null, "Night")}>Shoot Ball Night</button>
      </div>
    );
  }
  
  ReactDOM.createRoot(document.getElementById("root")).render(<Football />);

*/
  //Another Programs in Argument for Event
  /*function Football()
  {
    const shoot=(a)=>{
      alert(a);
    }
    return(
      <button onClick={()=>shoot("Good")}>Take the Shoot</button>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Football/>)*/

  //Another Program for Conditional Rendering

  /*function MissedGoal()
  {
    return(
      <h2 style={{color:"red"}}>Missed Goal!</h2>
      )
  }
  function MadeGoal()
  {
    return(
      <h2 style={{color:"green"}}>Made Goal!</h2>
    )
  }
  function Goal(props)
  {
    const isGoal=props.isGoal;
    if(isGoal)
    {
      return<MadeGoal/>
    }
    return<MissedGoal/>
  }
  
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Goal isGoal={false}/>)*/

  //React Lists

  /*function Sample(props)
  {
    // return<li>I am a {props.brand}</li>
    return<li>I am a {props.empname}</li>
  }
  function Garage()
  {
    //const cars=['Ford','BMW','Audi']
    const empname=["mohamed","chandana","azar"]
    return (
      <ul>
        {
        empname.map((c1)=>
        {
          return <Sample empname={c1} key={c1} />
        })
        }
      </ul>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Garage/>)*/

  //React List Using Keys

  function Sample(props)
  {
    // return<li>I am a {props.brand}</li>
    return(
      <>
       <li>I am a {props.e1}</li>
      <li>I am a {props.c1}</li>
      </>
     
    )
  }
  function Garage()
  {
    //const cars=['Ford','BMW','Audi']
    const empname=[
      {id:101,e1:"mohamed"},{id:102,e1:"chandana"},{id:103,e1:"azar"}
    ]
    return(
      <>
      <h1>Welcome to Employee Details</h1>
      <ul>
        {empname.map((c1)=><Sample key={c1.id} e1={c1.e1}/>)}
      </ul>
      </>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Garage/>)

  //React in Keys and list