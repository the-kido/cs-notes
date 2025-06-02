> A framework to manage constantly-changing states in a robust way!

This be the repo: https://github.com/pmndrs/zustand

Similar to what a [[States|state is in React]], Zustand manages your states (this being "data" you want to keep track of)

### The idea

You create `stores` and Zustand gives you a fancy syntax to update the state you stored
```ts
import { create } from 'zustand'

interface TypeStored
{
	count: number;
	int: () => void;
}

const useCountStore = create<TypeStored>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

export default useCountStore
```

`set` is a function that does the [[#Automagically "merging state"|merging state]] stuff for you (look below). It returns `void` fyi. 
It will take a call-back function that takes the previous state and you return the object with the "changes" you want made. 

### Accessing the state 
`useCountStore` takes in a selector function to return the value(s) of the state you want to access.
It acts as a "getter" in this scenario.

```jsx
const bears = useBearStore((state) => state.bears)
return <h1>{bears} around here ...</h1>
```

### Setting the state
```jsx
const increasePopulation = useBearStore((state) => state.increasePopulation)
return <button onClick={increasePopulation}>one up</button>
```
Very similar, but instead of accessing the "value" from the state, we access the `increasePopulation` function from the state instead! Fancy stuff!
- It's literally you *getting the setter*

### Automagically "merging state"
Consider this example:

```ts
interface Store {
    points: number;
    increasePoints: () => void;
    setPoints: (amt: number) => void;
}

var Test: Store = {
    points: 10,
    increasePoints: () => null,
    setPoints: (num) => null,
};

var thing = {...Test, points: 0}; // This notation "opens" Test and allows you to change
// only 1 value (instead of copying all the non-changing thingys!)
console.log(thing.points); // This will now be 0; the functions do NOT change
```

The above demonstrates "object spread syntax" in JS. What `set` does in Zustand is obfuscate all that boilerplate for you
![[Zustrand merging state.png]]

The syntax is "common" since in JS, when managing states, you should never *directly* mutate a state. That's Functional Programming 101 and good programming in general
```ts
Test.points += 10; // This is evil and WILL murder your family. No doubt. 
```
