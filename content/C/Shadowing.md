#### "What if the argument has the same name as a variable?"
```c
int x = 3;
int pow(x) {
	return x*x; // This will access the *argument* and NOT any variable. The more local variable gets priority 
}
int main() {
	pow(12);
	return 0;
}
```
