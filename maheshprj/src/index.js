import ReactDOM from "react-dom/client";
import React from "react";

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

const App=()=>
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
r1.render(<App/>)