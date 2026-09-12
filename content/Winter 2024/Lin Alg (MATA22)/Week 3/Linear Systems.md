>[!defn] Linear Systems
>A linear system is a system of n equations in k variables $x_1, x_2, \dots x_k$ of the following form:
>$$
>\begin{cases}
> a_{11}x_1 + a_{12}x_2 + \dots + a_{1k}x_k &=&& b_1 \\
> a_{21}x_1 + a_{22}x_2 + \dots + a_{2k}x_k &=&&b_2 \\
> &\vdotswithin{\. } \notag \\
> a_{n1}x_1 + a_{n2}x_2 + \dots + a_{nk}x_k &= &&b_n \\
\end{cases}
>$$
>
>The entries $a_{ij}$ are coefficients and the values $b_j$ are constants.
>A solution of the systems is $(x_1, x_2, \dots, x_n) \in F^k$ that makes all equations true simultaneously. 
>Two systems are equivalent if they have the same set of solutions.
>> [!example] Equivalent Systems
>> $$
>> \begin{cases}
>> 1x_1 + 5x_5 &= 6 \\
 1x_1 + 1x_2 &= 2
\end{cases}
 \text{ and } 
>> \begin{cases}
 1x_1 + 1x_2 &= 2\\
>> 1x_1 + 5x_5 &= 6
\end{cases}
\text{  are equivalent.}
>> $$
> These are equivalent b/c it's just a rearrangement of the rows. 
- Expanding the vectors and adding them together, we see that each component has its own solutions. the "piecewise" notation just exemplifies that.
	- Idk what i meant by this but it sounds important!





# <span class="cards">Cards</span> #linalg-3 

What does it mean for a system to be dependent / independent / inconsistent?
?
It means the solution depends on some variable. i.e. there are infinite solutions, since the solution is a variable. 
That is why independent (not dependent on a variable) systems only have 1 solution.
Inconsistent systems don't have any solution. There is some issue with it somewhere somehow.
