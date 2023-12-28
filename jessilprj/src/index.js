import React from "react";
import ReactDOM  from "react-dom";
/*function Sample()
{
    return <h1>Welcome to the React Application</h1>
}
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>)*/

//Basic Rendering

const App=()=>{
    return (
        <div>
            <form>
                UserName:<input type='text' />
                Password:<input type="password"/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));
