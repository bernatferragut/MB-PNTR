# About functional programming in Javascript

## Values that are functions of other values.

> CLASSIC APPROACH
```javascript
var rectangle = {
  width: 2,
  height: 3,
  area: 6,
  perimeter: 10
};
```

## Single source of truth.

> FUNCTIONAL APPROACH 
```javascript
// Find the main object attributes
var rectangle = {
    width : 2,
    height : 3
}

// Create functions driven by the main object's arrtibutes
function area(rectangle) {
    return rectangle.w * rectangle.h;
}

function perimeter(rectangle) {
    return rectangle.w * 2 + rectangle.h *2;
}

area(rectangle); // 6
perimeter(rectangle); // 10
```

 If you can make your **HTML** (***rectangle***) a **function of your data** (***single sourde of truth***), then you only have to worry about **modifying data** - not DOM - and the way it gets rendered on the page will be implicit.


## UI Components as Functions - Part 1
#### Template Literals and Variable Substitution 

> Variables (or any JavaScript expression, including function calls!) can be inserted directly into the string if they're wrapped in ***${ }***:

```javascript
let blogPost = {
    author : 'Bernat Ferragut',
    date: '16-12-2019',
    title : 'VanillaJS Reactivity',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

function Header() {
    return
    `
    <div class="header">
        'This is the Bernat Ferragut Sole Blog'
    </div>
    `
}

function BlogPost(blogPostData) {
    return 
    `
    <div class="post">
        <h1>${blogPostData.title}</h1>
        <h3>${blogPostData.author}</h3>
        <h3>${blogPostData.date}</h3>
        <p>${blogPostData.body}</p>
    </div>
    `
}

function PostPage(blogPostData) {
    return 
    `
    <div>
        ${Header()}
        ${PostPage(blogPostData)}
    </div>
    `
}

document.querySelector('body').innerHtml = PostPage(blogPostData)
```

## UI Components as Functions - Part 2
#### Ternary Operator - (if/else)

> The ternary operator is like an if-else, but for an expression instead of a set of statements

```javascript
let blogPost = {
    author : 'Bernat Ferragut',
    isSponsored: true,
    title : 'VanillaJS Reactivity',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
}

function Header() {
    return
    `
    <div class="header">
        'This is the Bernat Ferragut Sole Blog'
    </div>
    `
}

function BlogPost(blogPostData) {
    return 
    `
    <div class="post">
        <h1>
            ${blogPostData.title}
            ${blogPost.isSponsored ? '<img src="badge.png">' : '' }
        </h1>
        <h3>${blogPostData.author}</h3>
        <p>${blogPostData.body}</p>
    </div>
    `
}

function PostPage(blogPostData) {
    return 
    `
    <div>
        ${Header()}
        ${PostPage(blogPostData)}
    </div>
    `
}

document.querySelector('body').innerHtml = PostPage(blogPostData)
```

## Looping through UI Components - Part 3
#### Array.map()

> Array.map() is an Array method that takes a single argument, which is a callback function. It loops over the array it's called on (similar to Array.forEach()), and calls the supplied callback once for each item, passing the array element to it as an argument. The thing that makes it different from Array.forEach() is that the callback is supposed to return a value - presumably one that's based on the corresponding item in the array - and the full expression returns the new array of all the items returned from the callback. 

```javascript
var allPosts = [
  {
    author: 'Bernat Ferragut',
    title: 'A CSS Trick',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    author: 'Llorenç Ferragut',
    title: 'Another CSS Trick',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    author: 'Elisenda Solé',
    title: 'A Home Video',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

function BlogPost(postData) {
  return `<div class="post">
            <h1>${postData.title}</h1>
            <h3>By ${postData.author}</h3>
            <p>${postData.body}</p>
          </div>`;
}

function BlogPostList(allPosts) {

    return
    `
    <div class="allPosts">
        ${allPosts.map( BlogPost ).join('')};
    </div>
    `
}

document.querySelector('body').innerHtml = BlogPostList(allPosts)
```
> Each object containing the info for a single blog post is passed, one by one, to the BlogPost function, and the returned HTML strings are placed into a new array. We then just call join() on that new array to combine the array of strings into a single string (separated by an empty string), and we're done. 

***No for-loops, just a list of objects converted to a list of HTML elements.***

## Re-Rendering - Part 4
#### how do we update when the data changes? 

We can now implicitly generate HTML for given data, in a way that's reusable and composable, all within the browser. But, how do we update when the data changes? How do we even know when to trigger an update? This subject is one of the most complex and hotly debated in the JavaScript framework community today. Making large numbers of DOM updates efficiently is an amazingly difficult problem, one which engineers at Facebook and Google have spent years working on.

Luckily, our proverbial website is just a blog. The content pretty much only changes when we look at a different blog post. There aren't a ton of interactions to detect, we don't have to optimize our DOM operations. When we load a new blog post, we can just scrap the DOM and rebuild it.

```javascript
function update() {
    document.querySelector('body').innerHtml = BlogPostList(allPosts)
}

setInterval(update, 1000);

```
> Each object containing the info for a single blog post is passed, one by one, to the BlogPost function, and the returned HTML strings are placed into a new array. We then just call join() on that new array to combine the array of strings into a single string (separated by an empty string), and we're done. 

***No for-loops, just a list of objects converted to a list of HTML 
elements.***

## Adding Classes

```javascript
function BlogPost(postData) {
  return `<div class="post ${postData.isSponsored ? 'sponsored-post' : ''}">
            <h1>
              ${postData.title} ${postData.isSponsored ? '<img src="badge.png">' : ''}
            </h1>
            <h3>By ${postData.author}</h3>
            <p>${postData.body}</p>
          </div>`;
}
```

## Adding HTML attributes

```javascript

const BlogPost = (postData)=> {
    `
    <div class="post ${postData.isSponsored ? 'sponsored-post' : ''}">
        <input type="checkbox" ${postData.isSponsored ? 'checked' : ''}>
        <h1>
              ${postData.title} ${postData.isSponsored ? '<img src="badge.png">' : ''}
         </h1>
        <h3>By ${postData.author}</h3>
        <p>${postData.body}</p>
    </div>
    `
}

```

## Summary

is type of code is far easier to write and maintain than jQuery spaghetti, and there's no hurdle at all to using it right now. Everything we've talked about here comes free with all reasonably modern browsers, without so much as a library.

