```c
FILE *file;

void in_order_traversal_print(long pos) {
    node nodeAt;
    // Get the value in the file
    if (fseek(file, pos, SEEK_SET) == -1) exit(1);
    if (fread(&nodeAt, sizeof(node), 1, file) != 1) exit(1);
    // Go left
    if (nodeAt.left != -1) 
    {
        in_order_traversal_print(nodeAt.left);
    }
    // Print current
    printf("key=\"%s\" pos=%ld count=%lu left=%ld right=%ld\n", nodeAt.key, pos, nodeAt.count, nodeAt.left, nodeAt.right);
    // Go right
    if (nodeAt.right != -1) 
    {
        in_order_traversal_print(nodeAt.right);
    }
}

int main(int argc, char** argv) {
    if (argc != 2) return 1;
    char* path = *(argv + 1);
    file = fopen(path, "r");
    if (file == NULL) return 1;
    in_order_traversal_print(0L);
    fclose(file);
    return 0;
}
```

```c
#define FILENAME "infile"

/* Basically sort < infile, infile as made above. */
int main(void) {
  // Set up infile
  mkinfile(); // Makes a file called "infile"

  pid_t p; int fd_inp;

  if ((fd_inp = open(FILENAME, O_RDONLY | O_CLOEXEC)) == -1) {
    perror("open input file :( ");
    return 1;
  }

  /* Opening before fork-exec allows you to: If opening fails, 
  don't bother to fork-exec at all. */
  if ((p = fork()) == -1) {
    perror("fork :( ");
    return 1;
  } else if (p != 0) {
    /* If you have nothing left to do, you can quit rn. */
    close(fd_inp);
    wait(NULL);
    return 0;
  } else {
    /* Child. Here be file redirection! */
    dup2(fd_inp, 0);
    // Note fd_inp is marked close-on-exec. execlp will close it
    if (execlp("sort", "sort", (char*)NULL) == -1) {
      perror("exec :( ");
      return 1;
    }
  }
}
```


```c

int main(int argc, char *argv[])
{
  pid_t p = fork());
  if ((p == -1) { perror(":("); return 1;
  } else if (p == 0) {
    // child code
    // Choose my handler for SIGINT.
    struct sigaction a;
    a.sa_handler = handler;
    sigfillset(&a.sa_mask);
    a.sa_flags = 0;
    sigaction(SIGINT, &a, NULL);

    int r, e;

    // Wait for any signal using pause. Three possibilities:
    // a. If killed by signal: this code won't even know :)
    // b. If signal ignored: pause keeps waiting.
    // c. If signal handled: pause returns -1, errno = EINTR
    r = pause();
    e = errno;
    printf("pause syscall returns %d, errno=%d: %s\n", r, e, strerror(e));
    // If pause returns, I want to do normal exit.
    return 0;
  } else {
    // parent code
    printf("child PID=%d\n", p);
    printf("kill %d\n", p);
    // Delay a bit to let child reach "pause", then send SIGINT.
    sleep(1);
    kill(p, SIGINT);
    // Now wait and report.
    int s;
    wait(&s);
    if (WIFEXITED(s)) {
      printf("child normal exit code: %d\n", WEXITSTATUS(s));
    } else if (WIFSIGNALED(s)) {
      printf("child died by signal %s(%d)\n", strsignal(WTERMSIG(s)), WTERMSIG(s));
    }
    return 0;
  }
}

```


```c
int cfd;
struct sockaddr_in a;

memset(&a, 0, sizeof(struct sockaddr_in));
a.sin_family = AF_INET;
a.sin_port = htons(MY_PORT);
if (0 == inet_pton(AF_INET, argv[1], &a.sin_addr)) {
	fprintf(stderr, "That's not an IPv4 address.\n");
	return 1;
}

cfd = socket(AF_INET, SOCK_STREAM, 0);

if (-1 == connect(cfd, (struct sockaddr *)&a, sizeof(struct sockaddr_in))) {
	perror("connect");
	return 1;
} 
```
```c
// For server, include exact same as abv but minor tweeks + the below
listen(sfd, 2); // do error handling
for (;;) {
	int cfd, n;
	struct sockaddr_in ca;
	socklen_t sinlen;
	char x;
	
	sinlen = sizeof(struct sockaddr_in);
	cfd = accept(sfd, (struct sockaddr *)&ca, &sinlen);
	print_client_address("Got client", &ca);
	// Bad clients can close before we read, always check return value.
	if (read(cfd, &x, 1) == 1) {    // (*)
		x++;
		write(cfd, &x, 1);            // (**)
		// if bad client closes b4 write + we ignored SIGPIPE
		// then write returns -1 and errno == EPIPE. Check for that!
	}
	close(cfd);
}
```


```c
FD_ZERO(&readfds);
FD_SET(0, &readfds);
FD_SET(pipefd[0], &readfds);
printf("calling select\n");
// Because I installed signal handlers, select can return -1 after handled
// signals. No worries, just keep calling.
while (select(pipefd[0]+1, &readfds, NULL, NULL, NULL) == -1) {}
if (FD_ISSET(0, &readfds)) {
  char line[1024];
  if (fgets(line, 1023, stdin) != NULL) {
	printf("user entered %s\n", line);
  } else {
	printf("user ends, bye!\n");
	break;
  }
}
```