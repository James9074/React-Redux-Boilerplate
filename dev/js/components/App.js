import React from 'react';
import UserList from '../containers/user-list';
import PostList from '../containers/post-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Post List</h2>
        <PostList />
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
