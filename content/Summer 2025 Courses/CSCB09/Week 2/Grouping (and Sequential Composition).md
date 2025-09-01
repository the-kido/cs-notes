> `{}` and `()`

Calling commands through **Sequential Composition** like in `echo hi ; ls -l ; cd .... ;` is NOT grouping; each command is run one at a time and only the last one's output is most recent  

`{ echo hi ; echo hello ; echo bye! ; }`
- Calls the 3 commands and *groups* their outputs.
- However calling the 3 commands would look, in order, in the output is what its output is.  (in our case, 3 separate lines for hi, hello, bye)
You can also do this:
```sh
{ 
echo hi
echo hello } # note this } is counted towards the argument of "echo"
echo bye ; } > out.txt # The semicolon separates the lines; this } definitely ends the thingy. We also redirect the group to out.txt, so it will have:
> hi
> hello }
> bye
# inside of the file, literally
```
#goes-in-cheat-sheet-DONE
Or anything else similar 

## Subshells
Like `{}` except `()` is run in a *totally new shell instance*. The only thing that can be passed from `()` into our world is the exit code of the last command
```sh
( mkdir temporaryFolder ; ) # This will exit 0 first, then 1 when it already exists

( mkdir temporaryFolder ; echo hi! ) # This will exit 0 every time, since echo almost always works and it is the last run command!
```