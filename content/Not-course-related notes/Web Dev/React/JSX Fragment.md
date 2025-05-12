When defining a JSX [[Components|component]], you might want it to be more than 1 element. To do this, you use a fragment `<>` `<\>`

```jsx
function component()
{
	return <>
		<h1> Hello World <\h1>
		<button> Press me! <\button>
	</>
}
```

These are not required when updating, for instance, the inner html of an element can be replaced with an *array of elements!*

```jsx
// Within "Game" componenet

const moves = [
	<li> <button> 1 </button> </li>,
	<li> <button> 2 </button> </li>,
	<li> <button> 3 </button> </li>
]

return <div id="game"> 
	{items}
</div>
```