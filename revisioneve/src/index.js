import React from 'react';
import ReactDOM  from 'react-dom';

//Basic Example1
/*function Sample()
{
  // return<h1>Welcome to the Application</h1>

  return(
    <div>
      <h1>LoginForm</h1>
      <label>UserName</label>
      <input type='text'/>
      <label>Password</label>
      <input type='password'/>
      <input type='submit' value="Login"/>
    </div>
  )
}
const s1=document.getElementById('root');
const r1=ReactDOM.createRoot(s1);
r1.render(<Sample/>)*/

//Basics Rendering

const App=()=>{
  return(
    <div>
      <h1>Welcome to Application</h1>
      <p>Welcome to Application para..</p>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))