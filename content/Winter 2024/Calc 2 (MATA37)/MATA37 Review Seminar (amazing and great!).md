![[Pasted image 20250414160055.png]]

![[Pasted image 20250414160423.png]]
 
a) False, cuz the function could be constant
- Watch out for swapping quantifiers like $\geq \to >$ which changes the meaning of a statement!
b) False, cuz $c = 0$
The questrion was like, showing $\set{a_n}$ goes to some number $\pi$, the sequence diverges
c) T by div test. OOPS THIS IS A SEQUENCE NOT A SEREIS
![[Pasted image 20250414160855.png]]
d) Oscellating sequences (-1)^n
e) True!
-  This is a maclaurin series where $a = 0$ and $c_n = thing$ u know
- The center is 0!
- The radius must be AT LEAST 4
- So if $x=3$, the series should converge!
- Not sure about the (-1)^n thing though. Like, if we know $c_n3^n$ converges, and we multiply by $(-1)^n$, then will it still con verge?
	- Ohh $(-1)^n\cdot (-3)^n = (-3)^nC_n$
	- and x is STILL in the radius no matter what!
![[Pasted image 20250414161505.png]]
- NOTE, if x converges at 4, it does NOT mean it converges at $-4$ #todo HOLY
![[Pasted image 20250414161631.png]]
f) FALSE. I ACTUALLY KNOW THE ANSWER TO THISSSS

g) <span class="emphasis">false</span>. oscillating, wait no. True. Should be true cuz my defn the sequence's limit exists. Thats all we need to satisfy
- mb am blind. this is a sequence question :p
- In that case t he series could be $\frac 1 x$ for $x \geq 1$ cuz n is natural.
- $1/x$ IS bounded. Above by 1 and below by 0. This is defo false!
- Does the sequence even have to be bounded to converge? #todo
![[Pasted image 20250414162425.png]]
h) FTOC II might help cuz decreasing = derivative. 
She says $y' = F'(-2x)(-2) = f(-2x)(-2)$ and that derivative is negative. 
$\frac{4x^2}{4x^2+2}(-2) < 0$. Increasing only!

#todo chain rule?s
Ans: TRUE

i) Looks odd, so this is <span class="emphasis">True</span>
![[Pasted image 20250414163404.png]]
j) defo false. you can definitely figure out some function that has the same area.
- Even consider the taylor series. That approximates functions, right!?
- All <span class="emphasis">conditionally convergent</span> series don't really have a sum. All we know is that we can rearrange it so that it does? #todo When did we even go over that.
	- Okay, for all CC, we can rearrange them and *the sum will change!* That makes more sense
![[Pasted image 20250414163759.png]]
k) True. $f^{(n)}(0) = \ln(2)$ wait but the exponent huh?!

Remember the format of a Maclaurin series!
- the power of $\ln(2)$ accumulates as we keep taking the derivative.

l) False. Looks like GS.
pi/2 > 1, not < 1
This doesn't even converge bozo

![[Pasted image 20250414164206.png]]
- funky powers of $n$ and factorials are a giveaway to use RT!
WHY IS RT USED FOR RECURSIVE THINGS. GIVE EXAMPLE PLEASE #todo 

## Okay short answers

$((n+1)!)^2 = (n+1)^2(n!)^2$ #todo fun trick. but if you're paranoid just do another step.
![[Pasted image 20250414164644.png]]

![[Pasted image 20250414164856.png]]
- that $e$ expression is evil,
- Also remember $\infty \cdot 0$  is indeterminant, so we MUST evaluate that left limit to $e$ 
- L = 0 < 1, so it AC's 
Conclude that this AC's which implies it CCs and we cannot find the sum

b. 
![[Pasted image 20250414165439.png]]
- A31 not ABI


![[Pasted image 20250414170014.png]]
c.
- The format is all weird
- There is a pattern but you have to expand the products to see it.
- "must rewrite it some way"
- A nice tip is to factor!
- The series looks like PDF.
	- She said we dont need to elaborate cuz it's a known decomposition!
- Then you just use defn!

d. not bad
$\sum_{n=2}^\infty \frac{1}{\ln(n)^n}$
- Note $\ln(n)^n = \ln(n^n) \neq \ln^n(n)$  
	- This notation is annoying me.
- Then just do IT. yay


### Question 2
Use GS, RT, P series cuz we want some kind of range!

![[Pasted image 20250414170834.png]]
- WHAAAAT
- WHAAAT
- I think from this point we use P-series
![[Pasted image 20250414171155.png]]
- Not bad. Cool trick. Lowkey a fun question.
- Just note for these "range" questions that GS, RT, and P series test are your friends!

### Question 3
![[Pasted image 20250414171724.png]]
- For these questions, ALWAYS use RT! Nothing else is needed, and that is beautiful 
- Center is $a = 1$; $c_n = \frac{1}{n\sqrt{\ln(x)}}$
Let $a_n = \frac{(x-1)^n}{n\sqrt{\ln(n)}}, \text{ for } n \geq 3$ (for well-definedness do this)
![[Pasted image 20250414172058.png]]
- You should ALWAYs get a way to factor / pull out $|x-a|$ 
![[Pasted image 20250414172431.png]]
- You CAN use lhopitals rule for sequences, alright!?
- Then find $L = |x-1| < 1 \implies 0 < x < 2$
- So when $x \in (0,2)$ we have AC => Convergence
	- Radius is half the size of the interval
- The radius of convergence is 1!
- Why do we have to find the end points? Cuz kathleen will prolly mark us off if we don't...
- Anyway check at x = 0 and x = 2 if we have convergence. Ig ¯\_(ツ)_/¯
- ![[Pasted image 20250414172759.png]]


![[Pasted image 20250414173212.png]]
- Trig sub for 4 marks? Defo not! And we have bounds! Looks geometric to us. 
	- We can use geometry to solve it!

![[Pasted image 20250414173305.png]]

![[Pasted image 20250414173641.png]]

## Question 5
![[Pasted image 20250414173811.png]]
- IOHH YOU CAN COMBINE THE PREDICTE!

![[Pasted image 20250414173907.png]]
 - By BMCT, it converges! Its bounded below and decreasing!


![[Pasted image 20250414174018.png]]
- Easy. Prove the contrapositive. proving the vanishing condition is EASY as we've done done in class. 

![[Pasted image 20250414174253.png]]
- Suppose it converges for contradiction. 
![[Pasted image 20250414174530.png]]
- Choosing epsilon = 1 is good just to not let us waste time. 

![[Pasted image 20250414175601.png]]
Use $a_n = b_n = (-1)^n\frac{1}{\sqrt{n}}$
We know sqrt increases so the reciprocal decreases
- #todo This is a good justification! 
- Also it's positive :)
so by AST, it converges.


### Question 9
![[Pasted image 20250414180647.png]]

