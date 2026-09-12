strong induction lets you use previously proven base cases instead of being restricted to 1 with simple induction

Going from P(97) to P(100) is far easier than going from P(99) to P(100)

If we go by the logic that you can easily know that 100 is possible if 97 is possible, then...
...
P(n-6) --> P(n-3)
P(n-5) --> P(n-2)
P(n-4) --> P(n-1)
P(n-3) --> P(n)

P(12), P(13), and P(14) become a part of the base case. Everything afterwards is provable by these 3
- incrementing by 1 = 1 base case
- incrementing by 2 = 2 base cases
- etc. 
