
import React from 'react';
import  ReactDOM from 'react-dom/client';
import Sample1 from './Sample.js'
/*class Sample extends React.Component
{
  constructor()
  {
    super();
    this.state={c1:"welcome"}
  }
  render(){
    return <h2>I am in Sample Comp..</h2>
  }
}*/

/*class Sample extends React.Component {
  constructor() {
    super();
    this.state = {a1: "Welcome"};
  }
  render() {
    return <h2>I am a {this.state.a1} Sample!</h2>;
  }
}*/
/*const r1=ReactDOM.createRoot(document.getElementById('root'));
r1.render(<Sample/>);*/
/*class Sample extends React.Component
{
  render()
  {
    return <h1>I am a {this.props.c1}Sample</h1>;
  }
}*/
//Props are external and controlled by whatever renders the component. 
//The State is internal and controlled by the React Component itself.
/*const s1=document.getElementById('root')
const root=ReactDOM.createRoot(s1);
root.render(<Sample c1="welcome"/>);*/

//Components in components

/*class Sample1 extends React.Component
{
  render(){
    return <h1>Welcome to Sample1</h1>
  }
}
class Sample2 extends React.Component
{
  render()
  {
    return(
      <div>
         <h1>This is Sample2 </h1>
         <Sample1/>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample2/>)*/

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample1/>)