import React, { useState,useEffect } from "react";
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

  /*function Sample(props)
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
  r1.render(<Garage/>)*/

  //React in Keys and list

  //React Forms

  /*function Myform()
  {
    return(
      <form>
        <label>UserName</label>
        <input type="text"/>
        <label>Password</label>
        <input type="password"/>
        <input type="submit" value="Login"/>
      </form>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Myform/>)*/

  //React HOOKS
  /*function ContactForm()
  {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage] = useState('');
    const handleSubmit=(e)=>{
      alert("Your message has been submitted")
      e.preventDefault();
      //Perform form submission logic here
      console.log('Form Submitted with data')
      console.log("Name::",name)
      console.log("Email::",email)
      console.log("Message::",message);
      //You can also reset the form fields after submission
      setName('')
      setEmail('')      
      setMessage('')
      }
      return (

        <div className='contact-form'>
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br />
            <input type="text" value={name} onChange={e=> setName(e.target.value)}/>
            <br />
            <label>Email:</label>
            <br />
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <br />
            <label>Message:</label>
            <br />
            <textarea cols="30" rows="10" value={message} onChange={e=> setMessage(e.target.value)}></textarea>
              <br />
              <button type="submit">Send</button>
              </form>
              </div>
              );
              }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<ContactForm/>)*/

  //React dropdown list to change the value

  /*function SelectBoxExample()
  {
    const [selectedOption,setSelectedOption]=useState('')
    const handleSelectChange=(e)=>{
      setSelectedOption(e.target.value)
    };
    return(
      <div>
        <p>Please select an option from below:</p>
        <select name="options" id="option-list" onChange={handleSelectChange}>
          <option value="">None</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
          <option value="Miss">Miss</option>
          <option value="Dr.">Doctor/Professor Dr.</option>
          </select>
          <p>You selected: {selectedOption}</p>
          </div>
          
    )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<SelectBoxExample/>)*/

  //React useEffect

  /*function Timer()
  {
    const [count,setCount]=useState(10);
    useEffect(()=>{
      const timer = setTimeout(() => {
        setCount(c => c + 1);
        }, 1000);
        return () => clearTimeout(timer);
        });
        return (
          <>
          {count}
          </>
        )
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Timer/>)*/

  //React useEffect Example 2

  /*function HookCounterOne()
  {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      document.title=`You clicked ${count} times`
      })
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
        
        
        );
        
  }
  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<HookCounterOne/>)*/

  //React without using useContext()

 /* function Component1()
  {
    const[user,setUser]=useState("mohamed")
    return(
      <>
      <h1>{`Hello ${user}`}</h1>
      <Component2 user={user}/>
      </>
    )
  }
  function Component2({user})
  {
    return(
      <>
      <h1>Component2</h1>
      <p>{user}profile</p>
      </>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component1/>)*/

  //React Implemented useContext()

  /*import { createContext,useContext } from "react";

  const UserContext=createContext();

  function Component1()
  {
    const [user,setUser]=useState("Mohamed");
    return(
      <UserContext.Provider value={{user}}>
        <h1>{`Hello ${user}`}</h1>
        <Component2/>
      </UserContext.Provider>
    )
  }
  function Component2()
  {
    const{user}=useContext(UserContext);
    return (
      <div>
        <h3>Profile_Component2:{user} Profile</h3>
        <Component3/>
      </div>
      );
  }
  function Component3()
  {
    const{user}=useContext(UserContext);
    return (
      <div>
        <h3>Profile_Component3:{user} Profile</h3>
      </div>
      );
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<Component1/>)*/

  //React Router

  import { BrowserRouter,Routes,Route } from "react-router-dom";
  import Layout from "./pages/Layout";
  import Home from "./pages/Home";
  import Login from "./pages/Login";
  import Register from "./pages/Register";
  import Contact from "./pages/Contact";

  export default function App(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/contact" element={<Contact />}/>
          </Route>
      </Routes>
      </BrowserRouter>
    )
  }

  const r1=ReactDOM.createRoot(document.getElementById('root'))
  r1.render(<App/>)