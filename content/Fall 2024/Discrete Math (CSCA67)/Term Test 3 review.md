# (simple) Induction
I should always state these 4 at the top.
- Let P(n) be something relevant to the question
- WTP statement using induction (this is what the last step *should* look like in the proof)
- Base Case (Just show that P(n) holds for the lowest n)
- What the induction step is: 
	- This is the proof part. You should get the induction step (rather *proof* the induction step holds).
- Conclude by using the induction step and base case to use the Simple Induction rule of inference
Induction Step: $\forall n\geq 0, P(n) \to P(n+1)$
Base case: P(0) 
Therefore:
$\forall n \geq 0, P(n)$

The IH step is when you utilize the P defined step to get closer to P(n+1). Called the IH. The Induction Hypothesis is the assumption that P(n) exists. 

# Strong induction
The 3$ 7$ question with simple induction
![[Pasted image 20241119133048.png]]

With strong induction, we have a few known values and use that to prove future numbers, instead of only knowing P(n)
![[Pasted image 20241119135519.png]]

Want we want:
$\forall k \geq b, \forall b \leq i < n, P(i) \to P(k)$
What we get:
$\forall n \geq b, P(n)$


What do you use for the cases?
- Let's look at the money example:
	- We wanted the number to be 3 more than the minimum of 12 (so 15) meaning we first need to prove that 12-14 work, then we can do >=15. The reason we have >= 15 is because it makes the proof really easy. Just add 3 to the number and bazinga. The reason we know the number 3 back works is cuz we have P(n-3) as an IH since, again.... okay let me show you the ranges we've proved:
	- Needa prove:
		- $\forall 12 \leq i < n, P(i)$
		- Soooo
		- P(12), P(13), and P(14)
		- P(n >= 15). Since n >= 5 we have 12 <= i < 15, meaning i is between 

# Tutorial review:
- Question 2.2:
	- P(n) was like A and B and C --> D. So just assume A and B and C, then use cases to get D, then use implication to get A and B and C --> D instead of doing what I did. 
- Question 2.1
	- Uhhhhh
	- it's the same thing !1111!11
- 2.3
	- In order to use K >= 22 i had to prove 18, 19, 20, and 21. I forgor 21.
- 2.4
	- Didn't do anything wrong 👍