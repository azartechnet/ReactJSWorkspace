import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
function Sample()
{
  return(
    <div>
      <h1>IndexPage</h1>
     <label>UserName</label>
     <input type="text"/><br/>
     <label>Password</label>
     <input type="password"/><br/>
     <input type="submit" value="Login" className="btn btn-primary"/>

    </div>
   )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)