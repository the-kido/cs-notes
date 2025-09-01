
```sh
v="some value"
v0="some other value"

echo $v0 # Prints 'some other value'
echo ${v}0 # Prints 'some value0'
echo \$v0 # Prints $v0
echo '$'v0 # Also prints $v0
```