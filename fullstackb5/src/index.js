// import React from 'react';
// import ReactDOM from 'react-dom/client';
// class Sample extends React.Component
// {
//   render()
//   {
//     return <h1>Welcome</h1>;
//   }
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Sample />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Sample from './Sample.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample />);
