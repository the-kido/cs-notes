Exciting stuff

# Shell slides
\# for comments
echo prints to stdout
- to omit new line, you add `-n`

For spaces
- `\ \ \ \ ` (4 spaces)
- `'message   end'` via... i forget what it's caleld
- `"message   end"`
- `message'   'end`

```bash

v0=test
echo ${v}0 # Prints test0, not test

```

## Variable substitution
```bash
v='Sale Reciept.pdf' 
ls $v # Substitutes to literally "ls $v Sale Reciept.pdf" which are two arguments
ls "$v" # Fixes above issue
```

```bash
v=$((1 + 2  + 3 + $v))
```

$() for command substitution

e.g.
```bash
echo $(echo ' aaa bbb ccc ')
# This would output
aaa bbb ccc
# without the spaces
echo "$(echo ' aaa bbb ccc ')"
# Now *this* will be
 aaa bbb ccc
```

Adding the sheband, running `chmod u+x myscript` (change mode for file permissions), and then doing `./myscript` is the fanciest way of running a shell script
- By default the files are not executable. It's just `-rw-r--r--` (read write for admin, read for user, read for group)


###### Positional params
$# for the number of args (not including name)
$0 for the name of the script 
$1 for first arg
#2 for second
etc. etc.
$* for all args but a single word: "foo bar xyz"
${11} for arg 11
$@ is all args but separate words: "foo", "bar",  "xyz"


`shift` shifts args. $# = 3 becomes $# = 2

Beware of empty arguments like `""` inside of scripts 

Simple commands are just command, args, file redirection

### File redirection
`tr -d 123 < infile > outfile`
- Reads from left to right. `< infile` means the command takes from infile. `> outfile` means stdout is redirected to outfile
- `>` erases, `>>` appends
To specify between 0, 1, 2 u do `2>` (stderr goes into file, not stdout)
If you want stdout and stderr to go to the same file:
`command > file 2>&1`
- stdout goes to file (so now stdout = file)
- error goes to stdout, which is = to file
By default `<` takes from stdin, so `0<`
- Often the same as calling the command with the arg as the file
- Like, `cat file.txt` vs. `cat < file.txt`

Grouping: `{}` and `()`
Redirection: `>, <, >>`
Pipelining: `|`
- This sends the output direct into another command, instead of using an intermediate file to pass between them
Not: `!`, 
And, or: `&&, ||`
Command list: `;` or adding a new line

```bash
cd B09 ; ls -l ; cd AST4

# Split a really long command into many lines 
echo hello\
world
# prints helloworld
```


#### Exit values via $?
If you do
```bash
echo $?
echo $?
```
The first will print the actual error number. The second will most likely be `0` since the echo previous ran successfully. 0 = success. != 0 is failure

#### Logic
You can do sequential execution:
`mkdir foo1 || mkdir foo2 || mkdir foo3`
- This will keep going until a "true" is hit
- Using &&'s means it will keep going until a false is hit
> `! mkdir` turns a 0 into 1 and not 0 into 0

&& and || *have the same precedence*. 

Test commands
- `[` is the command name. Expects the last arg to be `]` !
- The middle u gotta fill out with the right stuff (that will be given to u of course)
```bash
for path in "$@" ; do
	echo Path: "$path"
	if [ -e $path ] ; then
		echo and it exists!
	else
		echo and it does not exist!
	fi
done
```

The above were for paths. For strings you litertally just do `[ s1 = s2 ]` as the command. Very cool. You can also do !=, <, and >
and there's a bunch of other special ones. 
> If you're doing `[ $v = xxx ]`.... don't! Because if $v is empty, the command will be confused as heck. Wrap around with `""` so that there is at least an empty string to compare.

```bash
v=""
[ $v = "" ] # Will throw syntax error 

echo $? # Will be 2 (not because the strings don't match, but because of syntax error)

[ "$v" = ""] # This will work

echo $? # No error! Also just b/c/ there's an error doesn't mean the script ends. It will keep going. No crashes!
```

#### Test commands
`[ ! -e path ]` 
- ! Does the opposite
`[ "$x" -eq 5 -a "$y" -eq 6 ]`
- -eq for equal, -a for "and". Also precedence is followed (and has higher precedence)
- Also you CAN use parentheses:
```shell
[ -d dir1 -a '(' -d dir2 -o -d dir3 ')' ]
```
Include spaces otherwise the command will be misinterpreted 

#### Grouping
`{ list ; }`
- Calls everything within the group
- new lines instead of `;` also works

`{ grep foo file1 ; ls ; } > file2`
- This ensures every command is called together. Every command's result is grouped together. 
- `{ echo hi ; echo bye } > out` will fill the file "out" with 
```
hi
bye
```
exactly 

`( echo hi ; echo bye )`
- For some reason it doesn't print the last `)`. interesting 
BUT 
`{ echo hi ; echo bye }`
- This will actually force you to add the last `;` otherwise it will wait for a `}` in a new line 

`()` creates a subshell. Means the command runs in another shell. You get the exit code of the last command, but changes to variables and stuff are not copied to the parent shell. It's obviously slower as well

### Branching

```bash
if list1 ; then
	list2
elif list3 ; then
	list 4
else
	list 4
fi
```

While loops
```bash
v=0
while ! [ $v -eq 5 ] 
do 
	v=$((v+1))
	echo $v
done
# Prints 1-5
```
again, `;` = `\n`
You can use `break` and `continue` as well.

#### For loop
```bash
for var in item1 item2 item3 ... ; do
	echo $var
	if [ $var = "die" ] ; then
		break
	fi
done
```

