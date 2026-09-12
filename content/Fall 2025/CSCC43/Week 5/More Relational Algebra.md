## Outer join 
- Merges tables via common attr's. If the two tables don't have a common, they still merge what remains, but add $\bot$
- The $⨝_{oL}$ will merge the left table with the right. If there are entries in the left that don't match with the right, then the "left" is what gets nulls added (it nulls the right's missing stuff)
- Same with $⨝_{oR}$

## Division
- Useful for "find students who passed ALL courses"
- Basically it takes 1 bigger table, and 1 smaller table. the smaller table 
![[Division.png]]

