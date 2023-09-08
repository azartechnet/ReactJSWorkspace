import React from "react";

function Sample(props)
{
    return <h1>Welcome to the Properties Concepts{props.c1}</h1>

}
function Azar()
{
    return(
        <>
          <h1>This is Azar Function</h1>
          <Sample/>
        </>
    )
}

export default Azar;