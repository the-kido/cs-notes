 Intermediate value theorem my beloved

The idea is that if there's a point where the function is negative, and another where it's positive, it must cross the axis since the function is continuous 

<span class="definition">The Intermediate Value Theorem (IVT)</span>
> If $f$ is a continuous function on the closed interval $[a,b]$ and N is any number strictly between f(a) and f(b), <span class="emphasis">then</span> there exists a number $c \in (a,b)$ such that f(c) = N
- The interval for c is open since N is only between f(a) and f(b), but never equal to it. So if c = a or c = b, in both cases $f(a \text{ or } b) = N$, which ISN'T possible.

>[!example] Is there a real number exactly 1 less than its cube?
>Basically asking if x = x^3 - 1 has a solution.
>Let f(x) = x^3 - x - 1.
>The function f(x) is continuous (cuz it's a polynomial)
>Observe f(1) = -1 < 0 and f(2) = 5 > 0
>We take a = 1, b = 2, and N = 0 in the IVT
>Since f(x) is continuous on the closed interval $[1,2]$ and N = 0 is between f(a) and f(b), by IVT, there is a number c in $(1, 2)$ such that $f(c) = 0$
>This number c satisfies c^3 - c - 1 = 0

^ I referenced 7b slides for this.

- The values between f(a) and f(b) are intermediate values (N). c is a point between a and b. 
- The conclusion states that the function crosses the line made by y = N
- Between isn't very formal. "Strictly" between means you do NOT include a or b in the interval. 
- ![[Pasted image 20241029153758.png]]
	- Between $(a, f(a))$ and $(b, f(b))$, a point $(c, N)$ will ALWAYS exist in between, no matter how funky the function is. Remember that $f(c)=N$ if the IVT does hold. 
	
>[!check] Proof
>This is aids.
### Bisection Method
- If you have a function and keep finding the midpoint, you will eventually get to a point where the midpoint is equal to c. 
	- You could also possibly find the exact solution. (like the midpoint of 3 and 1 has f(2) = 0! Wow so convenient! No estimation required!)

the fancy symbol us uses for the proof is "gamma"
# Cards 
Let S be a bounded set of real numbers and suppose that sup(S) = inf(s). What can you conclude about S?
?
$S = \{sup(s)\} = \{inf(s)\}$
