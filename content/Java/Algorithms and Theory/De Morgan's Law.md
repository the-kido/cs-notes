
| Express-<br>ion | **A** | **B** | A \|\| B     | A && B         | !A  | !B  | !A \|\| !B | !A && !B     |
| --------------- | ----- | ----- | ------------ | -------------- | --- | --- | ---------- | ------------ |
|                 | T     | T     | T            | T              | F   | F   | F          | F            |
|                 | T     | F     | T            | F              | F   | T   | T          | F            |
|                 | F     | T     | T            | F              | T   | F   | T          | F            |
|                 | F     | F     | F            | F              | T   | T   | T          | T            |
| Same<br>as      |       |       | ! (!A && !B) | ! (!A \|\| !B) |     |     | !(A && B)  | ! (A \|\| B) |

For any comparison between two booleans, you can either pull out !'s from both, or distribute !'s from an outside bracket. When distributing/pulling out !'s, you switch the boolean operation from || to && and vice versa. 
- ! (!A && !B) --> A || B 
- A && B --> !(!A || !B)
- !A && !B --> !(A || B)
### Unrelated
![[Pasted image 20240327145039.png]]
##### &&'s cannot be split, but ORs can be
![[Pasted image 20240327145055.png]]


![[Pasted image 20240220132055.png]]![[Pasted image 20240220132805.png]]
![[Pasted image 20240220133100.png]]


