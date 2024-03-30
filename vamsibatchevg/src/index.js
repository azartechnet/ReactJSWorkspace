import React, { useEffect } from "react";
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

  /*const Myele=()=>{
    return(
      <ul>
       <li>Item 1</li>
        <li>Item 2</li>
          <li>Item 3</li>  
         </ul>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Myele/>)*/

  //To Import css file

  /*import './index.css';
  function App()
  {
    return(
      <h1 className="f1">Welcome to stylesheet</h1>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>)*/

  //Conditional Rendering

  /*const x=9
  let text="hello"
  if(x>10){
    text="goodbye"
  }else if(x==10){
    text="Ten!!"
  }else{
    text="Less than 10"
  }
  console.log(text)
  //Rendering a Component inside another component
     const MyElm=()=>{
      return(
        <div>
          {text}
        </div>
      )
     }
  const r1=ReactDOM.createRoot(document.getElementById('root'));
  r1.render(<MyElm/>);*/

  //Importing and Exporting concepts

  /*import App from "./App";

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App />);*/

  //Using props keywords

  /*function Sample(props)
  {
    return(
      <h1>Welcome to the function{props.pid}</h1>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById("root"));
  r1.render(<Sample pid="1001"/>);*/

  //Component in Component

  /*function Sample()
  {
    return<h2>Welcome to the Sample</h2>
  }
  function Sample2()
  {
    return(
      <>
        <h1>This is h1 heading</h1>
        <Sample/>
      </>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample2 />)*/

  //Constructor Example

  /*class Sample extends React.Component
  {
    constructor(props)
    {
       super(props);
       this.state={
         count:0
         };
     }
     addCount = () =>
     {
       let cnt =this.state.count +1;
       this.setState({count : cnt});
     }
     render(){
       return (
          <div>
             <button onClick={this.addCount}> ClickHere</button>
             <h3>{this.state.count}</h3>
          </div>
       )
     }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Sample />)*/

  //React State

  /*class Sample extends React.Component
  {
    constructor(props)
    {
      super(props);
      this.state={
        empid:1001,
        empname:"mohamed",
        salary:5000
      }
    }
    render()
    {
      return(
        <div>
          <h1>MyEmployeeId is::{this.state.empid}</h1>
          <p>My EmployeeName is::{this.state.empname}</p>
          <p>My Salary is::{this.state.salary}</p>
        </div>
      )
    }
  }
  const root=ReactDOM.createRoot(document.getElementById("root"))
  root.render(<Sample/>)*/

  //Changing the state object

  /*class Sample extends React.Component
  {
    constructor(props)
    {
      super(props);
      this.state={
        emp:{
          id:1001,
          name:"Mohamed",
           city:"Cairo"
        },
        showData:false
      }
    }
    toggleData=()=>{
      this.setState({showData:!this.state.showData})
    }
    render()
    {
      let data;
      if(this.state.showData){
         data=<div><b>EmployeeId::</b>{this.state.emp.id}</div>
      }
      else{
        data="No data Avaliable";
      }
      return (
        <div>
          <button onClick={this.toggleData}>Toggle Data</button>
          {data}
        </div>
      )
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'));
  r1.render(<Sample />);*/

  //React Event

  /*function Football()
  {
    const shoot=()=>console.log("Shoot");
    const pass=()=>console.log("Pass");
    const dribble=()=>console.log("Dribble");
    return(
       <div>
         <h2>Football Action</h2>
          <button onClick={shoot}>Shoot</button>
          <button onClick={pass}>Pass</button>
          <button onClick={dribble}>Dribble</button>

       </div>
        );
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'));
  r1.render(<Football/>)*/

  //Arrow Function:Sending the event  object to a method

  /*function Football(){
    const shoot=(a,b)=>{
      alert(b.type);
      alert(a)
    }
    return(
       <button onClick={(e)=>shoot("Goal!!",e)}>Take the Shoot</button>
    )
  }
  const r=ReactDOM.createRoot(document.getElementById('root'));
  r.render(<Football/>)*/

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
    if (isGoal==true)
    {
      return <MadeGoal />
    }
    else
    {
      return <MissedGoal/>
    }
  }
  const r1=ReactDOM.createRoot(document.getElementById( 'root' ) );
  r1.render(<Goal  isGoal ={Math.random() >0.5} />)*/


  //React HOOKS

  import {useState} from 'react';

  /*function Counter()
  {
    const [count,setCount] = useState(0);
    return(
      <div>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'));
  r1.render(<Counter />);*/

  //React List(Map)

  /*function Car(props)
  {
    return <li>I am a {props.b1}</li>
  }
  function Garage()
  {
    const cars=["Ford","BMW","Audi"]
    return(
      <>
      <h1>Who lives in my garage</h1>
      <ul>
        {cars.map((c1)=>{
          return<Car b1={c1} key={c1}/>
        })}
      </ul>
      </>
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById("root"))
  r1.render(<Garage />)*/

  //React Form

  /*function MyForm()
  {
    return(
      <form>
        <label>UserName</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password" />
        <input type="submit" value="Submit" />
      </form>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<MyForm/>)*/

  //React useEffect()

  /*function Timer()
  {
    const [count,setCount]=useState(0);
    useEffect(()=>{
      const timerID=setInterval(()=>setCount(count+1),1000)

         return () => clearInterval(timerID)//clean up the interval when component is unmount

          },[count])
          return (
            <>
            Time: {count}
            </>
             );
           }
           const root = ReactDOM.createRoot(document.getElementById("root"));
           root.render(<Timer />);*/

  //React  useContext and Provider

  import { createContext,useContext } from "react";

  const UserContext=createContext();

  function Component1()
  {
    const [user,setUser]=useState("Mohamed");
    return (
      <UserContext.Provider   value={user}>
        <Component2/ >
      </UserContext.Provider>
    )
  }
  function Component2()
   {
     const user=useContext(UserContext);
     return <h1>{user}</h1>
      }
  
      const root = ReactDOM.createRoot(document.getElementById("root"));
       root.render(<Component1/>)
  
