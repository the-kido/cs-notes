Looks like $X\to A$
- X and A are both "attributes". Semantically, X is a key, though. A is just any other attribute (could a key too)
- FD's are "constraints" of relations
- X functionally determines A
- The key X implies A is an attribute. Means if two tuples have the same X, then they must have the same A

Given a relation schema you can derive some FDs
![[Example FDs.png]]
`title year -> star-name` wouldn't hold since Oppenheimer and 2023 points to Emily, but Cillian has the same dependency. So, the first two tuples agree on Oppenheimer and 2023 but don't agree on the star-name

