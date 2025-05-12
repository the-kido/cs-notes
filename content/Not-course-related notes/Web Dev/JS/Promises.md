They are EVERYWHERE and I barely understand them.

> Proxy = an "intermediate" between two things
> A promise = a proxy for value that may or may not be returned

So a promise is a "future value". If a function returns a promise, a second from now it may return `"banana"` or an exception

From [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise):
- _pending_: initial state, neither fulfilled nor rejected.
- _fulfilled_: meaning that the operation was completed successfully.
- _rejected_: meaning that the operation failed.

`then()` will take two call-back functions and call them if the promise is either fulfilled or rejected. 
```ts
var aPromise = functionThatReturnsAPromise();

aPromise.then(
	() => console.log("Success!"), 
	() => console.log("failure >:(")
);
```

You can `await` a promise, which will... wait for the promise to return what it needs to return!


An `Unhandled promise rejection` occurs when 