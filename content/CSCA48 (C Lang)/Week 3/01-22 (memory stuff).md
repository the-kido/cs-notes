square root thingy. My guess:

Main
1. (no params)
2. int a in main
3. int b in main
4. `<return>` for main = 0
5. (calling pythangoras) 
	1. double a = 1.0 for a
	2. double b = 1.0 for b
	3. double c (empty)
	4. `<return>` = 0
	5. (Now c gets square root:) 
		1. double x = (2.0)
		2. double guess = 0.0
		3. double up 
		4. double down
		5. double mid
		6. `<return>`  = 0

pacos:
Main:
- a: int = junk
- b: int = junk
- `<return>`: int = junk
Pythagoras:
- a: double = 1.0
- b: double = 1.0
- c: double = junk
- `<return>`: double = junk (then 0)
Sqrt:
- x: double = 2.0
- guess: double = 0.0
- up: double = junk
- dn: double = junk
- mid: double = junk
- `<return>`: double = junk (then 0)



where do intermediate expressions live? In the CPU!
i.e., when calling `square_root((a*a + b*b))`, the expression `a*a + b*b` is evaluated and stored in the cpu.



let guess be the sqrt.
mid is prolly the average of up and dn.
use a for loop 

we keep looping while the imprecision is too big
we start guess at 0.
We keep increasing it by the midpoint between the up and dn
If the `guess*guess` is too big, then up = `guess*guess` 
if guess times guess is too small, then down = guess times guess
then we let guess = mid point and repeat.


```c
char one_string[10];
printf("String: %s", one_string);
```
The above can print 1000 characters or 0 characters. it's all luck when the print eventually hits a delimiter 

```c
void p1(void)
{
	char s1[10];
	printf("%s\n", s1);
}
void p2(void)
{
	char two_string[10];
	two_string[0] = 'T';
	two_string[1] = 'W';
	two_string[2] = 'O';
	two_string[3] = '!';
	two_string[4] = '\n';
	two_string[5] = 0;
	printf("%s\n", s2);
}

void main(void)
{
	p2();
	p1();
	// This prints Two!\b twice
}
```
#todo explain this better.  basically it prints `TWO! ` twice because the memory is freed from the previous call and is junk, but is then taken by s1 and it so happens to be the values set in p2.
- This is not always bound to happen. it's merely a coincidence. On my computer, it usually happens though.
Then if you reserve a string of size 100, there is a good chance that `TWO! ` is in there. 
Remember that the places where memory is stored is often quite random. For instance, if you:
1. Store 100 '+' signs in a char array of size 100 in one function
2. Store `TWO! ` in another function.
3. Print 100 random characters
You might see the `TWO! ` at the start, near the center, really anywhere the computer can find that's convenient.
