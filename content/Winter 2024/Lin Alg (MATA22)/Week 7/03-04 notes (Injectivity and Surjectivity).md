>[!defn] Injective and Surjective
>A linear transformation $T : V \to W$ is injective / one-to-one if:
>$$T(x) = T(y) \implies x = y$$
>
>A linear transformation $T : V \to W$ is surjective / onto if 
>$$\text{for all } \vec w \in W, \text{ there is } \vec v \in V \text{ such that } T(\vec v) = \vec w$$
>$$\forall \vec w \in W,\exists \vec v \in V \text{ s.t.  } T(\vec v) = \vec w$$
>
>>[!explanation]
>>![[Pasted image 20250304133028.png]]

>[!thm] Kernels & Injectivity
>Let $T : V \to W$ be a linear map. The following are equivalent:
>1. T is injective
>2. $\ker(T) = \set{0_V}$
>3. $\dim(\ker(T)) = 0$
>   
> > tl;dr: if injective, the kernel is just $\vec 0$
>   
> >[!explanation] If the function is not injective, then 1 large input could be crushed into a smaller one. Think (x,y,z) = (0,0,0), and that is the only case where there can exist a kernel. If (x,y,z) = (x,y,z) for all inputs, then the only time an input results in a $\vec 0$ is when passing $\vec 0$
>   
> >[!proof]-
> >1 --> 2
> >Suppose T is injective.
> >We know $\set{0_V}\subseteq ker(T)$ as $T(0_V) = 0_W$
> >Let $v \in ker(T)$.
> >Then $T(v) = 0_W = T(0_V) \implies v = 0_v$ as T is injective
> >So $ker(T) = \set {0_v}$
> >
> >2-->3
> >Suppose $ker(T) = \set{0_v} = span \set{\emptyset}$. 
> >Therefore $\emptyset$ is a basis of $ker(T)$.
> >Therefore $dim(ker(T)) = 0$
> >
> >3-->1
> >Suppose $dim(ker(T)) = 0$.
> >Therefore $\emptyset$ is a basis of $ker(T)$
> >This gives $ker(T) = span \emptyset = \set{0_V}$
> >Suppose $T(x) = T(y)$
> >$\Leftrightarrow T(x) - T(y) = 0_w$ 
> >$\Leftrightarrow T(x-y) = 0_w$ by linearity 
> >Therefore $x - y \in ker(T) = \set{0_V} \Leftrightarrow x -y = 0_V\Leftrightarrow x = y$
> >Therefore T is injective
> 


>[!thm] Image and Surjectivity
>Let $T : V \to W$ be a linear transformation. Suppose W is a finite-dimensional vector space. Then the following are equivalent.
>1. $T$ is surjective
>2. $image(T) = W$
>3. $dim(image(T)) = dim(W)$
>
>>[!explanation] If T is surjective, then every output maps to a value of W. So clearly $image(T) = W$, and likewise for their dimensions. 
>
>
>>[!proof]
>>1-->2
>>Suppose T is surjective
>>Then T(v) = T(w) \implies v = w
>>Let x \in image(T) 
>>Then x \in W
>>
>>Let x \in W
>>then x = T(l) for some l
>>Therefore x \in image(T).
>>
>>Therefore image(T) = W
>>
>>2-->3
>>Suppose image(T) = W
>>It follows dim(Image(T)) = dim(W) as W is finite and well-defined. #todo no way that's it.
>>
>>3-->1
>>Suppose $dim(image(T)) = dim(W)$
>>We have a lemma ( #todo.. what lemma) where if $S \subseteq V$ and dim(S) = dim(V), then S = V
>>
>>So $image(T) = W$
>>Let $w \in W$ be arbitrary (wts w = T(v) for some v)
>>Since $Image(T) = W$, $\vec w \in Image(T) \implies w = T(\vec v)$ for some $\vec v$ 
>>Therefore T is surjective.

>[!thm] Dimension and Injectivity 
>Suppose that V and W are finite dimensional vector spaces.
>If $\dim(W) < \dim(V)$, then $T : V\to W$ is not injective.
>
>The contrapositive is prolly more helpful; if $T : V\to W$ is injective, then $dim(V) \leq dim(W)$
>
>>[!explanation]
>>Think of $T : R^{100} \to R^2$. Clearly there is no injective linear transformation that could exist as a transformation that crushes down the input into a result cannot go backwards and add that crushed information back:
>>Maybe $T(1,2,3,4,\dots, 100) = (1, 100)$, but $T(1, \dots, 100) = (1,100)$ too. Not injective.
>
>>[!proof]
>>#todo


>[!thm] Dimension and Surjectivity
>Suppose that V and W are finite dimensional vector spaces.
>If $\dim(W) > \dim(V)$ , then $T : V \to W$ is not surjective.
>
>Again: contrapositive might be useful too! 
>
>>[!explanation] 
>>Think of $T : R^2 \to R^{100}$. A function that takes in $R^2$ cannot span $R^{100}$, but a function that takes $R^{100}$ can certainly span $R^2$
>>
>
>>[!proof]
>> #todo


>[!thm] Finite Dimensional Injectivity and Surjectivity are Equivalent! 
>Suppose $T : V \to W$ is a linear transformation and $dim(V) = dim(W) = n < \infty$ (finite dimensional). Then 
>$$\text{T is injective} \Longleftrightarrow \text{T is surjective}$$ 
>
>>[!proof]
>>
>>Suppose the abv info.
>>Let T be injective.
>>By rank-nullity, dim(W) = dim(image(T)) + dim(ker(T))
>>Since T is injective, $dim(ker(T)) = 0$
>>So $\dim(image(T)) = \dim(W)$
>>So T is surjective.
>>
>>Let T be surjective
>>By rank-nullity theorem, since V and W are finite dimensional, $dim(V) = dim(image(V)) + dim(ker(V))$
>>So $dim(image(T)) = dim(V)$
>>So $dim(ker(T)) = 0$
>>So T is injective. 



#todo Look at lecture for page 9 annotations (idk what is going on there)
