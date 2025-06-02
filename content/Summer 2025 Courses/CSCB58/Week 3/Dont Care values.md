Not to be confused with [[Deterministic Values]]
- Denoted as `X`
- Meaningless. Pointless. Worthless. 
- You can "cover them up" with any number that would increase the size of group (but we wouldn't want to create more useless groups. that would be extra work for no reason!)
- Used for illegal inputs (i.e. in the Climate Control Fan example, if the room is both Cold and Hot, that wouldn't be possible)

>[!example] 7-seg display
>![[Pasted image 20250531223441.png|500]]
>Observe how for numbers past 10, the output doesn't really matter (since we can't display 2 digit numbers). 
>This means in our K-map, for those result that don't matter, we can "choose" what would make the k-map optimized!
>- Remember, optimized = least # of groups + most # of selected cells
>- If you can add another selected cell without creating a new group, great!

>[!example]
>![[Don't Care Example.png]]
>At the points where the temperature is *both hot and cold*, it makes no sense for there to be a result for the fan. Therefore we mark the output as "dont care"
>That also lets us turn the k-map into one identical to a mux


