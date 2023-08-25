import React from 'react';
import ReactDOM from 'react-dom/client';

class Demo extends React.Component
{
    render(){
        return <p>Welcome to the class Component</p>
    }
}

const c1 = document.getElementById('root');
const root = ReactDOM.createRoot(c1);
root.render(<Demo />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Sample from './Sample.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Sample />);
