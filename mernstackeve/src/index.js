<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
=======
import { render } from '@testing-library/react';
import React from 'react';
>>>>>>> master
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Home from './pages/Home';
/*function Sample()
{
  return<h1>Welcome to the function</h1>
}
const c1=document.getElementById('root')
const r=ReactDOM.createRoot(c1)
r.render(<Sample/>);*/

//Basic HTML Rendering
/*const App=()=>{
  return(
      <div>
      <h1>Hello React</h1>
      <p>This is a Para..</p>
      </div>
  )
}
//ReactDOM.render(<App/>,document.getElementById('root'));
const c1=document.getElementById('root');
const r=ReactDOM.createRoot(c1);
r.render(<App />);*/

//Through Basic Rendring Creating the form

/*function Sample()
{
  return(
    <div>
      <form>
        Name:<input type="text"/><br/>
        Email:<input type="email"/><br/>
        Password:<input type="password" minLength={8} maxLength={20} required/><br/>
        <input type='submit' value="Login"/>
      </form>
    </div>
  )
}

const c1=document.getElementById('root');
const r=ReactDOM.createRoot(c1);
r.render(<Sample />);*/

//Dynamic Rendering

/*const App=()=>{
  const username="azar"
  return(
    <div>
      <h1>Welcome {username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//JSX Coding

/*const myelem=<h1>Welcome to the JSX{5+5}</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//React List

/*const myele=(
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
    <li>list4</li>
  </ul>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele)*/

<<<<<<< HEAD
//React Fragement Tag
=======
//React Fragement Tag or Component in File
>>>>>>> master
/*import './index.css';
const myele=(
  <>
    <body>
      <ul>
        <li ><a href='' className='active'>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact</a></li>
        <li><a href=''>Login</a></li>
        </ul>
        <div className='divstyle'>
          <h1>Hello World!</h1>
          <p>This is a paragraph.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam dolorem ipsam temporibus nemo modi, suscipit soluta tempore. Fuga perspiciatis at sequi ipsam atque facilis magni nostrum totam aliquam vitae.</p>
        </div>
    </body>
  </>
)


const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele);*/

<<<<<<< HEAD
//Class Component
=======
//React class component

>>>>>>> master
/*class Sample extends React.Component
{
  render()
  {
<<<<<<< HEAD
    return(
      <div>
        <h1>Welcome to the Class Component..</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

//class component using Constructor and super class

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={productid:"1001"}
  }
  render()
  {
    return(
      <h1>This Your ProductId is::{this.state.productid}</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/







//Events

//Component Construtor

/*class  Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={productid:1001};
  }
  render()
  {
    return<h2>I am a Sample Function</h2>
  }
}

const c1=ReactDOM.createRoot(document.getElementById('root'));
c1.render(<Sample/>);*/

//Example Props

/*class Sample extends React.Component
{
  render()
  {
    return<h2>I am a {this.props.pid}</h2>
  }
}
const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample pid="1001"/>)*/

//Props in the Constructor

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return<h2>This is Props function{this.props.pid}</h2>
  }
}
const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample pid="1001"/>)*/

//Component in Component

/*class Sample1 extends React.Component
{
  render()
  {
    return<h2>I am Sample1!!!</h2>
  }
}
class Sample2 extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>This is Sample2</h1>
        <Sample1/>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2 />)*/

//Component in file

/*import Sample from './App';

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample />)*/

//React State
=======
    return<h2>This is Class Component</h2>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//React props

/*function Sample(props)//Using props argument passing
{
  return<h2>I am a {props.c1}</h2>
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
//r1.render(<Sample c1="welcome"/>)
r1.render(<Sample c1="100"/>)*/

//Multiple Component

/*function Sample1()
{
  return <h2>I am in Sample 1 function component</h2>
}
function Sample2()
{
  return(
    <>
    <h1>This is Sample 2 function Component</h1>
    <Sample1/>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2/>)*/

//Another Example Component in File

/*import Sample from './App';

const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample/>)*/

//React State

