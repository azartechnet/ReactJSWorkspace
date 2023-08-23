import React from 'react';
import ReactDOM from 'react-dom';
/*const App = () => {
  const username = 'MohamedAzar';
    return (
    <div>
      <h1>Hello, {username}!</h1>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));*/
const App = () => {
  const h1 = '<strong>This is <em>HTML</em> markup.</strong>';
  
  return (
    <div dangerouslySetInnerHTML={{ __html: h1 }} />
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

