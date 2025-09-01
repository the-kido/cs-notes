
### `typedef` makes an alias for a type

### Function pointers
```c
int plus (char x, char y) {
	return x + y;
}

int (*f)(char x, char y);
f = plus; // This is a thing that exists
```

#todo Go over the "epic" slide (NOT epic)


### File I/O

it's a  thing that exists

"ending writing is not committed until we close"

"part of the C standard!"


## Arbitrary Data I/O

- Reads / writes `n` items each being `s` bytes.
- Useful for arrays or arrays of structs / records
- Raw Bytes (like an array of `unsigned char`)