>>>>>>> master
/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
<<<<<<< HEAD
      name:'John',
      age:25,
      city:'New York'
    }
  }
  render()
  {
    return(
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>I live in {this.state.city}, I am {this.state.age} years old.</p>
      </div>
    )
  }
}
const s1=document.getElementById('root');
const r1=ReactDOM.createRoot(s1);
r1.render(<Sample />);*/
=======
      name:"John",
      age:34,
      city:"New York"
      };
    }
  
  render(){
     return(
      <div>
        <h1>{this.state.name}</h1>
        <p>
          I live in {this.state.city}, my age is {this.state.age}.
        </p>
      </div>
     )
  }
}

const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1)
r1.render(<Sample/>)*/
>>>>>>> master

//Changing the State Object

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
<<<<<<< HEAD
      pid:"1001",
      pname:"apple",
      pprice:10,
      pquantity:10
    };
  }
  changeValue=()=>{
    this.setState({pname:"apple1"});
  }

  render()
  {
    return(
      <div>
        <h1>Product ID: {this.state.pid}</h1>
        <h2>Product Name: {this.state.pname}</h2>
        <h3>Product Price: {this.state.pprice}</h3>
        <h4>Product Quantity: {this.state.pquantity}</h4>
        <button onClick={this.changeValue}>Change Name</button>
=======
      name:"John",
      age:34,
      city:"New York"
    };     
  }
  changeState=()=>{
    //changing state object
    this.setState({age:25});
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <p>
          I live in {this.state.city}, my age is {this.state.age}.
        </p>
        <button type='button' onClick={this.changeState}>ClickHere</button>
>>>>>>> master
      </div>
    )
  }
}
<<<<<<< HEAD
const s1=ReactDOM.createRoot(document.getElementById('root'));
s1.render(<Sample/>)*/

//React Event

/*function Sample()
{
  const shoot=()=>{
    alert("Great Shot")
  }
  return(
    <button onClick={shoot}>Take the shot</button>
  );
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>);*/

//React List-1

/*import React from 'react';
import ReactDOM from 'react-dom/client';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);*/

//React List Using Keys

/*function Car(props)
{
  return <li>I am a {props.brand}</li>
}

function Garage()
{
  const cars=[
    {id:1,brand:"Ford"},
    {id:2,brand:"BMW"},
    {id:3,brand:"Audi"}
  ]
  return (
    <>
       <h1>Who lives in my garage??</h1> 
       <ul>
        {cars.map((car)=><Car key={car.id} brand={car.brand}/>)}
       </ul>
=======
const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1)
r1.render(<Sample/>)*/

//React Conditional Rendering

/*function MissedGoal()
{
  return<h1>MISSED</h1>
}
function MadeGoal()
{
  return<h1>GOAL</h1>
}
function Goal(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Goal isGoal={true}/>)*/

//React List
function Car(props)
{
  return <li>I am a {props.brand}</li>
}
function Garage()
{
  const cars=["Ford","BMW","Audi"]
  return(
    <>
    <ul>
      {cars.map((car)=><Car brand={car}/>)}
    </ul>
>>>>>>> master
    </>
  )
}

<<<<<<< HEAD
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Garage />);*/

//React Forms
/*function Myform1(){
  return(
    <form>
      <label>Enter UserName</label>
      <input type="text" name="username"/>
      <button type="submit">Submit</button>
    </form>
  )
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Myform1/>)*/

//React Hooks

/*import ContactForm from './ContactForm';
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<ContactForm/>)*/

//React Hooks useEffects()

/*function Timer()
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
    setCount((count)=>count+1)
  },1000)
})
return <h1>I have rendered {count} time</h1>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Timer/>)*/

//React Hooks useContext()

/*function Component1()
{
  const [user,setUser]=useState("Mohamed");
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
    <Component3 user={user}/>
    </>
  )
}
function Component3({user})
{
  return(
    <>
    <h1>Component-3</h1>
    <h2>{`Hello ${user}`}</h2>
    </>
  )
}

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<Component1/>)*/

 //Routing Concepts

 export default function App()
 {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="blogs" element={<Blogs/>}/>        
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
 }

 const r1=ReactDOM.createRoot(document.getElementById('root'))
 r1.render(<App/>)
=======
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage />)
>>>>>>> master
