Gosh it's the same stuff
### 1.
#### a)

$$T(n) = \begin{cases}
1 & \text{n = 1}\\n + 
\max\{T(\lfloor n / 2 \rfloor), T(\lceil n/2 \rceil) \} &n > 1
\end{cases}$$
Consolidate the branches with constant work at a fixed condition, and the ones with... not constant work with a range condition

#### b)
When $n$ is a power of 2. $n=2^k$ for some $k$

Then $$T(n) = \begin{cases}
1 & \text{n = 1}\\n + 
T( n / 2 ) &n > 1
\end{cases}$$
Wow isn't that clean


#### c)
> Mistake: There is only 1 recursive call. Not 2

Sizes: $2^k, 2^{k-1}, \dots, 1$
RTT: `+2^kx1, +2^k-1x1, ..., +1x1`
num-nodes: `1, 2, 2^2, ..., 2^k`
time: `+2^k, +2^k-1, +2^k-2, ...., +1`

It's just a line

#### d)
$2^k$ nodes becomes 1 at the end... uh? It's always 1 leaf???

Is the monomial $0$?
Because # of leaves = 1 = n^0

Top heavy for sure.

#### e)
$r = 1/2$. Just unroll twice

#### f)
$T(n) \in \Theta(n)$
Work done is same as input size



### 2.
The first two cases are 1 work
the "else" case is n^2 work in the loop, and there are two recursive calls
- 0 -> n//3
- and n - (n - n//3)
	- = n // 3
	- so the other call is also floor(n/3)
Easy peasy.


Rest im not doing cuz easy

