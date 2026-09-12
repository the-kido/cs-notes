Extreme value theorem:
![[Pasted image 20241114084251.png]]
- It has to be closed similar to why maximums and minimums only exist in closed intervals. Yes, a *supremum or infimum* might exist on an open interval (a,b), but max and mins cannot be an arbitrary point "close" to a or b. Imagine a straight line  y = x with the interval (1,2). The max and min cannot be 1 and 2 since the interval only includes ~1.000001 and ~1.999999. Arbitrary values!

Also "A function can only change sign at roots and discontinuities"
- using the intermediate value theorem and finding the x-cord, we can see if a function ever goes negative, for instance.

Left and right continuity
- A function f is left continuous at x = c if $\lim \limits_{x \to c^-} f(x) = f(c)$ and right continuous for $c^+$ instead. Note the point we're going to must also be defined! I.e f(c) cannot be a hole for a function to be left/right continuous at c.
- A point cannot have a left/right continuity if there is any discontinuity (i.e. a hole).
	- if f(x) is right continuous at x = -2 and f(-2) = 4, then there is no way there could be a hole at f(-2)
- sqrt function is a good example of a fuction that is only one-sided continous

# TB Problems:
Section 1.4
1
- False <span class="emphasis">(T)</span>
- True
- False (0, 5) is problem?
- True. EVT. <span class="emphasis">(F)</span>
	- #todo why does EVT not work on open intervals?
	- I get it now
- False. if continuous, then yes.
- False
- True
- False
5
- 
7
- what would f(1) have to be for this to be continuous? f(1) = 0 (cuz that's where the hole is)
9
- Hole / Removeable
11
- Jump
13
f is continuous at x = c if $\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } |x-c| < \delta \implies |f(x) - c| < \epsilon$ 
- main diff is that the delta part of the condition is not a punctured interval. 
- Another way of writing the intervals is 
	- |x-c| < delta
	- -delta < x -c < delta
	- c - delta < x < c + delta
	- $x \in (c - \delta, c + \delta)$
	- #todo just remember how to use interval notation (whatever is the element -- in this case x -- must be in the center and the rest is obvious)
15
- $\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } 0 < x - c < \delta \implies |f(x) - c| < \epsilon$ 
- #todo is 13 and 15 right or did mike teach us something else? Review this.
25
- (-inf to -1), (-1, 1] (1, inf)
- hole at -1 and infinity at 1
	- One-sided continuity on the left of 1
	- #todo this is a good question
