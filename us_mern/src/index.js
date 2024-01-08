import React from "react";
import ReactDOM  from "react-dom/client";

function Sample()
{
  return<h1>Welcome to the First Program</h1>
}

const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)