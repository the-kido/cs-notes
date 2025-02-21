# Mod
Since modulus is usually done with integers, to do modulus with floats we use `fmod` instead (it takes two floats and returns their modulus).
> It is inside of `math.h`
#### A weird example
```c
printf("%0.20lf\n", fmod(14.4, 1.2));
printf("%f", fmod(1440000000000, 1.2));
// It's 
```
In the above example, both prints should be 0 since `144 % 12 = 0` . But... it's not!? 
>`0.00000000000000088818
>`0.000053`

are the outputs we get, and this is caused by floating point imprecision.
## What is that
Essentially, floats only have so much memory each, so it uses fancy techniques to get as accurate of a value as possible without representing each digit outside of its range. 

>[!note] Floats do a balancing act between the int and rational components. if the int part is very large, it'll have no more storage to deal with decimals. effectively it's like it becomes an integer.

This is what causes that imprecision. 