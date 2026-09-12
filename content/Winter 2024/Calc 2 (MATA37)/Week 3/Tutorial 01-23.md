if u drop someing 2m abv the ground, how long did it take to hit the ground?
v = 0 initally.
acceleration = 9.8m/s^2
t is what we are solving

distance = velocity `*` time 
v(t) = 9.8 `*` t


integrating v(t) gives the distance moved
s
##### 
functions you integrate don't need to be continuous
- "finite disconts = you can integrate it"
#####

Given an interval [a, b] and f is int. on [a,b]. Suppose $\forall x \in [a, b], f(x) \geq 0$. Then $\int_a^b f(x) dx \geq 0$
(he repeats what the question already gives... curious)
Proof
let a, b in r, a<b. let f be int. on [a,b].
Let $n \in Z^+$
Suppose f(x) \geq 0 \forall x \in [a,b]
Let P = $\set{x_i}_{i=0}^n$ be a Riemann partition of [a,b]
Let $i \in Z$ s.t. $1 \leq i < n$
Then $f(x_i^*) \geq 0$ as x_i^* \in [a,b] and f is non-negative on [a,b].
So $f(x_i^*)\cdot \Delta x \geq 0$ as $\Delta x = \frac{b-a}{n} > 0$
 $\implies \sum^n_{i=1} f(x_i^*) \Delta x \geq 0$ as sum of non-negative is non-negative
(limits preserves inequalities) #todo 
$\implies \lim \limits_{x\to \infty} \sum^n_{i=1}f(x_i^*)\Delta x \geq 0$
$\implies \int_a^b f(x)dx \geq 0$ by Riemann def of integral. 

> So for these integral inequality questions, you go from f > 0, to delta f > 0 to sum > 0 to int > 0.
> Every step preserves the inequality

### cool properties
If $f$ is odd, then
$\int_{-c}^c f(x) dx = 0$

To know if a function is odd, look at all factors. sin is odd and e^x^2 is even. product of odd and even function is odd. prod of odd and odd is even? Indeed it is.

#todo attempt the proof for the above when i have time

##### 
#todo for the reverse engineering questions make sure to create a riemann partition (it is important)
tips 
- U can choose a = 0 and b = 1 and still have the thingy work out. everything will just go into the function and it *will work*.

I like this question
Given $\int_{-2}^3 g(x) dx = 2$ and 
Given $\int_3^6 g(x) dx = 3$
What is $\int (g(x) + x) dx$?
Ans:
Split the integral via linearity of integrals.


#todo prove that $\int_a^b x\,dx(b^2 - a^2)$ for $a, b \in  R, a < b$
