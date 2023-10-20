// import React from "react";
import ReactDOM from "react-dom/client"

/*function Sample()
{
  return(
    <div>
<h1>Welcome to the Function</h1>
    <h2>Welcome to heading</h2>
    <form>
      UserName:<input type="text"/>
      Password:<input type="text"/>
      <input type="submit" value="ClickHere"/>
    </form>
    </div>
    
  )
  
}

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample/>)
*/
//Basic Rendering
/*import React from "react";
import ReactDOM from "react-dom";
const  App=()=>{
  return(

    <div>
      <h1>Heading-1</h1>
      <p>This is Para...</p>
    </div>
  );
};
ReactDOM.render(<App/>,document.getElementById('root'))*/
//Dynamic Content
/*import React from "react";
import ReactDOM from "react-dom"
const App=()=>{
  const username='azar';
  return(
    <div>
      <h1>Welcome</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <h2>{username}</h2>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));*/

//JSX Concepts
// const my1=<h1>Welcome to JSX</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(my1);

//Expression in JSX
// const my1=<h1>React {5+5}</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(my1)

//Inserting the list
/*const my1=(
  <ul>
    <li>MCA</li>
    <li>MBA</li>
    <li>Bsc</li>
  </ul>
);
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//fragement tag
/*const my1=(
  <>
  <h1>Welcome to the First App</h1>
  </>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//className
/*import './index.css';
function Sample()
{
  return(

    <>
      <h1 className="d1">Welcome to the className</h1>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Conditional statment
/*const x=5
let txt="goodbye"
if(x>10)
{
  txt="Welcome"
}
// else
// {
//   txt="else block"
// }
const my1=<h1>{txt}</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//Ternary operator

/*const x=parseInt(prompt("Enter the x value is::"))
const my1=<h1>{(x)<10?"Hello":"goodbye"}</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//class component
/*class Sample extends React.Component
{
  render(){
    return(
      <>
      <h1>Welcome to the class component</h1>
      </>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/
//Properties

/*function Sample(props)
{
  return <h2>I am in a {props.c1}</h2>
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample c1='welcome'/>)*/

//Nested function Component

/*function Sample()
{
  return<h2>Welcome Sample function</h2>
}
function Sample1()
{
  return (
    <>
    <h1>Welcome to the Sample1 function</h1>
    <Sample/>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)*/

/*import App from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//props in the constructor
//JavaScript Program
/*class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);
// Expected output: "Polygon"
*/

/*class Sample extends React.Component
{
  // constructor(props)
  // {
  //   super(props);
  // }
  render(){
    return<h2>I am a{this.props.m1}</h2>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample m1="azar"/>)*/

//React State Object

/*class Sample extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
        empid:1001,
        empname:"azar",
        salary:1000
      }
    }
    render(){
      return(
        <>
        Your value is::
        <h1>{this.state.empid}</h1>
        <h1>{this.state.empname}</h1>
        <h1>{this.state.salary}</h1>
        </>
      )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Changing the state object

/*class Sample extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={
        empid:1001,
        empname:"azar",
        salary:1000
      }
    }
    changeValue=()=>{
      this.setState({salary:2000})
    }
    render(){
      return(
        <>
        Your value is::
        <h1>{this.state.empid}</h1>
        <h1>{this.state.empname}</h1>
        <h1>{this.state.salary}</h1>
        <button type="button" onClick={this.changeValue}>ClickHere</button>
        </>
      )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Event

/*function Football()
{
  const shoot=()=>{
    alert("Great Shot!!!")
  }
  return(
    <button onClick={shoot}>TakeShoot</button>
  )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Football/>)*/

//Conditional Rendering

/*function MissedGoal()
{
   return <h1>MISSED</h1>
}
function MadeGoal()
{
  return <h1>GOAL</h1>
}
function Goal(props)
{
  const isGoal=props.isGoal;
  if (isGoal===true){
    return <MadeGoal />
    }else {
      return <MissedGoal />
      }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={true}/>)*/

//Logical Operator
// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length>10&&
       
//            <p>{cars.length}</p>
//        }
//        {/* else
//        {
//         <p>{cars}</p>
//        } */}
//     </>
//   );
// }
// const cars = ['Ford', 'BMW', 'Audi'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);

//Hooks Example
import React, { useState } from "react";
function CounterExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
    );
    }
  const s1=ReactDOM.createRoot(document.getElementById('root'))
  s1.render(<CounterExample />);
  