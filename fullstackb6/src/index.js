import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample from './Sample';



// function Sample(props)
// {
//   return <h2>Welcome to the {props.a1}function component</h2>
  
// }
// function Azar()
// {
//   return(
//     <>
//        <h1>Welcome to the Another function</h1>
//        <Sample/>
//     </>
//   );
// }

// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<Azar/>);

const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>);
