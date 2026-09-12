# The Linux Programming Interface
## 2.1 to 2.7 

#### 2.1
The "operating system" usually has two meanings:
1. The "entirety" of the package that is controlling your computer's resources alongside the standard software tools you need like CLI's, GUI's, file utilities, you get the idea.
	1. By this definition, Windows, Linux, and MacOS are "operating systems"
2. Simply the central software that manages computer resources (which would be the CPU, RAM, peripheral devices, etc.)

Based on the second definition, the *kernel* is synonymous to the "operating system". 
> You don't NEED a kernel to run programs, but it does simplify things / increases power and flexibility for the programmer. 
> - The kernel provides a *software layer* to manage resources.
> - The kernel is an executable and it lives inside of `/boot/vmlinuz` 
> 	- Since the kernel itself is a program, that clearly means "programs" don't need the kernel. Otherwise that would contradict that the kernel is a program. lol.

### Things the kernel does
1. Process scheduling
	1. Computers have several CPU's. 
	2. Linux is a *preemptive multitasking* operating system (similar to other UNIX systems). 
		1. Multitasking = multiple processes can live in memory and each can get some use of the CPU.
		2. Preemptive = The *kernel process scheduler* is what determines what processes receive use of the CPU, and NOT the programs themselves
2. Memory Management
	1. The kernel shares RAM to processes in smart ways ("equally and efficiently")
	2. Like other OS's, Linux uses *virtual memory management*. This has 2 benefits:
		1. Processes are *isolated* from each other AND from the kernel, so the process cannot read / modify memory of another process or the kernel
			1. yeah that would be a huge security issue
		2. Only "part" of a process needs to be kept in memory ( #todo how does this work?!) so it lowers the memory requirements of processes = more processes can be held in RAM. This supposedly leads to better CPU utilisation since there is a higher chance there are more processes for the CPU to execute.
3. Provision of a file system
	1. The kernel gives you a file system on disk to create, manipulate, and access files.
4. Creation and termination of processes
	1. The kernel is what loads programs into memory, giving it the required resources needed to run. 
		1. All instances of a running program are *processes*
	2. Then when the process is done, the kernel also deals with freeing the resources used so other programs can use them next!
5. Access to devices
	1. The kernel gives an interface that standardises access to peripheral devices.
	2. It also "arbitrates" (great use of that word like wow that is satisfying i might be crazy but arbitrates just feels so powerful here i hope no one reads this also what is punctuation ive never heard of it) the access of each device over the several running processes.
6. Networking
	1. The kernel is what transmits and receives network messages (packets) on behalf of user processes. 
	2. "Networking" includes *routing* of network packets to "the target system" #todo !?!?
7. Provision of a system call API
	1. Processes can request the kernel to run *system calls*.
		1. System calls are "kernel entry points"
		2. Talked more about in Section 3.1
#### Kernel Mode and User Mode
Modern CPU architectures allow the CPU to operate in two different "modes": user mode and kernel mode (or supervisor mode)
- Kernel mode is a super set of User mode privileges; kernel mode lets you do everything you can in user mode.
- There are hardware instructions that let you switch between these modes
Areas of "virtual memory" (the RAM thing from before) can be marked as *user space* or *kernel space*
The CPU can only access memory in kernel space within kernel mode. However the user space is accessible in both modes. 

Some kernel mode operations include:
- The "halt" instruction to stop the system
- Access memory-management hardware
- Initiating device I/O operations
- etc.

#### Processes vs Kernel POV's of the system
E.g of a process's POV:
- Many things happen asynchronously.
- A process doesn't know when it will happen again, or what other processes are scheduled for the CPU 
> The delivery of signals and inter-process communication are mediated by the kernel and can happen at any time. 
- It doesn't know where it is in RAM, or where on a disk the files it's reading are. 
- It's in complete isolation! No direct communication with other processes.
- It also cannot do kernel things like create new processes or end its own existence (dang)
- It also cannot directly access input and output devices 
#todo Does the kernel sort of disallow the execution of another kernel? Like, for the above, what if the program we're talking about *is another kernel program*. In that case, it *could* do all the things a kernel do (although i still can't see the things the *other* kernel is messing around with)

The kernel's POV is the opposite: It sees and controls all of those things.

> When we "do" call a process from another process, like when piping, note that it's the kernel that is actually mediating those actions!

## 2.2 The Shell
> A program that reads commands typed by the user and executes appropriate programs accordingly. 
> Also known as a *command interpreter*

- The *login shell* is the process that is created to run a shell when the user first logs in.
	- In some OS's, the command interpreter is integral to the kernel. On UNIX, it's just another user process. As such, there are a bunch of shells!
		- #todo idk if i need to know these but on page 25 there are a billion examples
## 2.3 Users and Groups
#### Users
- Have a unique login name (username) and user ID (UID).
	- For each user, these are defined by a line in the system password file, `/etc/passwd` which also includes:
		- Group ID
			- The ground the user is a member of
		- The home directory
			- Where the user is placed after logging in
		- Login shell
			- The name of the program to be executed to interpret user commands
			- #todo What about linux with distros that have GUI's? Is this `passwd` file hijacked to instead determine what the "profile" of a user is to determine the desktop or something like that?
#### Groups
- For admin purposes (specifically for controlling access to files / other system resources), it's useful to organise users into groups.
- Similar to before, instead of `/etc/group`, we have the following info per line:
	- Group name (this is unique)
	- Group ID (GID) (the number associated w/ the group)
	- User list
		- A list of login names separated by commas
#### Superuser
- A special kind of user with special privileges. 
- Its user ID is 0 with the login name *root* normally

## 2.4 Single Directory Hierarchy, Directories, Links, and Files
- Unlike windows where each disk device has its own hierarchy, in UNIX it's all under the root directory `/`, so all files are decedents of the root!

#### File types
- Each file is marked with a type.
	- "one of them" denote "ordinary data files" usually called *regular* or *plain* files.

#### Directories + Links
- A directory is a special kind of file. Its content is a table of filenames matched with "references" ( #todo What is a reference) to the corresponding file. This filename-and-reference association is called a link.
	- That would make directories an array of links!
	- Of course, a link can also link a filename to another directory.
- Each directory has at least two entries: `.` and `..`
	- `.` is a link to the directory itself, and `..` is a link to the parent directory
	- Every directory (except the root) as a parent directory `..`
		- So in the case of the root, `..` refers to itself (so `/..` is equivalent to `/`)

#### Symbolic links


Normal links: a pointer to a whole file associated with a file name
Symbolic links: a pointer to a pathname for the file (this file is the *target*) associated with a file name. 

a.k.a hard links and soft links.

- Whereas normal links are filename-pointer links, symbolic links have a filename-pointer entry where the file referred to by the pointer contains a *string* that names another file.
	- !?!?!?
	- The file pointed to is called the *target* of a symbolic link. 
	- It's common to say a symbolic link "points" to the target file.

When a pathname is specified in a system call, usually the kernel automatically dereferences each symbolic link in the pathname, replacing it with the filename to which it points. This may happen recursively when the symbolic link is itself a symbolic link. 
If a symbolic link doesn't refer to a file / the file doesn't exist, then it is *dangling* (like how you can have dangling pointers)

#### Filenames
Files can be up to 255 characters long. 
They can have any character except `/` and `\0`.
SUSv3 = portable filename character set. 

#### Pathnames
Strings. Usually has `/`'s in them separating a bunch of filenames. The last filename can either be any kind of file (including directories). Evertyhing before it is the directory. `..` refers to the parent filename

Can either be given as an *absolute pathname* or *relative pathname*
- *Absolute pathname*: the path w.r.t the root `/`. So the path starts with `/`
- *Relative pathname*: does not start with `/`. The path is relative to the working directory. 

#### Current working directory
- Every process has a current working directory (aka the process's working directory or current directory) which represents the "current location" in the hierarchy.
	- The login shell might have its initial working directory set to `/` or something like that. You can change the directory with `cd`
#todo When it says this, i'm thinking of processes like Firefox or something - does Firefox have a working directory? Or is it talking about programs like `sort` which are run in the shell (and for it to take in files via relative pathnames makes *sense*).

#### File ownership + permission
- Every file has an associated user ID and group ID. This defines where the file belongs.
- When talking about accessing files, the system divides users into three categories:
	1. *owner*: The owner of the file (or the *user* of the file)
	2.  *group:* users who are members of the group associated with the file 
	3. *other*: the rest of the world
- "there are 3 permission bits for each of these categories, making 9 permission bits in total" #todo what the frick does this mean
	- Oh a bit is 0's and 1's right? so that means the bit represents a boolean true/false type deal.
	- The 3 kinds of permissions are:
		1. read permission
		2. write permission
		3. execute permission lets you "execute" the file (so the file is either a program or a script)
	- The 3 permissions can also be set for directories but it's slightly different. 
		1. read: contents of the directory can be listed (e.g. the filenames)
		2. write: contents of the directory can be changed (e.g. add or remove filenames)
		3. execute: allows access to files within the directory (but again, these children files also have their own permissions too!)
#### File I/O Model
UNIX has a concept called *universality of I/O*. The system calls `open(), read(), write(), close(), etc.` are used to perform I/O on ALL types of files (including devices!)
> (The kernel translates the application’s I/O requests into appropriate file-system or device-driver operations that perform I/O on the target file or device.) #todo WHAT DOES THIS MEAN

The kernel basically gives 1 file type. It's a "sequential stream of bytes" which (for disk files, disks, tape devices, etc. ) can be randomly accessed using `lseek()`
#todo what is random access?

the newline character `\n` (ASCII code 10 decimal) is used to terminate one line and starting another. 

#### File Descriptors
The I/O system calls refer to open files using a *file descriptor*. This is (usually small) non-negative integer and is obtained usually by calling `open()`, which takes a pathname for which file we want to perform I/O on. 

Usually, a process "inherits" ( #todo inherent how?) 3 open file descriptions when run by the shell: Descriptor 
- 0 is *standard input* (the file the process writes its output)
- 1 is *standard output* (the file the process takes its input)
- 2 is *standard error* (the file the process writes an error message)
In the `stdio` library, these descriptions correspond to `stdin`, `stdout`, and `stderr`

#### The `stdio` library
In `c`, I/O functions (things like `printf(), fgets(), etc.`) are layered on top of the I/O system calls we discussed before (`open(), close(), etc`)


## 2.6 Programs
Programs exist as *source code* and *binary machine-language instructions*
- This is different from a script, which is a text file with commands to be run by a program (like the shell or another command interpreter)

#### Filters
- A kind of program that reads its input from *stdin* and does something to the input and writes it to *stdout*
- Examples are:
	- sort
	- cat
	- grep
	- sed
	- etc.

#### Command-line arguments
Yknow how in C the main looks like this: `int main(int argc, char *argv[])`? These represent the command-line args and the # of them.
Used to get extra info from the user for the program to act on.

## 2.7 Processes
> An instance of an executing program

When programs are executed, the kernel loads the  program into virtual memory and allocates space yayaya aswell as process ID, termination status, user ID, group IDs, etc. etc.

The kernel is what shares resources of the computer between processes. 

#### Process memory layout
- A process is logically divided into these "segments"
	- Text (instructions of the program)
	- Data (static variables used)
	- Heap (area where memory is dynamically stored)
	- Stack (grows and shrinks as functions are called and returned)
#### Process creation / execution
Using the `fork()` system call we can start new processes. The process that calls `fork()` is the *parent process* where the new process is the *child process*.

> The kernel creates the child process by making a duplicate of the 32 Chapter 2 parent process. The child inherits copies of the parent’s data, stack, and heap segments, which it may then modify independently of the parent’s copies. (The program text, which is placed in memory marked as read-only, is shared by the two processes.)
#todo this cant be real. Is there a big difference between apps like chrome and filter programs

`execve()` is a system call that loads and executes an entirely new program, destroying any existing text / data / etc (FROM WHERE?) with new segments

okay this textbook is getting on my nerves 

also *exec* = `execve()`

#### PID's are process identifiers. Each process also has a parent process identifier (PPID)

#### Termination
`_exit()` or `exit()` terminates a program and yields a ternimation status to tell parent processes the program is donzo

#### Credentials
Each process has:
- Real user ID and real group ID 
	- identifies who the process belongs to
- Effective user / group ID
	- determines what kind of permissions the process has when doing system things like file i/o
- Supplementary group ID: additional groups to which the process belongs (??)

#### Privileged processes = processes run by le superuser

#### Capabilities
- Privileges = a set of capabilities
- Each privileged operation is associated a capability
- Processes can perform an operation only if it has the capability


#### The `init` process
"The parent of all processes" created by the kernel during booting up. Using `fork()`, all processes on the system are created by *init* or one of its children.

Can't be killed by anyone (not even the superuser). Only killed when shutting down.

#### Daemon processes
> A special process that is long-lived and runs in the background.

examples include `syslogd` which records the system log.


#### Environment list
- Each process has an environment list which is full of environment variables.
- Each element has a name and associated value
- Parent process env. vars are inherited to child processes
- `export` command creates them.
Used to share useful data with processes. 

#### Resource limits
Using `setrlimit()`, a process can set limits on consumption of resources
- there is a "soft" limit (limits the amount of resources a processes can use) and a "hard" limit (the ceiling on the value the soft limit can get to).
- Unprivileged processes might change its soft limit to the hard limit, but the hard limit can only be decreased.
- `ulimit` is the command (`limit` in the C shell) to adjust these limits. 


This is inherited by children processes



# The Linux Command Line
## 1-4 (except links), and 6 




## 5.3, 6, and 20 for week 2's lab


## 16.3 for SSH
