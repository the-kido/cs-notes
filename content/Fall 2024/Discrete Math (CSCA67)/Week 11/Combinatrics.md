r = total
n = number of items we are interested in.

| Type               | Repetition Allowed? | Formula                       | Alternative                            |
| ------------------ | ------------------- | ----------------------------- | -------------------------------------- |
| r-permutations     | No                  | $\frac{n!}{(n-r)!}$           | $P(n,r)$                               |
| r-combinations<br> | No                  | $\frac{n!}{r!(n-r)!}$         | $C(n,r)$                               |
| r-permutations<br> | Yes                 | $n^r$                         | $P(n, n)$                              |
| r-combinations<br> | Yes                 | $\frac{((n+r-1)!)}{r!(n-1)!}$ | $C(n + r - 1, r) = C(n + r -1, n - 1)$ |

# Types of Problems
### Star-bar problems
Can be found in pdf page 40 of [this subsection of the textbook](https://www.utsc.utoronto.ca/~atafliovich/csca67/lectures/week10/rosen_counting.pdf)

This deals with `Combinations w/ Repetition`
>[!note] Intuition
>Nope

>[!example] Pretend there are 7 bills (g $1 bills, $2 bills, $5 bills, $10 bills, $20 bills, $50 bills, and $100 bills). How many ways can you select 5 bills? Order doesn't matter and repetition is possible.
>The n = 7 and the r = 5. We can use the 3rd formula of C(n + r - 1, n - 1) to get C(11, 6). Of course, C(11, 5) also works!
>

>[!example] How many solutions does the equation $x_1 + x_2 + x_3 = 11$ have? 
>This translates to "selecting 11 from a set of 3 elements" where x_1, x_2, and x_3 types of items to be chosen. Repetition is allowed, so we use the formula C(n+r-1, n) again to get C(13, 11) solutions 



## indistinguishable objects (cannot tell diff between items.)
> like the SUCCESS example

P with indistinguishable objects --> $\frac{n!}{repeated_{1}\cdot repeated_{2}!\cdot\dots}$
The notation is $P(n; n_1, n_2, \dots, n_k)$

Another approach:
- From the 7 positions, we choose 3 positions
- and from the 4 positions, we choose 2 positions
- and from the 2 positions, we choose 1 position
- and from the 1 position, we choose 1 position
- and that also equals `7! / (2!*3!)`

