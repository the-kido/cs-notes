You might de-normalize a relation depending on what tasks you do very often. This could be for performance. But you sacrifice elimination of [[Design Anomalies]]
You pick on the spectrum between these per table.

For normalized tables, Joins are heavily optimized but they still very expensive in general, so less tables is faster but more anomalous!

You can figure out which to pick via **benchmarking!**
- Design a good schema first, then measure bottlenecks based on the tables used most.
- Then consider if de-normalization is the way to go.
