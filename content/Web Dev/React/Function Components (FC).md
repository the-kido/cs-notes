`React.FC<T>` returns a type. It takes in a type `P` that represents all the props of a component.
>[!note] P often represents a type for props 

With this, we can define a component as so:

```tsx
interface Props = {title: string} 

const MyComponent: FC<Props> = (props) =>
{
	return <> </>
}
```

alternatively you can write 