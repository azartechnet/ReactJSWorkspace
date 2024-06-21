import React from 'react';
import CreatePost from './CreatePost';
import PostsList from './PostsList';

const App = () => {
    return (
        <div>
            <h1>CRUD App with React and MySQL</h1>
            <CreatePost />
            <PostsList />
        </div>
    );
};

export default App;