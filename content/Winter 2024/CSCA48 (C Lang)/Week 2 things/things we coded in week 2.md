```c

int is_prime(int num)
{
    if (num <= 1) return 0;
    
    for (int i = 0; i < num; i++)
    {
        for (int j = 0; j < num; j++)
        {
            // There "are" factors so it is NOT prime
            if (i * j == num) return 0;
        }
    }
    return 1;
}
```

#todo try implementing division with a for loop using subtraction/addition

```c
int int_division(int x, int y)
{
	int ans = 0;
	while (x - y >= 0)
	{
		ans++;
		x -= y;
	}
	return ans;
}
```
So you could try defining division by x, y or modulus (x, y)

# Memory yay
Locker rooms
[[Understanding Memory]]

## storing text n stuf

characters are a big table from 1 --> 255. ascii yay. 

When doing `c = func('V')` and func finishes, whatever it's returned value is COPIED, not just pointed to. 

The question i asked on piazza:
integers can be chars, signed or unsigned. 
- The number [1001010] doesn't say anything abt how it should be interpreted. Sometimes we want it to represent negative numbers too. So, if you want to use the same string for positive and negative, it's split evenly (4 bits for even, 4 bits for odd)
	- wait then wouldn't a byte go from -8 to 7? Why is it -128 to 127?
	- I would think 8 bits signed would be 1, 2, 4, 8, 16, 32, 64, 128 = 255.
	- Oh so they just shift the numbers by doing 255 - 128 ish. How does that look in binary? am kinda curious #todo.
- 
		- 
- unsigned would use all 8 bits for the positive. okay that much i knew

`unsigned char c`; will NOT do the loopy thingy whereas `char c`; WILL. WHATT

The organization of integers in memory as bits is deliberate
- 2's complement arithmetic. 



if an int is int i = 123456789 and we turn it into a char, it will only look at the *first* byte (considering ints use 4 bytes) to interpret the int. That means when you go from int i = 255 to i = 256, the binary looks kinda like this:
000....011111111 --> 000.....100000000. So the first int will take the first byte of 11111111 = 255 and the second will take 00000000 = 0.
That's why they loop
```c
int fake_char = 0;
while(1)
{
	printf("%c", fake_char++);
	
}
```

In python you have
```python
x = 5
y = 5
```
we were told the memory model "optimizes" and makes these guys share the same box for 5. That is totally wrong AS I THOUGHT.


### memroy thigns again
```c
int main(void){
	int x = 5;
	int y = x;
	return 0
}
// What does this look like in memory?
```
There are three boxes
1. 271: int (x)
2. 272: int (y)
3. 273: int (\<return>)
The line y = x copies the value from x.


The last example we got (i took a photo)
Boxes:
---main
1516: x: 7: int 
1517: z: 3.1: float
1518: \<return>: Junk: int
---DoubleX
1519: x: 7: int
1520: y: 7: int
--Back to main
(x is still 7, z is still 3.1)

#todo Why is return allocated right after the variables. 
What if we have this:
main{
	int x  = 10;
	some_call();
	x = function_call();
	int y = 20;	
}
What would this look like? Can I make an example and attempt it, then show it at an office hour?

