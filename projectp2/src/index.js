import React from "react"
import ReactDOM from "react-dom/client"
//import Sample  from "./App"
//import Sample from "./PropsFile"
//import Azar from "./PropsFile"

import { Sample } from "./ConstructorExample"
/*class Sample extends React.Component
{
  render()
  {
    return <h2>This is class Component</h2>
  }
}
const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1)
r1.render(<Sample/>);
*/

/*const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1)
r1.render(<Azar c1="Welcome"/>);*/

const c1=document.getElementById('root')
const r1=ReactDOM.createRoot(c1)
r1.render(<Sample c1="welcome to All"/>)