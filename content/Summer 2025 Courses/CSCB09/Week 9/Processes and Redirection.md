`pid_t fork(void);` clones current process. Copies memory, global vars, stack, heap, env vars. Current directory, file descriptor table, execution state.... actually everything holy.
PID is process ID. Original!

> When the *parent* runs fork(), it can return any number !=-1 and !=0 (the ID of the child process). If you're the child process and run the same fork(), then it will return 0!
> 
> Note, when calling fork(), both your process and the child process start doing the stuff the line *right after*. It doesn't start the program again. Holy heck!!!!


`execlp(path, arg0, arg1, ..., (char*)NULL)`
- Used to switch to running *another* program via one of the "exec" system calls (there's a family of them!)
- Erases and replaces code/data on current thingy. Preserves PID, env vars, directory, file descriptor table, etc. 
- ***Used for file redirecting / pipelining***
	- I would have to fork the program, and then `execlp` the program to replace it!
`fork` is the only way to launch new processes. All processes except *one* have parents.
- The kernel boots the *first* process with PID 1. Known as `init`. It launches system processes
	- Logic screens for instance.

List processes via
- ps
- pgrep
- top
- htop
Commands to end process
- `kill`
- `pkill` (find like `pgrep`, then `kill`)

`pid_t wait(int *wstatus);`
- `wstatus` is for the child's exit code + why it died (killed)
- "To wait for a child, or don't 'hang waiting'"
- `pid_t waitpid(pid_t pid, int *wstatus, int options);`
	- pid > 0 = wait for child
	- pid = -1 wait for *any* child.
	- options = WNOHANG (don't "hang waiting". Use 0 otherwise)
There are "useful macros" but lowkey just #todo this is bouncing off of me
left off at slide 6
- We went over these in lab 11. They are pretty cool but I don't think are relevant for us


## how 2 file redirect
First, remember what that even is lol. File redirection sends the fd of one file to another one. For instance, we can redirect '2' (stdout) into a file "err.txt" such that everything written into stdout instead is shoved there!
 1. Open the file you wanna redirect to
 2. Fork it! 
	 1. Just like when calling `echo hi!` you fork! The shell is the program that is forked, remember that! That means if we want to file redirect, the parent will have to create a fork to replace w/ a program.
	 2. The parent should close the `fd` for `err.txt` considering it won't need it (unlike the children, who do)
 3. In the parent, close the file descriptor
 4. In the child, dup2 the file descriptor with the one you wanna override
	 1. Also in the child, run the program via `exec` 

Think of `dup2(fd_inp, 0);` like the first one "replacing" the second one.

## Pipes
`int pipe(int pipefd[2]);`
- `pipefd[0]` is the FD for reading; `pipefd[1]` is the FD for writing

#### Hygiene
- You should close FDs as *soon* as you aren't using them.

>FD = File descriptor in most cases!



Thinking time

uniq -c <(sort -r violinists.txt)

Main process:
- Calls child process to run `uniq -c /dev/fd/5`
- Main process