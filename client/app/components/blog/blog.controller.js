// TODO: create the blog controller
// check blog.html for hints on what the controller
// should have/do
import _ from 'lodash';

class BlogController {
  constructor() {
    this.message = "hello";
    this.posts = _.times(9, i => {
      return {
        author : 'a cat',
        title: 'hello'
      }
    })
  }
}

export {BlogController}
