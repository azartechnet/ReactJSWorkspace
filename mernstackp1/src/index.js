import React from "react";
import ReactDOM from "react-dom/client"

/*function Sample()
{
  return(
    <div>
<h1>Welcome to the Function</h1>
    <h2>Welcome to heading</h2>
    <form>
      UserName:<input type="text"/>
      Password:<input type="text"/>
      <input type="submit" value="ClickHere"/>
    </form>
    </div>
    
  )
  
}

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample/>)
*/
//Basic Rendering
/*import React from "react";
import ReactDOM from "react-dom";
const  App=()=>{
  return(

    <div>
      <h1>Heading-1</h1>
      <p>This is Para...</p>
    </div>
  );
};
ReactDOM.render(<App/>,document.getElementById('root'))*/
//Dynamic Content
/*import React from "react";
import ReactDOM from "react-dom"
const App=()=>{
  const username='azar';
  return(
    <div>
      <h1>Welcome</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <h2>{username}</h2>
    </div>
  )
}
ReactDOM.render(<App/>,document.getElementById('root'));*/

//JSX Concepts
// const my1=<h1>Welcome to JSX</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(my1);

//Expression in JSX
// const my1=<h1>React {5+5}</h1>
// const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(my1)

//Inserting the list
/*const my1=(
  <ul>
    <li>MCA</li>
    <li>MBA</li>
    <li>Bsc</li>
  </ul>
);
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)*/

//fragement tag
const my1=(
  <>
  <h1>Welcome to the First App</h1>
  </>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(my1)