import React from 'react';
import ReactDOM from 'react-dom/client';

class Sample extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      studid:1001,
      studname:"azar",
      email:"azar@gmail.com"
    };

  }
  changeVariable=()=>{
    this.setState({studname:"welcome"});
  }
  render(){
    return(
    <div>
      <h1>My{this.state.studid}</h1>
      <p>My{this.state.studname}</p>
      <button type='button' onClick={this.changeVariable}>ClickHere</button>
    </div>
    ) 
  }
}

const c1=ReactDOM.createRoot(document.getElementById('root'));
c1.render(<Sample/>)