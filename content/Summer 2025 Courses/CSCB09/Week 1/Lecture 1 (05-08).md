The cheat sheet can be any font so long as it's letter sized / A4

grace credits exist okok



NO AI (NOT EVEN FOR GENERAL QUESTIONS) (whaaaa)
- yeah for my own safety its best i just dont use ai for b09 at all

good question = good answer 



MathLab is where we'll run code and it will be the GOTO for confirming something actually works

# okay teaching time (the intro slides)
note: some of the slides dont have al the infos (i.e. slide 3)
- Oh nvm just scroll down more lol
- linux is used for this course (unix-descendent) for simplicity
- 


Unix is super old, but it has great ideas!
unix >>> unless we're talking abt gaming


watch the ~5 minute mark where the guy talks abt "chaining" programs

"the OS fakes file-like interfaces for all I/O sources + destinations (including peripherals and piplining)"
- What does this mean
- he says we'll "put it into practice"; "we'll get there"

Unix is very terse and it sucks

We are expected to use libraries we've never used before (the point is to show if we have the skill to use unix and by reading documentation we should know how it should work!!!!)

=="Learn by playing"== 
- Read the Survival Tips slide #todo 


+---++---++

+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+---



#todo wouldn't VSCode work like MathLab in that it sort of "simulates" linux or is it not the same thing?

# Pipelining And Redirection slide

we know printf sends "something" and it gets to the terminal somehow

the OS "accepts keys, decides if it wants to send the key to the terminal, etc"
- the only reason printf shows anything is because the OS "intercepts" this data and knows what to do w/ it. 
- albert is very very hard to understand 😔


so i think alll programs have access to these guys: `stdin`, `stdout`, and `stderr`  


you can have many "instances" of programs. Unix is a "multi-user" platform that runs instances at the same time that are isolate. 
![[Pasted image 20250508162313.png]]
- Shows the "abstracting" that the OS does 
- so it's what actually reads the keyboards input, and what shows the result in the terminal.

> `sort` takes in a bunch of words. To now when to submit the list of words you use `ctrl+D`

#todo Play with `uniq`

He then makes a `foo.txt` with the content
```
albert
albert
alber
bob
bob
charlie
```
how do we make the OS use the file ?

`uniq < foo.txt`

This is called "input insertion/intercepting!?" (bruh i can barely understand the man)

This prints out
```
albert
bob
charlie
```
Which is great, but how do we store this output somewhere else?

We use an "output redirection" via `>`

`uniq < foo.txt > bar.txt`
- This would take the output from `uniq < foo.txt` and return the output into `bar.txt`


`cat` displays the content of a file
so running `cat bar.txt` will print
```
albert
bob
charlie
```



Now we have the file `random.txt` w/ the content

```
robert
bob 
robert 
will
bob
bob
will
albert
robert
albert
will
```

Calling `sort < foo.txt` would print the sorted contents!
Since `uniq` requires a sorted input, how can we print only the unique names from foo.txt? like so:

`sort < random.txt | uniq`
- the `|` is a "pipe" which makes sense when you know this process of using `|` is called "pipelining"
and again, if we dont want the output to go to the screen and instead to a file, we use `sort < sort < random.txt | uniq > bar.txt`

(if the file doesn't already exist, it will just create the file)


there is another syntax because why not:
`< random.txt sort | uniq > bar.txt`


What does this do?
`sort < random.txt > random.txt`

Before running "sort" (or ANY program) the shell will be like "okay, u wanna read from `random.txt`, i'll open it for reading. Oh, but you also want to open this file for writing, so i will erase the content of the file for you lol"
- so "sort" will be sorting an empty file. How else can we know the file is empty? Running `ls -l` will not only print every file in a directory, but also the size; the size will be 0 bytes.


running programs like `x | y | z` will "chain" the outputs.
- The output of x becomes the input of y, and the output of y becomes the input of z. Then z will just output whatever it has to the console considering we are not redirecting the output to a file.
- This means the `|`  operator expect anything right of it to be a program name

"why do we have two output channels: stdout and stderr"?
- If we send both stdout and stderr outputs to the same channel, programs won't really know how to "sort" between actual outputs and errors. So two channels lets programs know what kind of input to expect

Directory tree model!
`/` = root
Oh the tree is "partial" and there are WAYY more thingys.
- like we dont just have `ls` and `sh` programs lol

## Path(name)s
`/home/trebla/B09/lec1.txt` goes from the **root** to a subfolder to another one; you get the idea
`B09/lec1.txt` uses the *local directory*

`pwd` gives your current directory

`..` refers to the "before" parent directory

`.` helps you refer to the current directory ? #todo see why  this is useful
- Oh, pretend you're in `/home/kido/filesToSort` and you want to call a program `sort-files` which takes in a directory. Well instead of typing out the whole path from home, we can just do `sort-files ./` I think. #todo confirmmm
- 

