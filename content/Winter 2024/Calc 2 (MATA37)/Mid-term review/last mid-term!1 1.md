![[Pasted image 20250301131919.png|717]]
False. idrk why
Some functions are integrable and the upper and lowers don't match.
Think of $f(x) = x$ for instance. 
The other way is true though ? Or is it bicond. idk.



![[Pasted image 20250301132042.png]]
False. The right side has a bunch of integrals that depend on f and on on the exact integral. those are 
Uhh it's kinda messed up

> GOOD TIP.
> Just plug in x = 2 or something when do PFD to see if both sides are equal. Makes things nice.


![[Pasted image 20250301132648.png]]
- should be true by ftoc 1 right?!
- Let g(x) = f'(x)
- then $\int g(x) = G(1) - G(0)$.
- it true


cos^2(x) = +cos(2x) cuz it's cos!
sin^2(x) = -cos(2x) cuz it's not cos!

$\int \csc (x)\;dx$ is aids
You gotta multiply by $cscx + cot x$ (that's the "trick")
![[Pasted image 20250301134237.png]]
- Then you do PFD
- Trig sub would literally be us going backwards lol.
# problems
![[Pasted image 20250301140927.png]]
The one of S24
Lowkey forgot how to do this. 

let a, b, c in R and a < b
Suppose f, g are int on [a,b] 
let n \in Z^+ and P = ` `  be a riemann partition of $[a,b]$
Start with right side cuz we have g(x) and f(x) are integrable, but not the difference.
$\int_a^b f(x) - g(x) + c)\;dx$
$\lim \limits_{n\to\infty} \sum_{i=1}^n (f(x_i^*) + g(x_i^*) + c)\Delta x$ by defn of riemann sum
then we use sum properties to split em up
![[Pasted image 20250301141351.png]]
Then we pull out the constants w.r.t. i.
![[Pasted image 20250301141657.png]]
- The below line is true by riemann definition for R parition P
- We pull out c and keep 1; use 
![[Pasted image 20250301141939.png]]
- We get a sum of 1 by pulling out c and delta and then sum of 1 = n so we get the c(b-a) like that. the rest shouldn't be that bad. WIll write nicely later #todo 
- 
- ![[Pasted image 20250301142039.png]]
It screams u-sub 
Divy is smart cuz he choses $u = 1 - e^{2x}$ 
The rest is easy. Note to self: Sub the more problematic things rather than the more common things. 

![[Pasted image 20250301142638.png]]
- aaaaa. 
- We do int by parts yeyeyeye
- u = e^f(x)
- du = e^f(x)f'(x)
- dv = du
- v = u
![[Pasted image 20250301143325.png]]

$xe^{f(x)}|_a^5 - \int xe^{f(x)}f'(x)$  

IBP again
$u = f'(x)e^{f(x)}$
find du yeah
dv_2 = x
v = 1/2x^2

And by the given info you can shove in 1 and things are easy as pie

![[Pasted image 20250301144447.png]]
![[Pasted image 20250301144327.png]]
- WOAH. Instead of choosing $v = 1/2x^2$, we can choose $v = 1/2x^2 +1/2$ and easily cancel out $\frac{1}{1+x^2}$ 
- #todo Try this again and abuse this pretty epic fact. 

![[Pasted image 20250301144724.png]]
- lhopitals rule may come in clutch here.
- The numerator goes to 0 when plugged in
- ![[Pasted image 20250301144902.png]]
- the denominator also goes to 0 when plugged in
- So w can use lhopitals rule cuz indeterminant. We differentiate the top and bottom.
- By FTOC II, the int and diff cancel (FTOC II is for anti-deriv after all. the integrant is cont. cuz $sin(x) + 1 > 0$ on $[0, x] \subseteq \mathbb R$)
	- Specificaly, since 1/t is rational and cont on [0, x], the composition 1/s
	- in(t) is also cont as sin is cont.  or something like that uhhhh
- by FTOC II, f is diff, so $F'(x) = \frac{1}{\sin(t) +5}$ 
- --H-> $\lim_{x\to0} \frac{\frac{1}{sin(t) + 1}}{e^x}$
![[Pasted image 20250301150115.png]]
idek anymore
- Answer is 1/5

