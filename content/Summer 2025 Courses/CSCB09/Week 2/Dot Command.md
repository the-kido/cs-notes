`. ./script.sh`
Calls a command *within the current shell*
- everything a part of that shell is now within the current context

`first.sh`
```sh
variable="Hello world!"
```
`second.sh`
```sh
. ./first.sh

echo $variable # Prints "Hello world!"
```
Different from `sh` cuz that spawns another shell
