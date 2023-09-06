import React,{useState} from 'react'
import ReactDOM from 'react-dom/client'


/*
function Sample(props)
{
  const employee=props.employee;
  return(
    <>
     <h1>EmployeeData</h1>
    
     {employee.length>0&&<h2>
      You have {employee.length}in your company
      </h2>}
    </>
  );
}
const employee=["azar","mohamed","kavi"]
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample employee={employee}/>);*/

import Sample1 from './App';
import  MyForm from './login';
import Sample from './List';
// const r1=ReactDOM.createRoot(document.getElementById("root"))
// r1.render(<Sample1/>);

// const r1=ReactDOM.createRoot(document.getElementById("root"));
// r1.render(<MyForm/>);

 const r1=ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>);