# seminar... number... 4
![[Pasted image 20250301152551.png]]
Let F and G be anti-derivatives of f and g. 
We start with the rhs (cuz more info; we don't know if f(x) + g(x) is integrable anyway)
$\int f(x)\;dx + 3\int g(x)\;dx$
$= F(x) + C_1 + 3(G(x) + C_2)$ by FTOC 1
$F(x) + 3G(x) + C_1 + 3C_2$
Let C = C_1 + 3C_2.
$=F(x) + 3G(x) + C$ for an arbitrary C as the sum of arbitrary numbers are arbitrary.
By observation, $F(x) + 3G(x)$ is the antiderivative of $f(x) + 3g(x)$. We can confirm this since $(F(x) + 3G(x))' = f(x) +3g(x)$


![[Pasted image 20250301153201.png]]
Choose $\Delta x = 1/n$
Then $b-a = 1$ 
Choose a = 4
Then b - 4 = 1 ==> b = 5
Let $f(x) = 7\sqrt{x}$
So we got $\int_a^b f(x)\;dx$ by riemann definition yayay
a = 4 and b = 5 and g(x) = 7x^0.5 
$\int_4^5 7\sqrt x\;dx$
$(7 \frac{3}{2}\sqrt x^{3/2}) |_4^5$

Then evaluate and u good
(I did forget to take the anti-derivative frick.)

More justification better. eli5


![[Pasted image 20250301154705.png]]


![[Pasted image 20250301161333.png]]
- The formulation should be 
- $\exists \epsilon < 0, \forall P partitions on [a,b], U(f,P) - L(f,P) < \epsilon$

![[Pasted image 20250301161842.png]]

![[Pasted image 20250301163035.png]]
#todo This is probably what PFD should look like roughly. 
![[Pasted image 20250301164711.png]]
- It might be useful to seperate the integrals and evaulate via observation like this (?) nah too much work. Would do in 1 step on a test.

![[Pasted image 20250301165049.png]]
- Observe how we split x+6 into x+1 and 5
- makes future things easier 

![[Pasted image 20250301171517.png]]
![[Pasted image 20250301171142.png]]
- We show it's continuous.
- Then we split via union interval property (specify that $c$ is in the interval WLOG)
![[Pasted image 20250301171437.png]]
- boom final answer. #todo You should attempt this


![[Pasted image 20250301171557.png]]
Also should #todo 
- idea is to diff both sides. So we use FTOC II
- Let $g(u) = \frac{f(u)}{u^2}$. Notice g is a quotient function. 
	- the numerator f(u) is cont by defn
	- the denom u^2 is a polynomial. Since the denom != 0, u != 0 (why? idk)
	- So g(u) is cont on $(0, \infty) \cap (-\infty, 0) \cup (0, \infty)$. uuhhhh
	- So g(u) is cont on $[d,x]\subseteq abv$
- Now we apply FTOC 2. Let $G(x) = \int_d^x g(u)\;dx$ be an area accumulation function.
- Then we diff both sides
![[Pasted image 20250301172047.png]]
![[Pasted image 20250301172230.png]]
- it's d=9 btw.
#todo MVT for integrals

let a, b, \in R where a < b
IF f is cont on [a,b]
then $\exists c \in (a,b)$ s.t. $\int_a^b f(x)\;dx = f(c)(b-a)$
i.e. $f(c) = \frac1 {b-a} f_a^b f(x)\;dx$
The area divided by the length gives the height. At one point, the height of f(x) should pass f(c). That just makes sense.


![[Pasted image 20250301174026.png]]
1. False. BUT WHAT IS A TRAPEZOIDAL APPROXIMATION
	1. Let f(x)=g(x) = sqrt(x). which is concave down
	2. ![[Pasted image 20250301174343.png|253]]
	3. erm trapizoids ? kathleen wouldn't say anything like this
2. false. g(x) = 0. Then f(x) could be the Dirichlet function!
3. True ? Just show the thingy is odd and it'll work out.
4. True
5. idk but does it even matter idk.