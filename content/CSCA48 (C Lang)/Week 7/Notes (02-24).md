This half of the course things start to get crunchy
# Efficiency!!11

we think runtime, but it has limitations when thinking abt effiency.
1. It's hardware dependent (other pc's might do an algo faster/slower)
2. Other things may be running and change the speed
3. Specific tests will change the time
4. Programming language
You cannot do `time a.out` on windows :(

We want a measure of efficiency that is independent of hardware and implementation
- Lines of code is no good, since different lines may be dramatically faster/slower than other ones.

We have to define a "unit of work" for any algo

e.g: insert at tail
Pseudocode:
1. Start at head
2. ==check if current node is tail
	1. This is the unit of work (and it's abstract; different languages can implement it differently)
3. if not, go to next node

Formally, we say computational complexity when talking about efficiency
- For a given algorithm (i.e. a set number of steps) or operation, we want to find how much work (which we define) is done for "N" data items.
- It is represented by Big O notation.
	- There is also Big $\Omega$ and Big $\Theta$ which we did in cs50 yeyey


To say an algorithm has a big O complexity "g(N)" means that if we were to measure the work done by the algorithm as "f(N)" (the runtime). This means $f(N) \leq c \cdot  g(N)$ for LARGE values of N, where c is positive and real constant. 
 - If the N is small, then the difference will be tiny. Almost any algorithm will be done basically instantly.

What does this mean? wellll

Let's say big O is O(N). That means g(N) = N. The line cg(N) will always be larger than f(N)
- I think the $c$ is a coefficient depending on how the implementation is made (?)

Let's say f(N) grows exponentially but we choose O(N) such that g(N) = N. Eventually f(N) will be larger than g(N), which means the equation doesn't hold, so we do not have the right big ) complexity

$\exists c, \forall N \geq 0, f(N) \leq c\cdot g(N)$
- is that right.

If we overshoot the big O such that it always is above f(N) it won't mean anything useful cuz you'll overshoot the complexity.

#todo Read the notes for unit 4
