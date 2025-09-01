We're still on these slides: https://www.cs.utoronto.ca/~trebla/CSCB09-2025-Summer/08-shell-l.pdf

### Dot commands
`. ./cmds.sh`
- The command is literally a `.`
- It runs the commands of that script in the *current shell* as opposed to `sh cmds.sh` which does it in a *separate* shell process
> You MUST include the `./` to indicate relative path. It basically *wants* to see *some kind of slash* so it knows what you're doing ("running arbitrary files might be dangerous!")
>
> This means you cannot do `. cmds.sh` 



#### Export
- Marks a variable as an environment variable
- `export MYENVVAR="bazinga!"`
- Goes byebye after you close the terminal you ran `export` in though

#### Unset 
- Undoes a variable ig?


### Local Variables
```bash
myfunc()
{
	# in this scenario, x and y are defined, but Y is initialized
	local x y="hello"
	x="hi" #okay now x is initialized too!
}
```
- Does dynamic scoping
```bash
y="goodbye"
x="bye"
myfunc()
{
	# x and y in this scope only affect these "local" x and y's (NOT the "global" ones outside of le function)
	local x y="hello"
	x="hi" #does not touch "bye" of the global x
}
```

Another example
```bash
z=good

victim() {
	# This "z" refers to the "z" depending on where this function is 
	# defined. it does NOT use the local `z` just 
	# because mitm calls it
	echo "$z"

	# and now this will update the global "z"; any other function
	# using the global `z` will change! 
	z="bazinga?"
}

mitm() {
	local z=evil
	# does not "pass" the local z into victim 
	victim
}

echo -n 'mitm ' ; mitm
```


### Arrays
```bash
rgb=(red blue green)

rgba=( "${rgb[@]}" alpha ) # "appedns" an item to somewhere in the array!
```

#### Associative Arrays
- Basically dictionaries
```bash
declare -A mark # defines the array
mark=([bob]=9 [rob]=30) # define an array of key-pairs
```

### Process Substitution
Pipelining is good for 1 input, 1 output (or more with chaining)

```bash
sort <(cmd1) <(cmd2)
```
- Basically cmd1 and cmd2's output to stdout goes into sort!
- Lets you have two input sources!

`cat <(echo bazinga) <(echo what)` 
- Another example of Process Substitution 


### `Diff `
time
```bash
diff old.c new.c
```
- It will output what lines to add, delete, and replace

### Grep
- Searches a text file via a given pattern (thats regex)
- Exits with `1` if there are no matches

### `find` finds a file

