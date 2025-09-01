```MIPS
li $t9, 0xffff0000  
lw $t8, 0($t9)  
beq $t8, 1, keypress_happened
```
- means if t8 = 1, then key happened. 4($t9) will be the actual key pressed (otherwise it would spam). keys = ASCII character

```MIPS
lw $t2, 4($t9) # this assumes $t9 is set to 0xfff0000 from before  
beq $t2, 0x61, respond_to_a # ASCII code of 'a' is 0x61 or 97 in decimal
```

### Random (syscall 42 for ranged)
```mips
li $v0, 42  
li $a0, 0  
li $a1, 28  
syscall
# Returns random number in $a0 
```

### Sleeping (syscall 32)
```mips
li $v0 32
li $a0, 1000
syscall
```


### Music
https://chatgpt.com/share/687d01ab-88c0-8012-ba16-123cdb535fe2
It works!


# The design for my Tetris:
### Goals
- Unique; not gaudy
- Impressive
- Pretty

Things I want to incorporate:
- A less grindy, more linear game. "Completable" 

Ideas:
- You play Tetris. Each time you play, you start in a different "room". After clearing the room, you get upgrades while the room gets harder. 
	- When these levels are finished and you're prompted with an upgrade, you cannot do any other kind of input except for `1`, `2`, and `3` to pick your buff. 
	- This makes the game inherently more chaotic over time.
	- Each room might have a gimmick. I'll think of a few:
		- Regular room (nothing happens)
		- Only 3 types of block available
		- New weird type of block available
		- Controls are inverted (lowkey have no clue how to implement this... actually no I do lol)
		- A few blocks might spawn at random to obstruct your placements. The longer the guy lasts, the more you're toast. 

Implementation:
- I have to remember that I only have t0 - t9 and s0-s7 fields in total. That's only 18 variables. I also have infinite memory via the stack but still.
	- s0 = keyboard
	- s1 = display
	- 

### Features I want to include (from the list)
#### Easy
- [x] (1) Gravity (duh)
- [x] (3) Game over + start new game
- [x] (4) Sound effects  
- [x] (5) Pause with `p`  
- [ ] (6) Some level system depending on rows eliminated
	- Perhaps I could do a continuous game sorta thing where you have to keep trying to reach the end, like a roguelite. The Tetris roguelike lmao.
	- Each level the visuals change and things happen. 
- [x] 8 Outline of where piece will place  
- [ ] (9) Ability to start new game, track highest score so far (displayed on screen)
- [x] (11) Different colored tetrominos
- [x] (14) Save piece feature
	- Save current piece on the side instead of playing it. Skip to next piece. Swap to saved piece if C is pressed
#### Hard
- [x] (1) Track Score
- [x] (2) Full set of tetrominoes
- [x] (5) Background music 


(Maybe)
- (?? 3) Menu screens for level selection / score board
- (?? 6) Random special blocks
- (7) Powerups (i'll do "upgrades")
- (4) Animations
	- Like when line goes poof


# Progress
## Milestone 4 
- Did 3 easy, 1 hard
	- Gravity, Colored, Pausing for EASY
	- Full set of tetrominos for HARD
- Will do 2 hard 4 easy
	- Game over, Sound Effects, Save Piece, and  for EASY
	- Music and Score for HARD