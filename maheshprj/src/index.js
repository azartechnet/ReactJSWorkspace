import ReactDOM from "react-dom/client";
import React, { useEffect } from "react";

/*function Sample()
{
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Basic Rendering

/*const App=()=>{
  return(
    <div>
      <form>
        <label>Name:</label><br />
        <input type="text" name="name"/><br />
        <label>Password:</label><br/>
        <input type="password" name="password"/><br />
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const App=()=>
{
  const username="mohamed";
  return(
    <div>
      <h1>Hello,{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}


const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//List in React

/*const myelem=(
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
  </ul>
)
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(myelem);*/

/*import './index.css'
function App()
{
  return(

    <>
    <h1 className="style1">Welcome to the h1 tag</h1>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<App/>)
*/
//Conditional Rendering

/*const x=9
let text="hello"
if (x===5){
  text="world"
  }else if(x===6){
      text="planet"
       } else {
         text="universe"
          }
const myelem=()=>{
  return(
    <div>
      {text}
    </div>
  )
}
const r1 = ReactDOM.createRoot(document.getElementById('root'));
 r1.render(myelem())*/

 //Function Components
 /*function Product()
 {
  return(
    <>
    <h1>Welcome to the function</h1>
    </>
  )
 }
 const r1=ReactDOM.createRoot(document.querySelector("#root"));
 r1.render(<Product />);*/

 //Function props
 /*function Product(props) {
   return (
     <div className={`product ${props.type}`}>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
       
     </div>
     );
      }
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Product name='iphone' price="$800"/>)*/

//class Component

/*class Product extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Price:{this.props.price}</p>
        <p>Rating:{this.props.rating}</p>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
 r1.render(<Product name="IPhone" price="$800" rating="4.5"/>)*/

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
 const r3 = ReactDOM.createRoot(document.getElementById('root'))
 r3.render(<Product />);
 //Component Constructor
 class Person extends React.Component{
   constructor(props){
     super(props)
      this.state={
         firstName:"",
          lastName:""
          }
           }
            handleChange=(e)=>{
               this.setState({firstName: e.target.value})
                }
                handleChange=(e)=>{
                  this.setState({lastName: e.target.value})
                   }
                 handleSubmit=(e)=>{
                   alert(`${this.state.firstName} ${this.state.lastName}
                   `)
                      e.preventDefault();
                       }
                        render(){
                            return (
                               <form onSubmit= {this.handleSubmit}>
                                First Name : <input type="text" value={this.state.firstName}
                                 onChange={this.handleChange}/>
                                  Last Name : <input type="text" value={this.state.lastName}
                                   onChange={this.handleChange}/>
                                    <button type="submit">Submit</button>
                                     </form>
                                     )
                                      }
                              }
                              const r1=ReactDOM.createRoot(document.getElementById('root'))
                              r1.render(<Person />)*/

//React Event
/*function Football()
{
  const shoot=()=>{
    alert("Goal Shooted")
  }
  return(
    <>
    <button onClick={shoot}>Shoot Goal</button>
    </>
  )
}  
const r1=ReactDOM.createRoot(document.getElementById('root'))        
r1.render(<Football/>)*/

//React HOOKS

import { useState } from "react";

/*function Counter()
{
  const [count,setCount]=useState(0)
  return(
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Counter/>);*/

//React List(map())
/*function Car(props){
  return <li>I am a {props.b1}</li>
}
function Garage()
{
  const cars=["Ford","BMW","Audi"]
  return(
    <>
    <h1>Who lives in my Garage</h1>
    <ul>{cars.map((x)=><Car b1={x} key={x} />)}</ul>
     
    </>
     

  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React Form
/*function MyForm()
{
  return(
    <form>
       Name:<br/>
        <input type="text" name="name"/><br/>
         Email:<br/>
           <input type="email" name="email"/><br/>
          Password:<br/>
             <input type="password" name="pwd"/><br/>
            <input type="submit" value="Login"/>
    </form>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<MyForm/>)*/

//React useEffect

/*function Timer()
{
   const [count,setCount]=useState(0);
   useEffect(()=>{
    const timerID=setTimeout(()=>setCount(count+1),1000)
     return () => {
       clearTimeout(timerID)
        }
         })
          return (<h2>Seconds passed : {count}</h2>)
}
    const r3 = ReactDOM.createRoot(document.getElementById("root"))
     r3.render(<Timer />)*/

     