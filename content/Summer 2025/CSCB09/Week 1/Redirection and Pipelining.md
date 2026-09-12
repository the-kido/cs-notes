# Redirection with `<`
Used like `command < file`. Normally commands like `cat` will use the file of "stdin" (one of your [[I O Streams|I/O Streams]]!) when run as just `cat` and nothing else.
But if you want to pass another file, you do `cat < file.txt` or something like that.

Also `cat 0< file.txt` explicitly shows that 0 (stdio) is what we are shoving the file into

```
2> errors.log   # redirect stderr (fd 2) to a file
1> output.log   # redirect stdout (fd 1)
0< input.txt    # redirect stdin
```

# Redirection with `>` 
Takes the output (by default, stdin) and redirects it to another file. 
Used like `command -options all the args > out.txt`

## Redirecting with I/O streams 
If you *specifically want* stderr to go to a file, or `stdio` to output to stderr instead, you do this:
`echo "hihihi" 1>&2` 
Now `"hihihi"` is sent to `stderr`. The `&2` represents the address of stderr's file. 
That `1` is optional since by default we redirect from `stdin` anyway
### Redirection is NOT ordered!

You can do this:
`echo "hi!" >&2 > out.txt`
- This will just take the oldest redirection, `> out.txt`, and ignore `>&2`.

### What if I want to dump an output into nowhere?

Simple! Redirect into `/dev/null`

`echo "garbage sentence" > /dev/null` 

# Piping
- Is done *concurrently* with the program. I.e. as soon as something is outputted in the first command, it is piped into the second command
# Appending with >>

Sends output to a file by adding *onto* of the file 

### Other misc things
#goes-in-cheat-sheet-DONE All that is below 
`command > output.txt 2> error.txt`
- Redirects *two streams* : stdin and stderr!
`{ echo hello ; exit 1; echo world ; } > out.txt`
- This only prints `hello`. Why? Redirection happens first! First, the line will be like "kay, we are redirecting" and whatever output is outputted will be redirected. If we exit, well frick the program is dead! But we were redirecting happily before `exit` was ever called
- The pipe operator *technically* does this too. BUT, for most commands, the pipe operator WAITS for the previous commands to be finished before it can store anything into the next command. 
	- Counterexample: `yes nonono | head --lines=42`

 `sort < random.txt > random.txt`
 - First, we know all stdin is going into sort, and all stdout is going into random.txt
 - Since we are outputting into random.txt and *not* appending, we *open for writing*. What this does is clears the contents of random.txt
	 - However this happens *before* anything else runs. So `sort` sorts nothing and, yeah, rip.
