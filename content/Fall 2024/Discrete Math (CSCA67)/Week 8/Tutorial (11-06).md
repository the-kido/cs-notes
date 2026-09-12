#### Proving induction template
P(n) is a predicate (true or false!)
Want to prove: forall n >= b, P(n)
- b is the min val
- universe of discourse is integers / natural numbers for induction so the increase per step is discrete

Proof:
- prove base case
- prove induction step
- therefore, by induction, forall n >= b, P(n)

### e.g for every integer n >= 1, n^3 is divisible by 3
let universe of discourse be integers
Let P(n) be n^3 -n is divisible by 3. That is, there exists m, n^3 - n = 3m
WTP: forall n >= 1, P(n)

Base case:
- 0 = 0
- Therefore, P(1)

Induction step:
- #todo make sure to use proper def'n of P (that is, include the quantifiers!!)
	- But tbh sometimes they don't even show that step. 
	- It depends on the predicate. interesting. I have two examples so compare them.
		- The first one requires there to exist a number so that we can prove it's divisible by 3. 
		- You do not "choose" a variable but you can make a new constant and show that it's in the universe, then existentially instantiate that instead. #make-note  
- I took photos so look at it!

Therefore,  forall n >= 1, P(n)


#todo What really is a predicate
- The conclusion? The thing we wanna show based on the previous assumptions. 
- The thing that should be true for any n >= b 