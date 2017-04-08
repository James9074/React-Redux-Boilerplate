import axios from 'axios';

export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export function getPosts() {
  var data = axios.get(`http://jsonplaceholder.typicode.com/posts`)

  return {
    type: 'POSTS_RETURNED',
    payload: data
  }
}
