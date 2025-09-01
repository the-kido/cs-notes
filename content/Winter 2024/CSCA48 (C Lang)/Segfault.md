```c
char* w3;
strcpy(w3, "I love the colour green!");
```
You cannot copy the string into `w3` because not enough memory is allocated to it for it to store the word. 

Any access of illegal memory will cause a Segfault!
This is MOST often when you 
- Index outside of bounds
- Set data that's larger than the amount of memory allocated (like the above example)

What is illegal memory? Memory you don't have permission to, or is being utilized by another program. If you try to change memory allocated by another program, things won't be pretty.
- Essentially, if you access memory you aren't supposed to have (by reading it or writing into it) you will get a segfault. If you simply have a pointer to an illegal address, nothing will happen.

![[Pasted image 20250221200207.png]]
- This is from a past mid-term, and on line 24