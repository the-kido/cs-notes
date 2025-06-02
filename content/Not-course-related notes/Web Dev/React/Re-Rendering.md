Occurs when
- A [[States|state]] is updated with `setState()`
- Updating a [[Properties|prop]]
- `forceUpdate()`

The tutorial [here](https://react.dev/learn/tutorial-tic-tac-toe#adding-time-travel) mentions something about components not re-rendering as a benefit of utilizing immutability #todo


# Infinite Render Loops 😨
Consider le following:
```tsx
const [modules, setModules] = useState<JSX.Element[]>();
setModules( [<TestModule />, <OtherModule /> ] );
```

You'll get an error like this:
> Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

This is because `setModules` updates a state, which re-renders the component, but that just starts the code making up the contents of the component again from the top, thereby creating a loop.
