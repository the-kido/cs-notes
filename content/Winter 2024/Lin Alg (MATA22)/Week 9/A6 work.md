q6 aids

q7
1. WTS there exists a T isomorphism. 
	1. Let T(V) = V (the identity transformation)
	2. The identity is an isomorphism (linear, surjective + injective)
		1. Note that the image(T) = V so we get that thing
		2. and the rest falls into place very obviously,
2. Since V is isomorphic, there exists an isomorphism T such that $T(v) = w$ is linear, surjective, and injective for all 
	2. WTS there exists a S(w) = v that is linear, surjective, and injective.
	3. There exists the inverse of T, so v = T^-1(w).
	4. Show that inverse is an isomorphism (linear, surjective, injective)
		1. By the theorem that inverses of linear functions are linear, T^-1 is linear.
		2. Then show surjectivity:
			1. Let v be arbitrary. Choose $w = T(v)$ as T is surjective
			2. Then $v = T^{-1}(w)$
		3. Then show injectivity
			1. Suppose $x = y \in W$
			2. Then x = T^-1(z) where T(x) = z
			3. x = T^{-1}(T(y)) = y
			4. BOOM
			5. Suppose $T^{-1}(x) = T^{-1}(y)$
				1. Then $T(T^{-1}(x)) = T(T^{-1}(y))$ by surjectivity of T
		4. Therefore T^{-1} is a valid isomorphism
3. Suppose U is isomorphic to V and V is isomorphic to W.
	1. Then there exists isomorphisms S(u) = v and T(v) = w, who are linear, surjective, and injective, and therefore invertible too. 
	2. WTS exists an  $R : U \to W$ that is an isomorphism
	3. Choose R = ST
		1. 
		2. By 10.3, since S and T are both invertible, ST is invertible. Therefore ST is also surjective and injective.
		3. !??!?! IS THIS CHEATING. NO IT'S NOT. HAHA GET FRICKED