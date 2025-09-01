$X^2 + CX + ABC$

1. Can only choose from mult, add result

### 0
InSel = 0
Mux1: X
Mux2: 0
Mult: 0
Add: X

Reg1: ?
Reg2: X
### 1
InSel = 0
Mux1: X
Mux2: X
Mult: X^2
Add: 2X

Reg1: X^2
Reg2: X (dont update)

### 2
InSel = 3
Mux1: C
Mux2: X
Mult: CX
Add: C+X

Reg1: X^2 (dont update this guy)
Reg2: CX

### 3
InSel = x
Mux1: X^2
Mux2: CX
Mult: --
Add: X^2 + CX

Reg1: X^2 + CX
Reg2: CX (dont care)
### 3.5
InSel = 1
Mux1: A
Mux2: 0
Mult: 0
Add: A

Reg1: X^2 + CX
Reg2: A

### 4
InSel = 2
Mux1: A
Mux2: B
Mult: AB
Add: A+B

Reg1: X^2 + CX
Reg2: AB
### 5
Mux1: AB
Mux2: C
Mult: ABC
Add: AB+C

Reg1: X^2 + CX (dont update this guy)
Reg2: ABC

### 6
Mux1: X^2 + CX
Mux2: ABC
Mult: ---
Add: X^2 + CX + ABC

Reg1: X^2 + CX + ABC 
Reg2: dont care

done is true now. at step 101 done=1

| Step | Operation     | In R1      | In R2 | R1mul |     |     |     | N   |     |     |
| ---- | ------------- | ---------- | ----- | ----- | --- | --- | --- | --- | --- | --- |
| 0    | R1=X^2        | X^2        | ?     |       |     |     |     |     |     |     |
| 1    | R2=CX         | X^2        | CX    |       |     |     |     |     |     |     |
| 2    | R1=X^2+CX     | X^2+CX     | CX    |       |     |     |     |     |     |     |
| 3    | R2=AB         | X^2+CX     | AB    |       |     |     |     |     |     |     |
| 4    | R2=ABC        | X^2+CX     | ABC   |       |     |     |     |     |     |     |
| 5    | R1=X^2+CX+ABC | X^2+CX+ABC | ABC   |       |     |     |     |     |     |     |
| 6    | Hold          | X^2+CX+ABC | ABC   |       |     |     |     |     |     |     |
