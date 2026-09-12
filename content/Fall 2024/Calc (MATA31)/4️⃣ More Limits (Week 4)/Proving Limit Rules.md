### Set up
Usually you are assuming that some limits hold to prove another limit that contains said limit. 
>[!example] Prove that...
>$\lim_{ x \to c } [ f(x) + g(x) ] = L + M$  <span class="emphasis">if
></span> $\lim_{ x \to c } f(x) = L$ and $\lim_{ x \to c } g(x) = M$

The way we are able to use the conclusions of the assumed limits (the ones after the <span class="emphasis">if</span>) is by making sure we state that all parts of the definition hold!
1. Choose an epsilon for the future proof
2. Show that a delta exists > 0 so that the rest of the statements can hold.
Now you should be able to use the hypothesis and conclusion in your proof!
### Choosing values involving L, M
- Remember that L or M are arbitrary, so make sure you choices of e do not have a possibility of being 1/0 ! Since often |L| or |M| are absolute, having something like $\frac{1}{1+|L|}$ would fix it.

>[!check]- Question (and answer) I am referring to
![[Pasted image 20241001102802.png]]

### Choosing delta 
Since we want to be able to use the conclusion, we need to show that the assumption is true. To do that, we can utilize the first limit and manipulate to the 2nd and 3rd limit definitions.
We do this via $\delta = \min\{\delta_1, \delta_{2}\}$ because now...
- $\delta  \leq \delta_{1}$ and $\delta \leq \delta_{2}$
- $0<|x-c| < \delta \leq \delta_1$ and $0<|x-c| < \delta \leq \delta_2$ holds!
We have now shown that the hypothesis is true. On to using the conclusion
>[!note] In the above proof it doesn't explicitly mention that the conclusions for (\*) and (\*\*) are proven, so I would personally write that
>
>> Then $\delta \leq \delta_{1}$ and $\delta \leq \delta_{2}$, hence $0<|x-c| < \delta \leq \delta_1$ and $0<|x-c| < \delta \leq \delta_2$ holds, thus, conclusions in (\*) and (\*\*) hold.
>
>Boom. Now we know for sure the conclusions are true, and we can use that in the main part of the proof

### Choosing epsilon
- Make sure you're NOT dividing by 0. Often, N and M and delta and epsilon are > 0, which makes dividing by it very easy. However, when proving limit rules (and any other proof for that matter) watch out for when the other variables you use could possibly be 0. In the above example, L and M *can* be 0!

- A good example of this is 4b's lecture example

## Proving limits are unique
- If given two limits, where g(x) as x->c = L1 and L2, then we try to derive a contradiction by assuming L1 != L2.
- By def... dududud 
- Let epsilon = |L1 - L2| / 2 (note epsilon > 0)
- let e_1 = e_2 = e > 0
- Then there exists delta_1, delta_2 so that the implications in (\*) and (\*\*) hold
- Show assumptions are true
- Now we have conclusions
- Then show that |L1 - L2| < |L1 - L2| 
- "This is a contradiction, so our assumption that L1 != L2 is *false*"

#todo Most likely an exam question ngl

# Material
[Week 4b slides](https://q.utoronto.ca/courses/362238/files/33595446?wrap=1)



Reciprocal rule

