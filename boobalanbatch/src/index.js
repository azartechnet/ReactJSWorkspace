import React from "react";
import ReactDOM  from "react-dom/client";

/*const  App = () => {
   return (
      <div>
        <h1>Welcome to the First Program</h1>
        <form>
          <label>UserName</label>
          <input type="text" />
          <input type="submit" value="Login"/>
        </form>
      </div>
   )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/


//Basic Rendering

/*const App=()=>{
  return(
    <div>
    <h1>Welcome to Baics Rendering</h1>
    </div>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

const App=()=>{
  const username="mohamed";
  return(
    <>
      <h1>Hello{username}</h1>
      <h2>I am {username}'s Profile Page</h2>
       <p>{new Date().toLocaleDateString()}</p>
    </>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)