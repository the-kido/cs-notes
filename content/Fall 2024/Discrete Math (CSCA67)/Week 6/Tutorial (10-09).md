This is for tutorial 5.
For question 1.1, you can answer by saying there is no rule of inference that could get us to that conclusion.

1.2
Args:
1) $\forall x, I(x) \to L(x)$
2) $\exists x, I(x) \wedge F(x)$
	- We use and because "forall" requires we restrict the domain whereas with exists we need at least 1 item that is both an insect and flies. 
- (conclusion) $\exists x, L(x) \wedge F(x)$


3) $I(c) \wedge F(c)$  (2, existential instantiation)
4) $I(c)$ (3, simplification)
5) $I(c) \to L(c)$ (1, universal instantiation)
	- Since $I(c)$ is true we can instantiate with the same constant 'c'

1) $L(c)$ (4, 5 modus ponens)
2) $F(c)$ (3, simplification)
3) $L(c) \wedge F(c)$ (6, 7 conjunction)
4) $\exists x, L(x) \wedge F(x)$ (8) existential generalization 
