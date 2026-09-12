
>[!defn] Spanning Sets and Bases
>A subset $S \subseteq V$ is a spanning set of V if V = span(S). 
>A set $S \subseteq V$ is a basis of V if
>1. S is linearly independent
>2. S is a spanning set of V.

  >[!note] Minimal spanning sets
  >A spanning set with no redundant vectors

>[!defn] The Standard Basis of $R^n$
> Checking S is linearly independent is an exercise.
> 
> Checking #2, that S is a spanning set of R^n is as follows:
> Let v in r^n
> ==> v = (x_1, x_2, \dots, x_n) => $x_1(1,0,\dots,0) + x_2(0, 1, 0, \dots, 0) + x_3(0, 0, 1, \dots, 0) + \dots + x_n(0,0,0,\dots,1)$
> (more steps on slides #todo)
> $=> v \in span( {e_1, e_2, \dots, e_n} )$
> 
> 
So yeah you can do iff proof so long as you're careful and nothing you're doing is destructive. Therefore we proof that R = span.
As S is L.I (linearly independent) and $span(S) = R^n$, then S is a basis.


