```c
char* w3;
strcpy(w3, "I love the colour green!");
```
You cannot copy the string into `w3` because not enough memory is allocated to it for it to store the word. 

Any access of illegal memory will cause a Segfault!
This is MOST often when you 
- Index outside of bounds
- Set data that's larger than the amount of memory allocated (like the above example)

