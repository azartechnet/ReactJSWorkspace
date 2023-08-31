import React,{useState} from 'react'
// function Sample()
// {
//   const [count,setCount]=useState(0);

//   return(
//     <div>
//       <p>Count::{count}</p>
//       <button onClick={()=>setCount(count+1)}>ClickHere</button>
//     </div>
//   );
// }

function Sample(props)
{
   return <li>Welcome to the details{props.c1}</li>
}
function Sample1()
{
    const emp1=['azar',"mohamed"];
    return(
        <>
           <h1>Your Employee Details</h1>
           <ul>
            {emp1.map((Sample)=><Sample c1={Sample}/>)}
           </ul>
        </>
    );
}
export default Sample1;