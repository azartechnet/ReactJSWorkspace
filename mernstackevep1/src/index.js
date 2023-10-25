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
import './index.css';
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
r1.render(myelem)

