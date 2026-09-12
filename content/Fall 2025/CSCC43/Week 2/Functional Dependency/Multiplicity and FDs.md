Consider some relation $R(A_1, \dots, A_n)$ with a key $X$. Then $X \to Y$ holds where $Y$ is *any* attribute in $A_1 \to A_n$ (even ones that are in the key $X$)

1. For many-one, $X \to Y$ holds but not $Y \to X$
	1. Like if $R$ represented a many-one relationship between $E_1 \to E_2$, then if X is a key of $E_1$ and $Y$ is a key of $E_2$, $X \to Y$ does indeed hold!
2. For one-one, $X \to Y$ and $Y \to X$ holds
	1. Similar example to above: If $E_1 \leftrightarrow E_2$ then of course the individual FDs hold
3. For many-many, no non-trivial FD exists. Only $XY \to XY$ holds. (You need both keys to get... both keys)

