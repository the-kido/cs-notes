
![[More FD rules.png]]
- An FD is trivial if **all** the B's are subset of A's (look at that bottom rule. See how the B that's on the left and right is redundant on the right? That's the same idea for describing a FD as "trivial")
	- E.g.: $AB \to AB$ is trivial
- A non-trivial FD means you can do that bottom rule thing to a few of the B's but not all of them
- A complete nontrivial FD means none of the Bs is also an A

Extending from this, you can *remove* any attribute on the left side so long as it is also on the right side. They would be equivalent.
$AB \to C \equiv AB \to AC$
