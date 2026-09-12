Used to detect "Redundancy" and therefore [[Design Anomalies]]
> This ensures no anomalies and we can always recover information. BUT, it does not *preserve dependencies*

# BCNF
Formal definition:
- R is in BCNF iff for every nontrivial FD of R, (e.g. $X \to A$) then $X$ is a [[How are Keys of FD's determined|superkey]]
	- Reads as: For all FDs that are nontrivial (so no $A \to A$ action), then $X$ has all "key" attributes and maybe some more.

![[BCNF Example.png]]
- This example shows the given FD's are BCNF violations since the key is (title, year, star-name) but none of the left sides for the FDs are **superkeys** of it!

We can apply BCDF with [[BCNF Algorithm|the algorithm]] which still... doesn't preserve dependencies so be weary!
