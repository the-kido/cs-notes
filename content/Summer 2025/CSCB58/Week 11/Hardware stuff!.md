I/O!
You can either do memory-mapped IO or isolated I/O
And to deal with transfers, you can have interrupt-driven, or polling
With memory-mapped IO, 1 address space is divided into RAM and registers in I/O devices. A memory controller devices whether to send to RAM or device registers. *write to control a device and read to get data or device status*

With polling, you read from mapped control reg until it sets the Ready bit. 
Processor loads from input / writes to output mapped Data Reg.

Interrupts are another way (not polling). A special signal goes to CPU to stop it from what it's doing and does the handler routine instead (does stuff, then returns to OG code)
Exceptions are interrupts that come from the CPU (program error or on purpose!)
A "trap" is an exception by `syscall` (deliberate, not an error).
Used to send system calls to the OS!

Interrupt handlers are like functions that MUST not cause an error and save/restore *all* registers. It determines the cause and handles. Returns to OG code


MIPS uses polled handling (unrelated to above polling). CPU branches to "some" generic handler code for *all* exceptions. Handler checks course of exception and branches to specific code depending on type of exception. 

Vectored Handling (think tables) assigns id to each device. Address goes to specific interrupt handler.  Interrupt type X makes CPU get address from row X. Goes to the associated handler address

![[Vectored Handling.png]]

In MIPS, we poll. Jump to exception handler code based on value of "cause register".

The operating system controls all your hardware!