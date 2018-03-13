## JS Tutorial

First, make sure you're up to speed on arrow function syntax:

These two function definitions are identical.
```
function logger(arg) {
  console.log(arg);
}

let logger = (arg) => {
  console.log(arg);
}
```

A one line arrow function doesn't need a return call, whereas using brackets does.

```
let generateMessage = (name) => "Hi, "+name;

let generateMessage = (name) => {
  "Hi, "+name;
}
```

Not hard.  Just some housekeeping for later.

Great, we are going to be using The Guardian's public API to search through news articles.  (The Guardian is an Engligh language online news source based in the UK).  Get an API Key here: https://bonobo.capi.gutools.co.uk/register/developer

test out the search API from terminal.  You should get  back a bunch of JSON.
- curl "https://content.guardianapis.com/search?api-key=<PASTE_YOUR_API_KEY_HERE>"

now try it with a search term
- curl "https://content.guardianapis.com/search?api-key=<YOUR_API_KEY>&q=olympics"

Great, now lets pause and talk about callbacks.  Rewrite app.js:
```
setTimeout(() => { console.log('hi') }, 3000);
```

What's going on here exactly?  <PAUSE FOR DISCUSSION>

Without going too deeply into why, lets agree to agree that this pattern can quickly lead to "callback hell" with multiple nested levels of functions calling functions calling functions.

To remedy this, Promises & async functions were created.  First, promises.  Lets use a Promise to create a sleep function that wraps setTimeout.

```
function sleep(millis) {
  return new Promise(
    (resolve) => {
      setTimeout(resolve, millis)
    }
  );
}
```

Now call our function with special promise syntax

```
function sleep(millis) {
  return new Promise(
    (resolve) => {
      setTimeout(resolve, millis)
    }
  );
}

function main() {
  console.log('wait for it...');
  sleep(5000).then(() => {
    console.log('sup')
  });
}

main();
```

If this doesn't seem very much better to you, lets refactor to use an async function:

```
// prepending async automatically wraps your return value in a promise.
async function sleep(millis) {
  return setTimeout(resolve, millis);
}

async function main() {
  console.log('wait for it...');
  await sleep(5000);
  console.log('sup');
}

main();
```

This lets you write your code declaratively without creating a highly nested web of spaghetti.  Only thing to remember is async functions can only be called from async functions.  


Ok, back to the guardian lets use fetch to request some articles:
```
function main() {
  const apikey = '<PASTE HERE>';
  const query = 'north+korea';
  const result =
    fetch(`https://content.guardianapis.com/search?api-key=${apikey}&q=${query}`)
    .then( (result) => result.json())
    .then( (data) => data);

   console.log(result)
}

main();
```

Now, a lab.  Create a one-page app that lets a user enter a some text and see links to Guardian articles that match the search term.
