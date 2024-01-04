import React from "react";
import ReactDOM  from "react-dom/client";
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

/*const myElement = React.createElement('h1',{}, 'I do not use JSX!');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);*/

//Expression in JSX
/*const name="Mohamed"
const myelm=<h1>React is{5+5} time is better in UI Development{name}</h1>
console.log(myelm)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(myelm)*/

//React using List

/*const Myelm=(
    <ul>
        <li>list1</li>
        <li>list2</li>
        <li>list3</li>
    </ul>
)
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(Myelm)*/

/*import './index.css';
function App() {
    return (
        <h1 className="menu">Welcome to the Application</h1>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Conditional Rendering

/*const x=9
let text="hello"
if(x>10){
    text="goodbye"
    }else if(x==10){
        text="Ten!"
        }
        // else{
        //     text="Less than 10"
        //     }
            const MyElm = () => {
                return (
                    <div>{text}</div>
                    )
                    }
                    const r1=ReactDOM.createRoot(document.getElementById('root'))
                    r1.render(<MyElm />)*/

/*const x=100
const myelem=<h1>{(x<10)?"Hello":"GoodBye"}</h1>
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(myelem)*/

//Importing and exporting
/*import App from "./App";

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/
//Class Component

/*class Sample extends React.Component
{
    render(){
        return(
            <div>
                Hello World!
            </div>
        )
    }
}
const r2=ReactDOM.createRoot(document.getElementById('root'));
r2.render(<Sample/>);*/

//Function Components with argument passing

/*function Sample(props)
{
    return(
        <h1>Welcome to the Function {props.pid}</h1>
    )
}
const r3 = ReactDOM.createRoot(document.getElementById('root'));
r3.render(<Sample pid="1001"/>);*/