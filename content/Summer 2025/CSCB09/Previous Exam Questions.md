1. 3 "his" (ignores . dot files)
2. 0 hi's 
3. empty, "hey\n" but then broken pipe, so actually just empty. 
4. The issue is the "wait". If many children die in succession, then only 1 will be waited for (considering signals cannot be stacked -- it's either there or not). So you would have to call "wait" in a loop until there are no more children #todo I didn't know how to answer this!
5. 
```c
void handler(int sig) { 
	if (sig == SIGCHLD) { 
		int orig_errno = errno; 
		int ws; 
		pid_t c; 
		while ((c = waitpid(-1, &ws, WNOHANG)) > 0) { 
			if (n_waited < N) { 
				departed[n_waited].id = c; 
				departed[n_waited].ws = ws; 
				n_waited++; 
			} 
		} 
		errno = orig_errno; 
	} 
}
```
#todo Go over this non-sense

2. a
Time to BASH
```bash

src=""
dst=""
cmd=""

while getopts s:t:c: flag ; do
	case "$flag" in
		s)
			s=$OPTARG
			;;
		t)
			t=$OPTARG
			;;
		c)
			s=$OPTARG
			;;
		?)
			exit 1
			;;
	esac
done

shift $((OPTIND - 1))

for file in "$@" ; do
	base=$(basename "$file" "$src")

	if [ -e "$file$src" ] ; then
		if ! [ -e "$file$dst" ] || [ $file$src -nt $file$dst ] ; then
			eval "$command $file$src"
		fi
	fi

done

```

#goes-in-exam-sheet the command that let's you run commands as strings: EVAL

3. Trisolar Society

First we read the root. We while loop. We keep going left or right until we find the place to put the node. When we do, we seek back to the start, override it with new data. 
Then we seek to the end and write the new node data. Easy as pie.

```c
typedef struct node {
	char email[100]; // NUL-terminated
	long left, right; // child file position, or -1L if none
} node;

void insert(FILE *f, long root, const char *email) {
	node toAdd;
	strcpy(toAdd.email, email);
	toAdd.left = -1L;
	toAdd.right = -1L;

	fseek(f, 0, SEEK_END);
	long endPos = ftell(f);
	fwrite(&toAdd, sizeof(node), 1, f);
	// Okay now we go through the list until we find the node this should go to
	// When -1, we replace it with the right guy.
	// If not, we keep searching!
	fseek(f, 0, SEEK_SET);
	long posAt = root;
	
	while (posAt != -1L)
	{
		node nodeAt;
		fseek(f, posAt, SEEK_SET);
		fread(&nodeAt, sizeof(node), 1, f);

		if (strcmp(email) > nodeAt.email)
		{
			posAt = nodeAt.right;
			if (posAt == -1)
			{
				// Then we write!
				nodeAt.right = endPos;
				fwrite(&nodeAt, sizeof(node), 1, f);
				break;
			}			
		} else { 
			posAt = nodeAt.left;
			// same as above 
		}

	}
}

```


4. Modularisation question
a)
complex.h : nothing
3-5
12 ;

complex.c : complex.h
12-16

list.h : complex.h 
6-8
17 ; 

list.c : \#include complex.h, list.h
17-24

array.h 

array.c

main.c

okay i get it



a) you just copy-paste. You can also do the thing i will shove into exam cheat sheet 

5. 
`ln -s homework/input.txt easy`
- First arg is where it goes to. Second is where x?
#goes-in-exam-sheet

homework
- input.txt "inside"
- hard --> ../input.txt "outside"
- easy --> ../input.txt "INSIDE"
input.txt "outside"
hard --> input.txt "inside"
easy --> homework/input.txt "inside"

#goes-in-exam-sheet `ln -s`'s arg for "where it goes" is RELATIVE TO WHERE THE SOFTLINK IS! So `ln -s input.txt homework/easy` refers to "input.txt" relative to `homework/easy`, which is the one in the same dir!

1. PD (hard link goes to file w/o perms)
2. "inside" is printed
3. Hard will print "inside" since it's readable. Doesn't go thru directory
4. Easy will be PD
5. PD cuz homework not accessible
6. hard is the same (inside)
7. easy is doable cuz executable (inside)
8. homework/hard doesn't work since homework is not readable
	1. Nvm it's allowed. i don't get read perms for dirs i guess
	2. It ONLY disallows you from listing the contents of a file. You can still go through it.
9. hard still works (inside)
10. easy throws file no exist error
11. hard prints abc
12. easy prints abc
13. hard is broken
14. easy works



The aids question
a)
```c
for (int i = 0; i < n; i++)
{
	pipe(fanout[i]);
	pipe(fanin[i]);
}
```

b) 
fanout connects broadcaster to filter
fanin connects filter to collector
n+2 processes cuz broadcaster and collector also exist

I think the 

c) 
#goes-in-exam-sheet Fork-exec pattern. Very common.
We create a pipe to communicate between processes.
We fork.
If we're the parent, we wait.  (close write end)
If we're the child, we execute, then write into the write end of the pipe (close read end)
Parent reads result 
```c
for (int i = 0; i < n; i++)
{
	int pid = fork();
	if (pid == 0)
	{
		// Child
		dup2(fanout[i][0], STDIN_FILENO); // The pipe's "IN" goes into "STDIN"
		// Same with out. WHy? I REALLY DON'T KNOW
		// Close all pipes in child since we don't need them anymore
		// for loop yeah
		// Then w e run execlop with the program, which replaces the program entirely. If it doesn't run, well that's an error!
	}
	
}

```
