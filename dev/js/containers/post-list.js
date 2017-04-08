import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index'


class PostList extends Component {

    componentDidMount(){
      console.log("LOAD POSTS!");
      this.props.getPosts();
    }

    renderList() {
      if(this.props.posts === null)
        return (<div>Loading posts!</div>)
        return this.props.posts.map((post) => {
            return (
                <li
                    key={post.id}
                >
                    {post.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to PostList
//      > whenever state changes, the PostList will automatically re-render
function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

// Get actions and pass them as props to to PostList
//      > now PostList has this.props.getPosts
function matchDispatchToProps(dispatch){
    return bindActionCreators({getPosts: getPosts}, dispatch);
}

// We don't want to return the plain PostList (component) anymore, we want to return the smart Container
//      > PostList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(PostList);
