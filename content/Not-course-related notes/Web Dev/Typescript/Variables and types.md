You can declare variables with
- `let`
- `var`
- `const`

```ts
let x = 10;
var y = 20;
const z = 2145325;
```


If a [[Not-course-related notes/Web Dev/Typescript/Interfaces|interface]] has a field that is not required, you can add a `?` right in front of it
```ts
interface Useless
{
	possibleNumber? : 10 | 20;
}
```
speaking of that `|`, it shows that `possibleNumber` can either attain the value of 10 or 20.  Refer to [[Union and Intersection Type Operators]]

```ts
interface Judgement
{
	formats?: '12h' | '24h';
}
```
