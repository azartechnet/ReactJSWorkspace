import React from "react";
import ReactDOM from "react-dom/client";
import  './index.css'
//Basic function components
/*function Hello()
{
  return<h1>Welcome to the First Application</h1>
}

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Hello/>);*/

//Basic HTML Rendering

/*const App=()=>{
  return(
    <div>
      <h1>Hello,React!!</h1>
      <p>This is a Paragraphs Tag</p>
    </div>
  );
};

ReactDOM.render(<App/>,document.getElementById('root'));*/

//Dynamic Rendering

/*const App=()=>{
  const username="nishma";
  return(
    <div>
      <h1>Hello{username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));*/

//Expression in With using JSX

/*const my1=<h1>Welcome to JSX</h1>;

const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(my1);*/

//Expression in Without using JSX

/*const my1=React.createElement('h1',{},'Without Using JSX');

const r1=ReactDOM.createRoot(document.getElementById('root'));

r1.render(my1);*/

//Expression in JSX

/*const my1=<h1>React{10+10}</h1>
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1);*/

//Inserting a Large block of HTML

/*const my1=(
 
  <form>
    <label>UserName</label>
    <input type="text"/>
    <label>Password</label>
    <input type="password"/>
    <input type="submit" value="Login"/>
  </form>
);
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1);*/

//Fragement tag <>Error in tag

/*const my1=(
  <>
   
   <p1>Welcome to Param..</p1>
  </>
 
);

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//Attributs of className

const my1=<h1 className='d1'>Welcome to the className Attributes</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1);