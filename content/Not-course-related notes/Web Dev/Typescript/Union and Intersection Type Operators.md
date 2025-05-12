`|` and `&` define union and intersection types

You can combine types together to get wackier types.

```ts
interface A
{
	id: number;
	title: string;
}

interface B
{
	id: string;
	views: number;
}

type AandB = A & B;
type AorB = A | B;

var aandb: AandB; // Contains id, title, and views, where 'id: never' (it cannot be a number and string simultaneously)
var aorb: AorB; // Contains just id, where 'id: number | string' 
```