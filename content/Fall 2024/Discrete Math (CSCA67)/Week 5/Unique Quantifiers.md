$\exists !x, P(x)$ 
Means
- There is exactly one x such that P(x)
- There is a unique x such that P(x)

To write this without the unique symbol, we can say:
$\exists x, (P(x) \wedge \neg \exists y, (P(y) \wedge y \neq x))$
OR
$∃x,(P(x) ∧ ∀y,(P(y) → y = x))$
- This one says that for all x that exist, all y should lead to x.

This translates to:
>[!quote]
>There exists an x such that P(x) and there does *not* exist a y such that P(y) and y is not the x we previously stated satisfies P(x)

>[!example]- Marrying Two People
>- If you want to make a statement describing 'x' person is married to two people, you would have a statement like $∃y∃z,(M(x, y) ∧ M(x, z))$ but this implies that y and z could be the same. A person married to two people can't be married to the same person twice!
>- The fixed version is $∃y∃z,(M(x, y) ∧ M(x, z) ∧ y \neq z)$

# Cards #discrete-5
What is the symbol for saying that there is a unique x such that P(x)? How would it be written without using the unique quantifier notation?
?
$\exists ! x, P(x)$ with the unique quantifier notation

$\exists x, (P(x) \wedge \neg \exists y, (P(y) \wedge y \neq x))$ without it




