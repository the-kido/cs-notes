Q4: For the else, we need floor(\sqrt{n}) >= 2, so we need n>=4

So we add those checks at the start such that it's satisfied (the base cases)
- You can "technically" add extra base cases (like n=4) but they are redundant (it's not inheriently wrong but you *will* be judged!)

I dont get the size(n) thing

Anyway we show floor(sqrt{n}) <= \sqrt{n} < n 
Then you use that to show decreasing (?)


Q7: to show size(n,m) = n is *not* a good measure? 
- I.e. (0,7) --> ... (0,1) can be inputs but return is always 0. it's almost a constant func (so it's not meaningful)

size  is a made up function
- it's a "label" for a certain call (it should depend on the args / numbers / things)
- The issue was with "n" is that in the case we had (0,2), then (0,1), the "size" would have always been 0 but the args are different! It's meaningless!
- So a better one was size(n,m) = m. It decreases!
#todo cont the rest.