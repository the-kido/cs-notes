Continuity
Derivatives
Archimedean property + sup and inf!

## Question 1
-inf / inf is indeterminate
![[Pasted image 20241114191748.png]]
![[Pasted image 20241114192036.png]]
Answer is 1/-1 or just -1. Easy stuff!

You can describe the By limit properties  on that second last step where 1/x becomes 0. 

## Question 2
Logs have such nice properties. I agree! 
ln(4x) - ln(x) --> ln(4)
![[Pasted image 20241114192411.png]]

## Question 3
$\lim \limits_{x \to 0} 2x^2 \cot^2 x$
![[Pasted image 20241114192820.png]]
cot^2 x goes to infinity since cotx goes up and down. Graph it
Btw we know that lim x->0 sinx / x = 1 it is already proven.

Oh wow he used the x^2 so smartly. Some clever shenanigans. If you don't see the trick then come back to it later. 

SO in the end you get `3 * 1*1  * 1` and just 3 

## Question 4
c-delta-epsilon for proving continuity

"on it's domain" omits the x = 1 VA.

![[Pasted image 20241114193340.png]]
Because of the VA, we need to bound delta so that we can never pick an illegal x. So, we set delta to be the mini of |c-1| since that's the distance from the center but we divide by 2 to ensure we don't apporach the VA. 
- let me rephrase this: Delta makes a span around c by "delta" size. We want delta to always be smaller than |c-1|. It cannot be delta = |c-1| since x can still touch x = 1 so we divide it by *any* number > 1 to comfortably have delta safe

Pick delta = min{ |c-1|/ 2}
![[Pasted image 20241114193813.png]]
![[Pasted image 20241114193930.png]]

#todo When dealing with fractions, we MUST bound delta so we don't choose a bad one. Just like delta epsilon proofs!

![[Pasted image 20241114194142.png]]
- See how he used |c-1|/2 to get 1/|x-1| wow. This was used for the  below step
![[Pasted image 20241114194216.png]]
![[Pasted image 20241114194245.png]]
![[Pasted image 20241114194336.png]]

#todo These questions are the worst for sure!!11

Prove $1/\sqrt{2x}$ is continuous #todo

## Question 5
![[Pasted image 20241114195521.png]]
- it only works cuz the numbers are obvious to eye-ball!!

## Question 5 b)
![[Pasted image 20241114195625.png]]
`sps is suppose by the way...`

We know that x^3 dominates. x^2 likes that. Factoring it makes it more obvious as you'll see he does.
![[Pasted image 20241114195916.png]]
NOTE: $\infty \cdot 0$ is indeterminate but $\infty \cdot 1$ is NOT.

![[Pasted image 20241114200041.png]]

tl;dr: we go left and right infinity and see that it goes from inf to -inf which means it goes through 0 sinc f(x) is continuous.

> I should definitely say that there *exists* a postive and negative number. IVT works because there exists a number N,M 

Do NOT plug in infinity into f(x)
#todo Remember the proof of cancelation formula. It is very easy. It's prolly not on the test (even tho he says it is) but still... good to know. 

#### Triangle inequality
![[Pasted image 20241114200549.png]]
ayyash sent it in 
#todo go over triangle ineq super quick.
## Question 6
![[Pasted image 20241114201316.png]]
- The trick is to re-write this as a root question!!
![[Pasted image 20241114201335.png]]
![[Pasted image 20241114201515.png]]
![[Pasted image 20241114201820.png]]

It's VERY similar to question 5 on our assignment so give that a looksy.

> Try sin(f(c)) = sin(f(c+1/2))

IVT produces open interval. 

## Question 7
![[Pasted image 20241114201950.png]]
- Use def'n of derivative and NO derivative rules. 
He uses  diff of cubes 
![[Pasted image 20241114202321.png]]
![[Pasted image 20241114202359.png]]
![[Pasted image 20241114202633.png]]

heavy #todo 

## Question 8

![[Pasted image 20241114202905.png]]
Since polynomals and exponentials are continuous + diff on R, then f is cont and diff except possibly at -3 and 1. 
> I need to specify that top part for sure!
![[Pasted image 20241114203154.png]]
Checking -3:
- For f to be continuous at 3, we need...
![[Pasted image 20241114203310.png]]
![[Pasted image 20241114203413.png]]

> Checking x = 1

![[Pasted image 20241114203607.png]]
because it's continuous, it is not necessarily differentiable

To know if something is differentiable, we see if it's differentiable from the right and left, and see if the slope is the same.  
![[Pasted image 20241114203805.png]]
![[Pasted image 20241114204125.png]]
Both sides are not the same so yeah.

I honestly have NO clue why we can't just use derivative rules to see what the derivative is at some point... mmm #todo will try again myself


## Question 9
![[Pasted image 20241114204726.png]]
$f(x) = x^3 - x + 1$
Remember perpendicular is -1/2 

## Question 10
![[Pasted image 20241114204919.png]]

- "exists a natural number" = 'Archimedean property immediately'
We want `exists n , n*x > y`

![[Pasted image 20241114205144.png]]
- Adding an intermediate term can make things nicer probably.

![[Pasted image 20241114205300.png]]
![[Pasted image 20241114205339.png]]

He wants to get rid of the 1/n^2024 with the below logic ![[Pasted image 20241114205513.png]] 
Reciprocal property! 

Also we know that a > 1 by Archimedean property 

## Question 11
![[Pasted image 20241114205825.png]]
A and B are subsets of R.

Part 1 to do by myself yippee

![[Pasted image 20241114205959.png]]
- Def'n of supremum. 
![[Pasted image 20241114210136.png]]

This question is "easy". Using "approximation theorem" it is easy. 
#todo find approximation theorem