`seq 0 3` returns a sequence of numbers
> ==Remember WORD SPLITTING!==
> Very important! Basically, seq 0 3 might return
>```bash
>0
>1
>2
>3
>```
>but `echo $(seq 0 3)` returns `0 1 2 3`
>This is because `0\n1\n2\n3\n` is split into words automatically by the shell. To preserve it, we use `""`



### Patterns to match filenames
`*` for any part of a filename. `*.py` means the file ends with `.py`
`?` matches a single character. `??.py` will match files with only 2 character names
`[ace]` matches any of a, c, e for a certain character 
`[0-9]` matches a certain range of digit
`[!0-9]` matches a non-digit

`for i in *.py ; do echo $i ; done`
- `*.py` expands to all files that match. yay
- This doesn't work in `bash` though

```bash
f=$1

case "$f" in 
	*.py)
		echo "$f is in code"
		;;
	*.c | *.sh)
		echo "$f is real code"
	*)
		echo "$f is something else"
esac
```
So yeah you can use the pattern matching thing with case switches as well. 
`exit 1` ends the whole shell script. 
Btw if you do  `( exit 1 )` that will only terminate the child shell 

### getopts
M:nv
- means M has a string arg, n and v are just flags
OPTIND starts at 1. The first ind is for the name of the command of course. 2+ will be actual args. 
`getopts` exits with `1` when there are no more args to read. It will overshoot the # of command-line arguments by 1, though. 
So, use `shift $(($OPTIND - 1))` to make the actual command-line arguments start at `$1`
 (You wouldn't want to make the first `cla` `$0` since `$@` skips `$0`)
```bash
echo BEFORE:
for var in "$@" ; do
	echo $var
done

shift 3

echo AFTER:
for var in "$@" ; do
	echo $var
done
```

```bash
>./test.sh abc def ghi jkl 
BEFORE: 
abc 
def 
ghi 
jkl 
AFTER: 
jkl
```

Another way to go through all arguments. Not super practical though:
```bash
while [ "$1" ] ; do
	echo $1
	shift
done
```

$OPTARG for the string arg if there is one. $myflag is a conventional name for the variable that `getopts` returns. 

```bash
while getopts M:nv myflag ; do
	echo "We're at $OPTIND for $myflag"
	case "$myflag" in
		M)
			echo "Passed 'M' with argument $OPTARG" ;;
		n)
			echo "Passed 'n'" ;;
		v)
			echo "Passed 'v'" ;;
		?)
			exit 1
```

#### Functions
```bash
myfunction() {
	echo $1
	echo $@
	return 21
}

myfunction a b c d e
echo ?$ # This is 21
```
Creates a command of sorts inside your code.
`return` isn't necessary, but it ends your function code (unlike `exit` which kills the entire program)
functions also return everything inside those `{}` just like when doing `{ echo a ; echo b } > outfile`. It returns a $? "exit code"
So `myfunction a b c d e > outfile` would be, like, `a a b c d e`


#### Escaping and Quoting
`echo ’<*; #’`
and
`echo "<*; #"`
are identical in that they don't make characters use their literal meaning.
Also important when doing things like
`[ "$v" '<' "$w" ]` because if the variables substitute with fancy characters, like `<`, for instance, you will get syntax problems

`\` is a special character! 
`echo \\` will only print 1 `\`. Interesting eh?
Well also, consider this:
```bash
v="\\\\" # v=\\ 
echo $v  # v=\ b/c of variable substitution
```
also `echo \\\` does the same thing that `echo bazinga\` does (waits for you to complete the line since you broke it into many lines)
Also `\n` does newline. `\t` does tab
#### dot command
The `.` dot command just inserts another script at the spot. It doesn't spawn a new shell at all. Runs it basically

#### Here document
cat << EOF
file stuff
more file stuff
WOW so much file stuff!
EOF

Basically lets you create a hard-coded file of text. The `<<` thingy is reserved specifically for here documents. 
Also, doing
```bash
cash << 'EOF'
file stuff 
<< >> '' ''' ' $x $x $x
Done
EOF
```
Will send the text literally (no special meanings)

Environment variables have string names and values. All CAPS. It is spawned from the "launcher" via the kernel. Every program copies from the launcher = has the variables. 
`printenv` will literally print the environment variables you have. 
e.g. `printenv USER` is `pate2919`  
- The only difference between these and regular variables is that regular variables are lower case. That is all
To have an environment variable: `export MYENVVAR=foo`
Or you can do `MYENVVAR=foo`, then `export MYENVVAR`

You can do `LC_ALL=C MYNEWENV=foo printenv` to run a program without changing your own variables (i.e. LC_ALL and MYNEWENV will not change outside of this line). This implies that they are environment variables: `x=foo bar` will set the env var of `x=foo`, then call `bar`
#### Local variablesa
`local x y=hello`
- defines a local variable in a function
```bash
myfunc() {
	local x y=hello
	x=hi # Global
	echo $x $y
}
```
Scopes values. 

Then there are bash-related things like arrays:
```bash
people=(kermit piggy fozzie) # items are separted by spaces.
crew[3] = 'sam eagle' # Sets value by index 
```

and "associative arrays"
#todo i might just ignore this considering we barely went over it in lecture. 


#### Process substitution
sort <(cmd1) < (cmd2)
- You can have more than 1 input source!
- It temp stores the outputs to files, then those files get shoved into `sort`
`echo ./test.sh >(cat)`
- This runs `cat ./test.sh` basically
