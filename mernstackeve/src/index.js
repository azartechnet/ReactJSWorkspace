import React from 'react';
import ReactDOM from 'react-dom/client'
/*function Sample()
{
  return<h1>Welcome to the function</h1>
}
const c1=document.getElementById('root')
const r=ReactDOM.createRoot(c1)
r.render(<Sample/>);*/

//Basic HTML Rendering
/*const App=()=>{
  return(
      <div>
      <h1>Hello React</h1>
      <p>This is a Para..</p>
      </div>
  )
}
//ReactDOM.render(<App/>,document.getElementById('root'));
const c1=document.getElementById('root');
const r=ReactDOM.createRoot(c1);
r.render(<App />);*/

//Through Basic Rendring Creating the form

/*function Sample()
{
  return(
    <div>
      <form>
        Name:<input type="text"/><br/>
        Email:<input type="email"/><br/>
        Password:<input type="password" minLength={8} maxLength={20} required/><br/>
        <input type='submit' value="Login"/>
      </form>
    </div>
  )
}

const c1=document.getElementById('root');
const r=ReactDOM.createRoot(c1);
r.render(<Sample />);*/

//Dynamic Rendering

/*const App=()=>{
  const username="azar"
  return(
    <div>
      <h1>Welcome {username}</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//JSX Coding

/*const myelem=<h1>Welcome to the JSX{5+5}</h1>

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelem)*/

//React List

/*const myele=(
  <ul>
    <li>list1</li>
    <li>list2</li>
    <li>list3</li>
    <li>list4</li>
  </ul>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele)*/

//React Fragement Tag
import './index.css';
const myele=(
  <>
    <body>
      <ul>
        <li ><a href='' className='active'>Home</a></li>
        <li><a href=''>About</a></li>
        <li><a href=''>Contact</a></li>
        <li><a href=''>Login</a></li>
        </ul>
        <div className='divstyle'>
          <h1>Hello World!</h1>
          <p>This is a paragraph.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magnam dolorem ipsam temporibus nemo modi, suscipit soluta tempore. Fuga perspiciatis at sequi ipsam atque facilis magni nostrum totam aliquam vitae.</p>
        </div>
    </body>
  </>
)


const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myele);