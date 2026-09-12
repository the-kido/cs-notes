"telescoping series" technique.
when u got 
(1+2+3+4+5) - (2+3+4+5+6) = 1 - 6
cuz the middle elements get cancelled out.

More specifically, it's a sum where the general term $t_n$ is in the form of $a_k - a_{k-1}$ where $t_k$ and $a_k$ are real-valued functions. 
$$\sum_{k=n}^m (a_{k+1} - a_{k}) = a_{m+1} - a_n$$
$$\sum_{k=n}^m (a_{k} - a_{k+1}) = a_n - a_{m+1}$$
# Form of telescoping series
Usually looks like this:
$$a_n = f(x) - f(x+1)$$


# <span class="cards">Cards</span> #calc2-2 
What is Telescoping Series?
?
If a sum is subtracted by a sum that's offset, the the numbers that are in common will be cancelled and the leftovers are subtracted.

Prove that $\sum_{k=n}^m (a_{k+1} - a_{k}) = a_{m+1} - a_n$
?
$$
\begin{align*}
\sum_{k=n}^m (a_{k+1} - a_{k}) &= \sum_{k=n}^m a_{k+1} - \sum_{k=n}^m a_{k} \text{ by sum rules} \\ 
&= \sum_{k=n}^{m-1} a_{k+1} + a_{m+1} - (\sum_{k=n+1}^m a_{k} + a_n) \text{ by split sum rule x2 and const sum formula} \\
&=  a_{m+1} - a_n + \sum_{k=n}^{m-1} a_{k+1} - \sum_{k=n+1}^m a_{k} + a_n \text{ by algebra} \\
&=  a_{m+1} - a_n + \sum_{k=n+1}^{m} a_{k} - \sum_{k=n+1}^m a_{k} + a_n \text{ by equivalent sums}\\
&= a_{m+1} - a_n \text{ by algebra}
\end{align*}
$$
Boombazinga.


