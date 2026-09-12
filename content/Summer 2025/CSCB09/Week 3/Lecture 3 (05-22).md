"test commands" are different from other commands
- the `[]` square brackets are simply to  make things look nice
	- `[` is literally the command name
	- ] is literally an *argument* to the command lol

`[!'('"$x"' > '"$y"')']`
- This "command" is still subject to all the syntax of other shell commands
- The `(` character we want to pass as an argument rather than something that means something to the shell
	- so `'('` or alternatively `\(` is there for that reason
	- Think of `''` as "not for you shell; this goes into the command's arguments!"

We be on slide `14` btw
`()` does grouping

Things to note:
`{ grep foo file1 ; ls} > file2`
-  The intention is to shove the output of both commands into `file2`
- HOWEVER THIS IS WRONG. It will #todo what does it do
The solution is to add a `;`
`{ grep foo file1 ; ls ; } > file2`

alternatively you can do this:
```sh
{
	grep foo file1
	ls
} > file2
```
### Grouping with `()` (subshells)
`()` groups, but is different from `{}`
- `()` creates a new shell process (so the results are NOT saved)
- doing `( x=hello )` will NOT create a new `x`
- running `echo $x` after will NOT work!

`( x=hello! ; echo $x ) ; echo $x` #todo card this (be like, "what this return?")

BUT `$((5 + 1))` this is run in the *current shell* (NOT a subshell)

#todo Try to rewrite this WITHOUT SEMICOLONS:
```sh
if mkdir abc ; mkdir def ; then
	echo 'success!'
else
	echo 'saddace :('
fi
```
- Also what does `mkdir abc` return? The exit code?
#todo idek what does does? Why is there two args!?

`seq 5 -1 1` starts at 5, increases by `-1`, goes to `1`

#### Wildcards / Patterns (to match filenames)
slide 31/56

the `*` represents "any part of" a filename.
- for each path, we check, does it have `*.py`in it? If so, we select it.

`?` matches one character
- if we have `foo` and `goo`, then `?oo` would match both of them
- So would `?o?` or even `???`

### Exit codes thingys
- The exit code comes from the last executed command

### `getopts`
- GETS OPERATIONS
`getopts a-thingy variable-name`

Each time you run it, it progresses to the next flag. Only when the exit code is `1` do we know we've gone through all our options
- I think it stops when it doesn't see an argument within the `a-thingy` ? idek lol

Also note something like `sh toyscript -n -- -v` implies `--` and `-v` are arguments not options, but `-n` is still an option 

If you add an option that`a-thingy` doesn't have, it will be like `illegal option -k`



`OPTIND` is your operation index. In the table it starts at `2` because when we go to the next row we know 'okay, we're looking at the second argument!' 
- Really, it starts at `1` but at the *end* of the first `getopts` call, if the exit code is not 0, it should be increased to `2`  
- If you want to go thru the while loop *again*, all you have to do is set `OPTIND=1` 
Also just so you know `ORTARG` and `OPTIND` are *global variables*

### Functions (what the flip)

```sh
sh toyscript -n -M -etc -etc

myfunction () {
	while getopts pq myflag ; do
		...
	done
	
	echo "$1"
	return # This exits out of a function. alternatively you can specify a value
}
```
- Two things:
	1. Since `toyscript` runs `getopts` it will chance the `OPTIND` but never "reset it" so we would need to do that manually otherwise that while loop will NOT run!
### Here Document

To store multi-line hard-coded text into `stdin`
- `EOF` or `_EOF_` or whatever works. Nothing special about these terms; the shell will understand what you're doing.
- If you start with `EOF`,  your here document must also *end* with `EOF`

![[EOF Example.png]]