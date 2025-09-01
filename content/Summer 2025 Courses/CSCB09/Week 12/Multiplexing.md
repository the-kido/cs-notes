- We want to "read multiple streams of I/O into a single control path"
	- Let's say you have a server, and clients A, B, C.
	- If A connects, then the server will block I/O. It will wait for A to connect, send it's message, etc., holding up B and C
		- It's like being on the phone with 1 guy, while holding up 2 others.
		- Guy #1 might not even be ready and #3 is. That's inefficient!
- With multiplexing, you can read all 3 servers and only pay attention to the ones that are ready
	- How you know that a client is ready, idk.
	- How to switch to a certain client from a bunch of clients? `select()`
### select()
```c
int select(
	int n, 
	fd_set *r, 
	fd_set *w, 
	fd_set *e, 
	struct timeval *timeout
);
```
- Blocks until specified FD's are ready for read/write, or times out, or "signal handled" #todo???
- Returns `0` if timeout, positive if some FDs are ready, and `-1` if error or signal handled.

- `fd_set` is the type that holds a "set" of FDs
```c
void FD_ZERO(fd_set *s); // make empty
void FD_SET(int fd, fd_set *s); // add
void FD_CLR(int fd, fd_set *s); // delete
int FD_ISSET(int fd, fd_set *s); // query
```
- `n` is = the highest FD + 1
- `r` is the fd_set you want to read from.
- `w` same but w/ writing. Make either `NULL` if they aren't needed
- `e` dw about it. Set it to null
- `timeout` = max wait time or NULL if not needed
```c
struct timeval {
	time_t tv_sec; // Notes doesn't elaborate
	suseconds_t tv_usec; // In microseconds, but expect millisecond accuracy 
};
```

### select() tips
1. `select()` *modifies* your `fd_set`'s. Means you should set them again before calling `select` again
	1. #todo Is there a scenario where this isn't necessary?
	2. "ditto" for timeout struct (same story; it can also mutate)
2. Ready to read/write doesn't actually mean there is data / room to read
	1. Could also be EOF, broken pipe, error, etc.
	2. "ready" usually means "non-blocking"
		1. it still might in race conditions (another thread access your FD right before your code does)
		2. You might try to write too much, filling up the buffer!
	3. Being ready for `accept()` usually means "ready to read"

#### Limits of `select()`
- Max `fd_size` of 1024 on most platforms (also note that servers want, like, 5 times as many as that)
- It's slow with many `FD`s. You gotta loop through them in order to set `FD_SET`, the kernel loops through them, and you loop through then again to `FD_ISSET` #todo what is fd_isset?

#### `epoll` for `epoll`-ing needs
- `int epoll_create1(int flags);`
	- Creates an epoll instance. Returns its FD
	- Remember to `close` when done with the FD
- `int epoll_ctl(int epfd, int op, int fd, struct epoll_event *ev);`
	- All / delete / change what to monitor
- `int epoll_wait(int epfd, struct epoll_event *evs, int n, int timeout);`
	- Blocks until readiness or times out (in milliseconds) *or* signal handled

#### `epoll_create1()`
- Flags can be `0` or `FD_CLOEXEC`. Returns FD to new "epoll instance"
- Like normal FDs, it has an entry in FD table, so you can use `close`, `dup`, `fork`, etc.
- It's not meaningful to read/write into them though (only other epoll functions find it meaningful)


#### `epoll_ctl()`
"Specifies what to wait for"
```c
int epoll_ctl(int epfd, int op, int fd, struct epoll_event *ev)
```
- Returns 0 on success
- `epfd` is the epoll instance (from before)
- For the `op`:
	- `EPOLL_CTL_ADD` (monitors `fd`), EPOLL_CTL_DEL (don't monitor `fd`), `EPOLL_CTL_MOD` (change what to monitor for `fd`)
- `fd` CANNOT be a regular file. It can be another `epoll` instance though (hierarchy of epolling!!)

```c
struct epoll_event {
	uint32_t events;
	epoll_data_t data;
};
```
- Bits for `events` field are as follows (use bitwise OR to do many!):
	- EPOLLIN: ready to read
	- EPOLLOUT: ready to write
	- EPOLLONESHOT: monitor only once. Dont do it again
	- EPOLLET: "Edge-triggered"
		- Notifies when going from not-ready to ready
		- Default = level-triggered != edge-triggered = notify whenever ready
		- E.g: Some data arrives and you read some but not all of it, then wait again.
			- Level: Notifies again
			- Edge: won't notify again (didnt switch from not-ready to ready; still ready)
	- And a lot more


```c
typedef union epoll_data {
	void *ptr;
	int fd;
	uint32_t u32;
	uint64_t u64;
} epoll_data_t;
```
With `epoll_ctl`, you store whatever you want.
With `epoll_wait`, you get back what you stored
People usually store:
- the FD being monitored (epoll_wait doesn't tell you lol)
- Pointer of your own book-keeping struct

#### epoll_wait
```c
int epoll_wait(int epfd, struct epoll_event *evs,
int n, int timeout);
```
- `evs` = array to receive events
- `n` = array length
- timeout = milliseconds (-1 if no timeout!)
- Returns count of ready FDs
	- i.e. how many entries in `evs` used
Each `epoll_event` has these:
1. "events" (i thikn that's evs?) tells you which events occured. T
	- Two more possible bits can show up even if you didn't ask for them!
		- `EPOLLHUP` = The other end (pipe, socket) has closed
		- `EPOLLERR` = Error condition (broken pipe!)
2. `data` has what you stored with `epoll_ctl` ("add/mod" ?? #todo)
	1. add = `EPOLL_CTL_ADD` and mod = `EPOLL_CTL_MOD`

epolling lets you monitor many file descriptors (think sockets) to see if I/O is possible on any of them