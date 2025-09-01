```c
enum rps { ROCK, PAPER, SCISSORS };
// Internally, ROCK = 0, PAPER = 1, and SCISSORS = 2

enum rps a;
a = ROCK;
a = 10; // ... C doesn't enforce anything so this is OK
```
`enums rps` is literally an `int`. C fakes everything >:)
