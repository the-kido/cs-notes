The main way to store and retrieve things!

Goal: Change the output of the storage only when the clock changes.
- So when the clock turns on, the data might change, but the output *does not change*.

The solution is easy! Have 1 [[Clocked (Gated) SR Latch]] (this is what sets and resets the value) and feed it directly into another clocked SR latch (with Q = S and $\bar Q = R$) such that when Q is set, the other latch will also be *set*.
However, the *BIG* difference is that the second latch's clock takes the negation of the first latch's clock. They are NOT on the same timings! (opposite timings, weirdly)
> Not on same timings = no oscillation issue

![[SR leader-follower flip-flop.png]]
- When C=1, the first latch updates its value. When C=0, the second latch takes the first latch's value and stores that while also outputting it.
> For the input to propagate to the output, both latches need to be active once 
- The second latch is effectively a D-latch because R will be the negation of S (by nature of $Q_0$ and $\bar Q_0$)
- Flip-flops are [[Edge-Triggered]]

Now all we got to do is fix the S=R=1 problem again by making that first latch a D latch.

# Edge-Triggered D flip-flop
![[Edge triggered D flip-flop.png]]
- This is a *negative-edge* triggered flip-flop (like the above SR one)
	- Means its output Q changes to D on the *falling-edge* -- when C goes from 1 to 0

### Positive-edge triggered flip-flops
Take the above, but negate C. That is all. Why this works? When C goes from 0 to 1 (rising), the second latch is active, updating the output.
![[THE flip-flop.png]]
- This is "THE" flip-flop!