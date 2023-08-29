
import React from 'react';

const Greet = props =>{
    return (
        <div>
            <div className="XYZ">
               <h3> {props.active} </h3>
            </div>
  
            <div className="PQR">
                <h1>{props.activeStatus}</h1>
            </div>
        </div>
        )
  }
export default Greet;