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

- Whereas normal links are filename-pointer links, symbolic links have a filename-pointer entry where the file referred to by the pointer contains a *string* that names another file.
	- !?!?!?
	- The file pointed to is called the *target* of a symbolic link. 
	- It's common to say a symbolic link "points" to the target file.
- 



# The Linux Command Line
## 1-4 (except links), and 6 




## 5.3, 6, and 20 for week 2's lab


## 16.3 for SSH
