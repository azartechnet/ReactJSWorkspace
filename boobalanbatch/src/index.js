import React from "react";
import ReactDOM  from "react-dom/client";

const  App = () => {
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
r1.render(<App/>)