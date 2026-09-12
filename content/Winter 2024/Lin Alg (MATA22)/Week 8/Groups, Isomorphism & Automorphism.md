>[!defn] Isomorphism
>An <span class="emphasis">invertible</span> linear transformation $T : V \to W$ is an isomorphism
>
>Iso = "same". "same shape". I think this has to do with what it takes in and outputs? #todo
>
>
>>[!explanation] It is an "isomorphism" if you can go from one vector space V to another vector space W <span class="emphasis">and back</span>. This implies V and W have the "same shape" in that sense. 

>[!defn] Automorphism
>An <span class="emphasis">invertible</span> linear transformation $T : V\to V$ is an automorphism
>
>Auto = "self". "self shape"


>[!defn] Groups
>Another algebraic structure!!
>They follow 3 axioms:
>1. There is an associative multiplication operation $G \times G \to G$
>2. There is an identity $e \in G$ such that $eg = ge = g$
>3. For any $g \in G$ there is an inverse $g^{-1}$ such that $gg^{-1} = g^{-1}g = e$

>[!thm] The automorphism group of a vector space
>The set $Aut(V)$ is a *group*
>
>Note $Aut(g) = \set{T : V\to V : T\text{ is an automorphism}}$
> #todo Idk why he uses 'g' but okay
>
>>[!proof]
>> 1. If $S, T \in Aut(g)$ then ST \in Aut(g)
>> 	- So the associative multiplication operation is simply a composition as defined [[Composition!|here]]
>> 2. The identity $I \in Aug(g)$ is the identity $I : V \to V$ where $T(I(v)) = T(v) = I(T(v))\;\; \forall v \in V$ 
>> 3. If $T \in Aut(g)$ then T is invertible with the inverse $T^{-1} \in Aut(g)$
>>  - Remember that we have this since automorphisms (i.e. any element in Aut(g) is invertible)
>> 

>[!thm] The Gauss-Jordan Algorithm for Finding Inverses (of matricies)
>Basically you make an augmented matrix and manipulate the left so it looks like the right.
>Note that $I$ almost always represents the "identity" transformation; when doing matrix multiplication with M and I, it will result in *the same matrix*
>![[Pasted image 20250310101555.png]]



![[Pasted image 20250310101627.png]]

![[Pasted image 20250310101634.png]]
>[!note] The only time we cannot invert is if we hit a fork. See the above example: If one of the rows could be completely cancelled, we will never get the identity. So simply put, if the EF contains a row $[0 \dots 0]$ then it won't work
>
>(do realize that a EF CAN HAVE A ROW $[0 \dots 0]$ BUT it cannot have $[0 \dots 0]$  if we want to show the matrix is invertible. Idk why parker phrased it like that in the image above.... makes it sound like "it's not EF if there is a row $[0 \dots 0]$" which isn't true) 

>[!defn] Isomorphisms and Injectivity / Surjectivity
>A linear transformation $T : V \to W$ is an isomorphism iff it is injective and surjective.
>
>>Note that for the transformation to be inject and surjective also means that it has an inverse!
>
>So from that, we derive that T is basically an isomorphism iff T is
>1. Linear &
>2. Surjective &
>3. Injective
>
>> If $dim(V) = dim(W)$ are finite, then we could just check either injectivity or surjectivity.
>> Why? Well if T is injective, then $dim(ker(T)) = 0 \implies dim(image(T)) = dim(V) = dim(W)$ which implies T is surjective, too. 
>> 
>> 
>> >[!proof]
>> > #todo 
>> 


>[!defn] Isomorphic
>We say V and W are isomorphic if there exists an isomorphism $T : V \to W$

>[!example]
>1. $M_{2\times2}(\mathbb R)$ and $\mathbb R^4$
>2. $P_3(\mathbb R)$ and $\mathbb R^4$
>   

![[Pasted image 20250310103332.png]]

>[!thm] ✨The Classification of Finite Dimensional Vector Spaces
>If V is an n-dimensional real vector space defined over field $\mathbb F$,  V is isomorphic
>

>[!proof]
>![[Pasted image 20250310113240.png]]

>[!Thm] Corollary
>Two finite-dimensional real vector spaces V and W are isomorphic iff $\dim(V) = \dim(W)$

>[!proof]
>![[Pasted image 20250310113250.png]]

#todo are $M_{2\times2}(R)$ and $P_3(R)$ also isomorphic then? Is it because they relate to $R^4$ first? Clearly they are isomorphic by the corollary!