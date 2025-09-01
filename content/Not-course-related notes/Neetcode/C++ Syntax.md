# `&`
In C++, `&` lets you pass by reference. You aren't passing a pointer (?)
	- It's like an *alias* for the OG object. Means you can access its properties with the `.` operator instead of `->`

# Strings

`to_string()` to turn objects into strings.
You can do `string += other_string`
`string foo = 10 + "a"` same as  `string bar = ` 


# Iterating
### For maps
```c
for (const auto& kv : m) {
    kv.first;  // key
    kv.second; // value
}
```
- Use `const` for reference to element in map. Means item is const. Can't mutate key or value.
- Don't use `const` so you can change the value, but still not the key (since keys are immutable)
- Use `&` to pass by reference. Without it, e.g. with just `auto kv : m`, you make a copy.