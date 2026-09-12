Very related to [[Linear Dependence]]

>[!defn] Redundant Vector
>The vector $w \in \set{w, v_1, \dots, v_k}$ is redundant if
>$$span(\set{w, v_1, \dots, v_k}) = span\set{v_1, \dots, v_k}$$
>*or* if you can write a redundant vector as a linear combination of the other vectors in the span of the set it's in.
>
>>Note: "Redundant" means able to be omitted without loss of function/meaning.

>[!example] How do you show that (1,2) is redundant in the set for the span $span(\set{(1,2), (1,0), (0,1)})$? I.e. show that $$span(\set{(1,2), (1,0), (0,1)}) = span( \set{(1,0), (0,1)})$$
>$(1,2)$ is redundant because $(1,2) = 1(1,0) + 2(0,1)$
>This shows $span\set{(1,2), (1,0), (0,1)}\subseteq span\set{(1,0), (0, 1)}$
>Note $\set{(1,0), (0,1)} \subseteq {(1,2), (1,0), (0,1)}$ and so $span \set{(0,1), (1,0)} \subseteq span\set{(1,2), (1,0), (0,1)}$
>
>So yeah the two spans are equal; the thing is redundant. 

#todo prove that a span with the zero vector is redundant. 


 