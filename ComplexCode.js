/*
Filename: ComplexCode.js

This code demonstrates a complex implementation of a social media platform.
It includes multiple classes, inheritance, complex data structures, and various functionalities.

*/

// User class
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.friends = [];
    this.posts = [];
  }

  addFriend(user) {
    if (!this.friends.includes(user)) {
      this.friends.push(user);
      user.friends.push(this);
    }
  }

  removeFriend(user) {
    if (this.friends.includes(user)) {
      this.friends.splice(this.friends.indexOf(user), 1);
      user.friends.splice(user.friends.indexOf(this), 1);
    }
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  likePost(post) {
    post.increaseLikes();
  }

  commentOnPost(post, content) {
    const comment = new Comment(content, this);
    post.addComment(comment);
    return comment;
  }
}

// Post class
class Post {
  constructor(content, author) {
    this.content = content;
    this.author = author;
    this.likes = 0;
    this.comments = [];
  }

  increaseLikes() {
    this.likes++;
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

// Comment class
class Comment {
  constructor(content, author) {
    this.content = content;
    this.author = author;
  }
}

// Creating users
const john = new User('John Doe', 'john@example.com', 'password');
const jane = new User('Jane Smith', 'jane@example.com', 'password');

// Connecting users as friends
john.addFriend(jane);

// Creating posts
const post1 = john.createPost('Hello, world!');
john.likePost(post1);

const post2 = jane.createPost('Excited to join this social media platform!');
john.commentOnPost(post2, 'Welcome, Jane!');

console.log(john);
console.log(jane);
console.log(post1);
console.log(post2);