27
- if it's left cotninuous and right continuous, then the continuity is there you silly goober
29
- ez
31
- Cannot exist since right continuity exists at x = -2 so f(-2) cannot be a hole.
43
- ez
81
- Easiest limit proof of my life
83
- General formula is given in [[Continuity#(Self-contained) Definition of Continuous]]. The rest is light work (just use triangle inequality)
89
- #todo try again
91
- maybe do if time.
93
- do if time.
Section 1.5
- We did NOT go over composition rule #todo  (unless we did...)
- indeterminate = more work must be done!
- Squeeze #todo
	- Go over the proof for squeeze theorem
	- Go over sin and cos x = 0 proof
- $\lim \limits_{h \to 0} \frac{1 - e^h}{h} = 1$
- Use squeeze to find x^2 sin(1/x)
	- -1 < sin(1/x) < 1 by def'n of sin
	- -x^2 < x^2sin(1/x) < x^2 by algebra!
	- x^2 is continuous! So by squeeze theorem we have (0)^2 = 0. Easy peasy. 
21
- Limits are only determined by how a function approaches c, not what happens *at* c.
23
- #todo review
27
- 72
29
- -1
79
- -x < xsin(1/x) < x
- lim(-x) = lim(x) = 0
- bazinga! #todo how to explain properly tho
83
- Replace a = x-1 and then do math. easy peasy
89
- Use constant multiple rule, power rule, and sum rule.


## Week 6
Section 1.5 again!?
31
- <span class="emphasis">These questions have a bunch of solving-limits </span>
- 4
39
- 4/7
41
- 0
43 (speedrun)
- 3
47
- 0 (you just split them into multiples and do some simple algebra cuz power functions are continuous)
51 
- 1/3 is WRONG. I forgot to update the limit from x -> 0 to a -> 1
- 1/4 is RIGHT.
55
-  0 via remarkable limit
61
- 2/pi
	- YO I'M CRACKED.
	- It's just replace the arcsin with the lim and evaluate. 
75
- Removeable discont. at x = 1
- No one-sided limits
- Continuous on -inf to 1 and from 1 to inf

## Week 7
61
- Interval \[-3, -2]. By IVT, we know that -15 is in the middle of -29 and -10 somewhere.
	- -3 = -29
	- -2 = -10
	- -2.5 = -15ish
	- 
73
- Can only change at discontinuities and when x  = 0 (roots)
- Jump discont at x = 2 so that's 1 fo sure
- $x^3$ switches between -1 and 1, so there's a root there too.
- otherwise it's just simple sign table stuff.... idk why this was given to us....
- pos on (0, 2]. neg on (-inf, 2)U(2,inf)
- #todo redo this in case
80
- going from pos to neg implies that we pass the x axis, therefore there is a place where y = 0 and consequently a root. boom.
- f(0) = -2
- f(2) = 2
- There is a root between 0 and 2 for sure.
87
- cases:
- A > 0 
	- as lim x --> inf, f(x) = inf and as lim x --> -inf, f(x) = -inf. SO there's a place somewhere!
- A < 0
	- Same thing.
- A == 0 not possible otherwise it's not cubic. 


PSET 8
#### Section 2.1
1
- True
- True
- No ??
- False (if const and positive)
- True (decreasing)
- True
- True (please)
- True
3
- the tb says "it's cuz you need more than 1 point" so yeah.
9
- No
11
- no
19
- The slides show it good enough

23
- No
25
- ez
27
- No
29
- NO
31
- 
33, 
35
- Just graph and then boom. 
- Answer is like nothing it's trivial
58
- math
#### Section 2.2
Leibniz notation #todo
1
- False Where the limit at
- False. Nuh huh
- False if you factor out the negative
	- #todo make sure you remember the 2 derivative definitions  I keep forgetting them for some reaosn. 
- False. bad algebra
- Stop
- False. Cusp. If they both exist, they shoudl also be = 
- Not continuous --> not diff 
	- diff --> cont. True.
7 
- what is this getting at. it just evaluates the limit and derivative thingy and that's all huh....
- 
9
- is differentiable *and* continuous since diff --> cont

11
- It is not differentiable at x = 0. Why is it continuous tho #todo 
15
- Again, make sure to go over liebniz notation. you gotta write df/dx hmmm.

19
- $\forall \epsilon > 0, \exists \delta > 0 \text{ s.t. } |x-0| < \delta \implies |f(x) - f'(c)| < \epsilon$

23 (speedrun)
- -6 cuz deriv is 2x 
29
- ez
31
- 2 / (x+3)^2 
33
- e^x still lol
35
-  ermmmm ik it's 1 buttt. Is lim x --> 0 sinx / x a remarkable limit or #todo
39
- -4x
41
- $3x^2$
43
- -2 / (x+1)^2
45
- skipped cuz easy
49
- 1 / sqrt(2x+1)
53
- Annoying but doable. forgot you can just remove the h's after the bottom h is gone.
57
- ez
63
- y = -x + 5
65
- eazsy
67
- left cont. at -1
- right diff at -1 too
69
- no
71
- just use one-sided differentiation or something
73
- 
77
- not differentiable because of the oscillating
78
79
- removable / not continuous and not differentiable. 
	- remember, diff --> cont so not cont --> not diff. obviously...
80
- idk
93
- nah
97
- #todo might be kinda relavent!
#### Section 2.3
1
- T
- F
- T
- T (F) - chain rune is suck.
- F
- T
- T
- Sure...
3
- no
5
- a
7
- exponent must be constant
9
- We learned this in mowatts remember? You just shift the `'` every time
11
- 5
13
- 8
19
- Cusp.
21
- #todo a lot of math indeed.
27
- no
33
- Good job krish
37
- no
41
- no
45
- no
55
- NO
57
- Easy
61
- n
63
- n
67
- #todo again in the future for funzies
- #todo write notes for splitting absolutes into piecewise.
69
- #todo if jump at a point, it will not be differentiable there (i.e. DNE)
75
- n
77
- n
85
- nahhh maybeee if i have time #todo
87
- easy
89
- Easy
91
- No.
#### Section 2.4
1
- T
- F
- F
- F
- T
- T ? Function??
- True... Circle
- F ?! #todo Why is this false.
- 
7
- n
9
- n
11
- n
15
- n
23
- n
35
- n
39
- n
49
- Just derivative twice
51
- same as above
88
- what the that was so easy.
#### Section 2.6
3
- Uhhh
5
- Interesting .....




# PSET Questions

### PSET 5

5.1 Just b no? Let's try applying the hypothesis!
1. We already have the first hypothesis assumed
2. 
a) the left is 1/3 and right is also 1/3
c) the left is 1/3 and the right is also 1/3
b) the left is 1/2 but the right is 1. They are not equal. The hypothesis does not pass so conclusion no pass!

