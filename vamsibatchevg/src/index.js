import React from "react";
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

  class Sample extends React.Component
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
  r1.render(<Sample />)

  //React State