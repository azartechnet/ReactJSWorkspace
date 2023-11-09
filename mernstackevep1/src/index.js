import ReactDOM  from "react-dom/client";
import React from "react";

/*function Sample()
{
  return(
    <div>
      <h1>Welcome to the Application</h1>
      <p>Welcome to Paratags</p>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

//Basic Html rendering
/*const App=()=>{
  return(
    <div>
      <h1>This App component</h1>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>);*/

//Dynamic Rendering

/*const App=()=>{
  const username="welcome to azar"
  return(
    <div>
      <h1>{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));*/

//Explore the JSX Example

/*const myele=<h1>Welcome to the JSX</h1>
console.log(myele)

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele);*/

//Rendering Lists in react
/*import './index.css';
const myelem=(
  <div>
  <ul>
    <li>Product1</li>
    <li>Product2</li>
    <li>Product3</li>
  </ul>
  <h1 className="sample">Welcome</h1>
  </div>

  
)

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//React Conditional Statement

//const x=5;
/*const x=parseInt(prompt("Enter the x value is::"))
let text="";
if(x<10)
{
  text="Welcome to the Application"
}
else
{
  text="goodbye";
}
const myele=<h1>{text}</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele)*/

//class Component

/*class Sample extends React.Component
{
  render(){
    return<h2>This is Class Component</h2>
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

//function components

/*function Sample(props)
{
  return(
    <h2>This is Functional component{props.pid}</h2>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample pid="101"/>);*/

//Component in Component


/*function Parent()
{
  return(
    <>
    <h1>Welcome to the Parent</h1>
    </>
  )
}
function Child()
{
  return(
    <>
    <h1>This is Child Component</h1>
    <Parent/>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Child/>)*/

//Component in files

/*import App from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>);*/

//React Class Component using state

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:"John Doe",
      age:35,
      city:"New York"

    }

  }
  render()
  {
    return(
      <>
       <h1>{this.state.name}</h1>
       <h1>{this.state.age}</h1>
       <h1>{this.state.city}</h1>
      </>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {empname:"azar"};
    }
  render()
  {
    return(
      <h1>Welcome to the Application{this.state.empname}</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Events

/*function Sample()
{
  alert("This is the main function..")

return(
  <button onClick={Sample}>ClickHere</button>
)
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample />);*/

//React Event using variable

/*function Sample()
{
  const result=(pid)=>{
    console.log(`You clicked ${pid}`)};
    // alert({pid})
  
  return(
    <>
    <button onClick={()=>result('1001')}>ClikHere</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React Conditional Rendering

/*function MissedGoal()
{
  return <h1>MISSED</h1>
}
function MadeGoal()
{
  return <h1>GOAL!!</h1>
}
function Goal(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return <MadeGoal/>
  }
  else
  {
    return <MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={false}/>)*/

//React Conditional Statement

/*function Sample1()
{
  var pid=parseInt(prompt("Enter the pid is::"))
   if(pid==1001)
   {
     alert("Its is Equal")
   }
   else
   {
    alert("Its Not Equal")
   }
}
const r2=ReactDOM.createRoot(document.getElementById('root'))
r2.render(<Sample1 />)*/

//React Hooks

/*import {useState} from 'react';
function Counter(){
  const [count,setCount]=useState(0);
  return(
    <div>
      <p>Count::{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )

}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React List

/*function Car(props)
{
  return <li>This is Car Function{props.brand}</li>
}
function Garage(){
  const list=['Ford','BMW','Audi']
  return(
    <>
    <ul>
        {list.map((var1)=><Car brand={var1}/>)}
    </ul>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React using key

function Car(props)
{
  return <li>This is Car Function{props.brand}</li>
}
function Garage(){
  const list=[
    {'id':1,brand:'a1'},
    {'id':2,brand:'a2'},
    {'id':3,brand:'a3'}
  ]
  return(
    <>
    <ul>
        {list.map((var1)=><Car key={var1.id} brand={var1.brand}/>)}
    </ul>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)