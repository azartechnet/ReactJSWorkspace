import React from 'react';
import  ReactDOM  from 'react-dom';
import  './index.css'
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
const App=()=>{
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
ReactDOM.render(<App/>,document.getElementById("root"));