I see these as "member variables" of [[Components]].

```tsx
function Square()
{
  const [value, setValue] = useState<string>('.');

  function handleClick() {
    setValue(value + "X");
  }

  return <button onClick={handleClick}> {value + console.log("Invoked!")} </button>
}
```

Above, `value` is the state. Whenever it is updated with `setValue`, the inner HTML of the button is also updated. Therefore, when clicking the button, not only is the value changed, but it prints, into the console, `Invoked!` as well!

`useState` returns the state and a setter function that updates the state (alongside the component) 
