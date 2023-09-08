import React from 'react';
import  ReactDOM  from 'react-dom/client';
import  './index.css'

import App from './App';
/*function Sample()
{
  return<h1>Welcome to the React Application</h1>
}
const c1=document.getElementById("root");
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample/>);*/

//Basic Rendering Concepts
/*const App=()=>{
  return(
    <div>
      <h1>Welcome to the Application</h1>
      <p>This is the Paragraphs</p>
    </div>
  );
};
*/
/*const App=()=>{
  return(
    <div>
      <h1>LoginForm</h1>
      <form>
        UserName:<input type='text'/>
        Password:<input type='password'/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  );
};
ReactDOM.render(<App/>,document.getElementById("root"));*/

/*const App=()=>{
  const username='azar';
  return(
    <div>
      <h1>Welcome {username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};
ReactDOM.render(<App/>,document.getElementById("root"));*/

/*const myelm=<h1>Welcome to JSX</h1>

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(myelm);*/

/*const myelm=<h1>React is {5+5} time better</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))

r1.render(myelm);*/

/*const myelm=(
  <>
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
  </ul>
  </>
);

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelm);*/

/*const myelm=<h1 className='d1'>Welcome to the JSX</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelm)*/

/*const x=5;
let t1="goodbye"
let text="";
if(x>10)
{
  text="hello"
}
else
{
  text=t1;
}

const myelm=<h1>{text}</h1>

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(myelm)*/

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)
