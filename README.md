## Hello World

Your First App

## Basic 

* String interpolation
* Property Binding
* Event Binding
* Component to component comm
* Directives
* Template reference

## Forms

* Define an Angular form
* Capture form data
* Validate form 
* Display error message 

## Material UI
* Buttons
* Form field
* Radio button
* Select/Drop down
* Checkboxes
* Checkbox with Multiple values
* Date picker / time picker
* Affordance , hint and error messages

## Service and Promise
* The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. 

```
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
```

* Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places:

  * in HeroService which uses the service to send a message
  * in MessagesComponent which displays that message

## HttpClient

Most front-end applications communicate with backend services over the HTTP protocol. Modern browsers support two different APIs for making HTTP requests: the XMLHttpRequest interface and the fetch() API.

## Routing

Overview
The browser is a familiar model of application navigation:

Enter a URL in the address bar and the browser navigates to a corresponding page.
Click links on the page and the browser navigates to a new page.
Click the browser's back and forward buttons and the browser navigates backward and forward through the history of pages you've seen.


## CRUD

An example on how Angular perform create, read, update and delete functionality


## Mock Server Setup
Install a json-server. You can do it globally (-g) with npm:

```
npm install -g json-server
```

Create a JSON file with mock data

```
{
    "author" : [ {
        "id": 1,
        "age" : 16,
        "name" : "Andy"
      }, 
      {
        "id": 2,
        "age" : 22,
        "name" : "Lisa"
      }
    ],
    "comments" : [ 
        {
        "id": 1,
        "date" : "03-18-2016",
        "message" : "Nice!"
      },
      {
        "id": 2,
        "date" : "06-21-2017",
        "message" : "Great view!"
      }
    ],
    "pictures" : [
      {
        "id": 1,
        "author" : "Lisa",
        "description" : "A wonderful view of nature",
        "img" : "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg",
        "title" : "A natural view"
      },
      {
        "id": 2,
        "author" : "Andy",
        "description" : "Seaside sunset",
        "img" : "https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg",
        "title" : "Landscape view"
      }
    ]
  }
```

Start the JSON server 

```
json-server --watch myJSONfile.json
```

Available REST API endpoint

```
http://localhost:3000/pictures
http://localhost:3000/author
http://localhost:3000/comments
```

## PWA

Service workers augment the traditional web deployment model and empower applications to deliver a user experience with the reliability and performance on par with natively-installed code. Adding a service worker to an Angular application is one of the steps for turning an application into a Progressive Web App (also known as a PWA).

```
ng add @angular/pwa --project *project-name*
```

https://www.npmjs.com/package/http-server

```
http-server -p 8080 -c-1 dist/<project-name>
```
