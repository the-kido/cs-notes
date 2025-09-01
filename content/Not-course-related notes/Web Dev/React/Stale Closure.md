Pretend we have a component like this:
```tsx
function aComponent()
{
	const [things, setThings] = useState<Thing[]>();

	function addThing(id: number)
	{
		var newThing = ... stuff to create a thing ...
		newThing.id = id;
		newThing.onRemoved = () => removeThing(id);
		setThings([...things, newThing);
	}
	
	function removeThing()
	{
		// BAD. PROBLEMS!
		var filtered = modules.filter((module) => module.props.id != idToRemove);
        setModules(filtered);
	}
}
```


The problem we'll have is that inside of `addThing` we define a function `() => removeThing(id)` inside of another function. This creates a [[Closures|closure]] which as the name suggests "remembers" the value of `things` but it does not update what it remembers if `things` changes in the future.

That means, when `newThings.onRemoved` is invoked, it will call an ancient version of `removeThing()` whose `modules` (which is "remembered" by closure)
