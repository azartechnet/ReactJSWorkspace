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
      studaddr:"nmk"
    };
  }
  render()
  {
    return(
      <div>
        <h1>My{this.state.studid}</h1>
        <p>My{this.state.studname}</p>
        <p>My{this.state.studaddr}</p>
      </div>
    );
  }
}

const c1=document.getElementById('root');
const r1=ReactDOM.createRoot(c1)
r1.render(<Sample/>)