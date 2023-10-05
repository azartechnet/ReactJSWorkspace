// import React from "react";
// import ReactDOM from "react-dom/client"
/*
function Sample()
{
  return<h1>Welcome to the Function</h1>
}

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample/>)*/

//Basic Rendering
import React from "react";
import ReactDOM from "react-dom";
const  App=()=>{
  return(

    <div>
      <h1>Heading-1</h1>
      <p>This is Para...</p>
    </div>
  );
};
ReactDOM.render(<App/>,document.getElementById('root'))
