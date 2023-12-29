import React from "react";
import ReactDOM  from "react-dom";
/*function Sample()
{
    return <h1>Welcome to the React Application</h1>
}
const r1 = ReactDOM.createRoot(document.getElementById("root"));
r1.render(<Sample/>)*/

//Basic Rendering

/*const App=()=>{
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

ReactDOM.render(<App/>,document.getElementById('root'));*/

//Dynamic Rendering

/*const App=()=>{
    const username="mohamed";
    return(
        <div>
            <h1>Hello,{username}</h1>
            <p>{new Date().toLocaleDateString()}</p>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));*/

//With JSX


// const myElement = <h1>I Love JSX!</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//WithOut JSX

const myElement = React.createElement('h1',{}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);

