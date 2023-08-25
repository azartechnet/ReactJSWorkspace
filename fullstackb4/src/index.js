import React from 'react';
import ReactDOM from 'react-dom/client';

// const myelem=<h1>Welcome to JSX</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(myelem);

// const myelem=<h1>Welcome to You {10+10}</h1>
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(myelem);

/*const myelem=(
<div>
<form>
  UserName:<input type='text'/>
  Password:<input type='password'/>
  <input type='submit' value='ClickHere'/>
</form>
</div>

);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(myelem);*/

/*const my1=(
  <>
    <h1>Welcome-1</h1>
    <h1>Welcome-2</h1>
  </>
);
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(my1);*/

const f1=100;
let txt="welcome";
if(f1>10)
{
  txt="react"
}

const my1=<h1>{txt}</h1>

const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(my1);