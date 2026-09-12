![[Pasted image 20241012102317.png]]

- Universal Instantiation: When we say "c is arbitrary", that means we can not make any assumptions on what the value of c will be. 
- Existential Instantiation: When we say "for some element c", that means we choose c to be *some random element*. We could say c is "Charlie"... but that would be strange.

Always specify the type that the variable is.

>[!danger] Existential Instantiation
>When using the Existential Instantiation rule, we must introduce a fresh (new) variable, i.e., a variable that did not appear in our argument / proof yet

![[Pasted image 20241028100041.png]]


Note that $\exists x, P(x)$ and $\forall x, P(x)$ mean different things if we're assuming they're true instead of trying to prove they are true. 

|             | When proving $\_x, P(x)$   | When assuming $\_x, P(x)$ is true |
| ----------- | -------------------------- | --------------------------------- |
| Universal   | x must be arbitrary        | x can be any choice               |
| Existential | x can be a specific choice | x must be arbitrary.              |

## ""overriding""

| Variable | Arbitrary / Chosen | Universal Generalization | Existential Generalization |
| -------- | ------------------ | ------------------------ | -------------------------- |
| X        | Arbitrary          | Allowed                  | Allowed                    |
| Y        | Chosen             | NOT Allowed              | Allowed                    |
- We cannot use universal generalization on a set variable because it is not arbitrary!
- We *can* use existential generalization on an arbitrary value because any arbitrary value is 1 instance / choice. 

You can refer to this example below (tutorial 6 solutions)
![[Pasted image 20241104102059.png]]
- We use existential instantiation on c, the cover it up with a universal instantiation, and finally use existential generalization on the arbitrary 'c'.




