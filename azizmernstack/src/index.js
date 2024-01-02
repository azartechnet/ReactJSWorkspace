import React from "react";
import ReactDOM  from "react-dom/client";
//Basic HTML Implementation
/*function Sample()
{
  return(
    <div>
      UserName:<input type="text"/>
      <input type="submit" value="Login"/>
    </div>
  )
}

const r1=document.getElementById('root');
const c1=ReactDOM.createRoot(r1);
c1.render(<Sample/>);*/

// const r1=document.getElementById('root');
// if(!r1) throw new Error("Cannot find root element");
// const c1=ReactDOM.createSyncRoot(r1, {sync:true});
// c1.render(<Sample />);

//Basic Rendering
/*const App=()=>{

  return(
    <>
    <h1>Welcome to Basic Rendering</h1>
    </>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));*/

//Dynamic Rendering

/*const App=()=>{
  const username="mohamed";
  return(
    <div>
      <h1>Hello {username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));*/

//With JSX

/*const myelem=<h1>Welcome to the JSX</h1>

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(myelem)*/

//Without JSX

/*const myelem=React.createElement('h1',{},'Welcome');

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(myelem);*/

const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