5.2 ✨
a)
For some L there is a d such that g f h exist on (a, inf). If
1. g(x) <= f(x) <= h(x) for x > a
2. $\lim \limits_{x \to \infty} g(x) = \lim \limits_{x \to \infty} h(x) = L$
Then $\lim \limits_{x \to \infty} f(x) = L$

Proof of the above definition. (meaning we assume the assumptions)

WTS forall epsilon > 0, exists N > 0 such that x > N => |f(x) - L| < epsilon
Let epsilon be arb yay.
Before choosing N we require setup.
- By assumption 2 we have 
	- forall epsilon_1 > 0, exists N_1 > 0 such that x > N_1 => |g(x) - L| < epsilon_1
	- forall epsilon_2 > 0, exists N_2 > 0 such that x > N_2 => |h(x) - L| < epsilon_2
- Let eps_1 = e
- Let eps_2 = e
- Then there's N_1 > 0 and N_2 > 0.
- Obs: 


b)
#todo later



5.3
forall epsilon, exists delta such that |x - c| < delta --> |sin(x) - sin(c)| < epsilon
Mostly easy. The trig id was annoying but |sinx| <= |x| <span class="emphasis">is IMPORTANT!</span> #todo 

5.4
Yay an easy question

5.5 ✨
- Make sure you don't just plug in 0 and instead do left and right limits and make them equal. Also remember that $\lim \limits_{x \to 0} \frac{\sin x}{x} = 1$ #todo find the other 4 as well. 

5.6
If a function is continuous we can plug in the limit into the function only if it's safe i.e. no indeterminate 
Also remember this?
- $(a-b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$
- Yeah this applies here too lol
### PSET 6

6.1
a) 1
b) 1/54
c) sqrt2 / 3 (RIGHT)
d) -sqrt2 / 3
e) Tricky but you gotta use the remarkable limits. Otherwise it's actually not bad
f) 1/4 i was overcomplicating this like crazy.

6.2
a) Easy
b) max = sup = 1
min = inf = 0
c) max = sup = 1
no inf or min 
bounded above, not below.
Bounded tho
d) 
sup = 1. No max
Otherwise same as above.
e)
sup = 1 no max
inf = 0 no min
bounded yes. abv and below. 

f) 
![[Pasted image 20241115123751.png]] #todo I do not get it✨✨✨

Defo do this again.
- Okay i got it. I have two cases: n is odd and n is even
- Odd means 1 - -1/1 and 1 - -1/3 and 1- -1/5 etc.
- Even means 1- 1/2 and 1- 1/4 and 1 - 1/6
	- The lowest of these is 0.5 and the max is 2.... i am braindead.

