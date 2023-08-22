import React from "react";
import ReactDOM from "react-dom/client";

function Demo(props)
{
  return<h2>Welcome to the Application</h2>
}

const c1=document.getElementById("root")
const r1=ReactDOM.createRoot(c1);
r1.render(<Demo/>);