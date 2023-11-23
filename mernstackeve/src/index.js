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
/*import './index.css';
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
r1.render(myele);*/

//Class Component
/*class Sample extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>Welcome to the Class Component..</h1>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

//class component using Constructor and super class

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={productid:"1001"}
  }
  render()
  {
    return(
      <h1>This Your ProductId is::{this.state.productid}</h1>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/





//Component in File
//React State
//Changing the State Object
//Events

//Component Construtor

/*class  Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={productid:1001};
  }
  render()
  {
    return<h2>I am a Sample Function</h2>
  }
}

const c1=ReactDOM.createRoot(document.getElementById('root'));
c1.render(<Sample/>);*/

//Example Props

/*class Sample extends React.Component
{
  render()
  {
    return<h2>I am a {this.props.pid}</h2>
  }
}
const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample pid="1001"/>)*/

//Props in the Constructor

/*class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
  }
  render()
  {
    return<h2>This is Props function{this.props.pid}</h2>
  }
}
const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample pid="1001"/>)*/

//Component in Component

/*class Sample1 extends React.Component
{
  render()
  {
    return<h2>I am Sample1!!!</h2>
  }
}
class Sample2 extends React.Component
{
  render()
  {
    return(
      <div>
        <h1>This is Sample2</h1>
        <Sample1/>
      </div>
    )
  }
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2 />)*/

//Component in file

/*import Sample from './App';

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1);
r1.render(<Sample />)*/

//React State
class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      name:'John',
      age:25,
      city:'New York'
    }
  }
  render()
  {
    return(
      <div>
        <h1>My name is {this.state.name}</h1>
        <p>I live in {this.state.city}, I am {this.state.age} years old.</p>
      </div>
    )
  }
}
const s1=document.getElementById('root');
const r1=ReactDOM.createRoot(s1);
r1.render(<Sample />);