6.3
- It's actually really easy. We assume there are two M's such that $\forall x \in S, x \leq M_1$ and $M_2$. With that, we have $M_1 \leq M_2$ *and* $M_2 \leq M_1$ which implies that $M_1 = M_2$ meaning they are not unique. Therefore they gotta be unique!
6.4

Minimum:
For nonempty set S, M is the minimum if
1. $M \in S$
2. $\forall x \in S, M \leq x$

Lower bound:
$\mathscr{l}$ is a lower bound of S if:
- $\forall x \in S, \mathscr{l} \leq x$

Infimum:
Infimum a exists in set S if
- a is a lower bound of S and
- if $\mathscr{l}$ is a lower bound of S, then $a \geq \mathscr{l}$

S is bounded below if it has at least 1 lower bound 

S is bounded if it is bounded both above and below.

6.5
Because $x \in S$, we know that $x \leq \sup (S)$.
Because $x$ is an upper bound, we know that $\sup (S) \leq x$
Therefore, $x = \sup(S)$ 

6.6
- I'll get back to it✨

6.7  ✨
- Completeness property: if there exists an upper bound, then there exists a supremum. 
- It's mostly obvious logic:
	- Since we have A is non-empty, then B is non-empty cuz that's how subsets work.
	- We have a x in A. This means that x in B too because subset. 
	- Since B is bounded above, there is forall x in B, x <= sup(B)
		- This means that B sup(B) is an upper bound for A (x in A in B and B is bounded)
		- So A is bounded above just like B. By completeness property, sup(A) also exists.
	- Finally, since sup(A) is THE least upper bound, and since sup(B) is *some* upper bound of A, then sup(A) <= sup(B).
6.8 ✨
- By def'n of supremum, we needa show that for some supremum s, that
	1. s is an upper bound
	2. if b is an upper bound of B, then $s \leq b$
1. So much things going on it's overwhelming honestly
	
### PSET 7
7.1 
- Quite relaxing

7.2
- Actually not bad. Will get back to tho.

7.3
- Same as assignment. Quite easy.

7.4
- This one is easier with cases. You gotta make the c rational or irrational, and then set x to irrational or rational respectively via density. You'll get the same |f(x) - f(c)| >= 1/2 , contradicting that |f(x) - f(c)| < e. 
7.5 
- Same as 7.4 or 7.3 but make it 1 and -1. ye.

7.6
- (0) - 0 + 1 = 1 for x = 0 but (1)^3 - 5 + 1 = -3. Since f(x) is continuous on \[0,1] since it's a polynomial, this means that there is a c such that f(c) = 0 by IVT. Therefore, c is the root. 

Using bisection, we can see that f(1/2) = -11/8  < 0, so the root is betwee \[0, 1/2]
F(1/4) = -15/64 < 0, so the root is between \[0, 1/4]
f(1/8) = 193 / 512 > 0, so the root is between \[1/8, 1/4].

7.7

(getting numbers down):
2: -8 + 6 + 1 = -1
1: 1 + 3 + 1 = 5
0: 1
1: 1 - 3 + 1 = -1
2: 8 - 6 + 1 = 3

We can see that the function alternates between negative and positive 3 times
- From 2 to 1
- From 0 to 1 
- From 1 to 2
Meaning by IVT, since polynomials are continuous, we know that there is a c_1 in (2,1) such that f(c_1) = 0, and the same for (0,1) and (1,2) (not writing that all down).
Note that c_1 c_2 and c_3 are unique such that -2 < c_1 < c_2 < c_3 < 2.

So, on the interval there are 3 roots c_1 c_2 and c_3.
### PSET 8
8.1 
- easy
8.2

Known limit: 
- $\lim \limits_{h \to 0} \frac{\cos h - 1}{h} = 0$
- The rest is easy peasy.

#todo prove IVT and density and don't worry about boundedness....

# TT2 practice tests

![[Pasted image 20241115230049.png]]
	- When asked to prove that f is differentiable, we just needa show that the limit given by the def'n of derivative exists! Don't overthink it.