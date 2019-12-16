# About functional programming

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


## UI Components as Functions

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



