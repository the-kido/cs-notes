#### Combining FDs rule:
Combine two FDs with common left side by concatenating their right sides:
- $A B \to C$ and $AB \to D$ means FD $AB\to CD$ holds
- $A_1A_2 \to B_1$, $A_1A_2 \to B_2$, $A_1A_2 \to B_3$ is equivalent to $A_1A_2 \to B_1B_2B_3$
#### Splitting rule:
You can go the opposite direction from "combining", too:
- $A_1A_2 \to B_1B_2 \equiv A_1A_2 \to B_1$ and also $A_1A_2\to B_2$ 

*However*: Splitting the left side usually breaks the FD
$$title\;year \to length$$ might hold, but not $$title\to year$$ 

#### Removing when [[Trivial and Non-trivial FDs|trivial]]
$AB \to AC \equiv AB \to C$
