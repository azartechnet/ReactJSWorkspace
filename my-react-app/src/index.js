import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends Component
{
      render()
      {
        return (

          <div className='App'>

            <h1>HelloWorld</h1>
          </div>
        )
      }
}
class App1 extends Component
{
  render()
  {
    return(
      <div className='App1'>

        <h1>WelcomeApp2</h1>
        <form>
          UserName:<input type='text'/>
          Password:<input type='password'/>
          <input type='submit' value='Login'/>
        </form>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <App1/>
  </React.StrictMode>
);


