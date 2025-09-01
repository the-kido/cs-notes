```ts
interface MyInterface 
{
	title: String;
	id: number;
}
```
That is an interface. It most often formats "objects" 

You can do some crazy things with them though

```ts
interface ClockModuleProps extends BaseModuleProps {
  format?: '12h' | '24h';
}
```
- Not only does this interface have everything inside of `BaseModuleProps`, but it has the added field of `format` 
- 