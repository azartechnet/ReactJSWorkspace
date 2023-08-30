import React from 'react';
import ReactDOM from 'react-dom/client';
// function Sample()
// {
//   const f1=(s1)=>{
//     alert("Welcome Sample"+s1)
//     //a1=prompt("Enter the value is::")
//   }
//   return(
//     <div>
// {/* <h1>{a1}</h1> */}
// {/* <button onClick={f1}>ClickHere</button> */}
// <button onClick={()=>f1("hello")}>ClickHere</button>
//     </div>
    
    

//   );
// }
// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<Sample/>);

/*function Sample()
{
  const s1=(a,b)=>{
    alert(b.type);
  }
  return(
    <button onClick={(event)=>s1("Welcome",event)}>ClicHere</button>
  );
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>);*/

function Sample1()
{
    return<h1>WelcomeSample1</h1>
}
function Sample2()
{
    return<h1>WelcomeSample2</h1>
}
function LogicProcess(props)
{
  const isres=props.isres;
  if(isres)
  {
    return <Sample1/>;
  }
  else
  {
    return <Sample2/>;
  }
 
}
const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<LogicProcess isres={true}/>);