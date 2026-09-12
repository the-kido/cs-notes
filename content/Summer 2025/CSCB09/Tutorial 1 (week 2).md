For 1), the problem is that we want to run `mv` BUT the file name is literally `--help` which is convinently what `--help`, the "option" for `mv` is

Answer is `mv -- --help help.txt`

it seems to me that you should add the flags / options before actually writing the arguments (?)

We're on 6 now okay great yay.
-

ROT13 for caeser cipher

#0 `ls -t -r`

#1 `mv -- --help help.txt`

#2. `cat cat-in-1.txt - cat-in-2.txt`

#3. `head --lines=-1 headtail-in.txt`

#4. `head --lines=1 headtail-in.txt`

#5. `wc headtail-in.txt --lines`

#6. `cat rot13.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m' > spoilers.txt`

Better: `tr 'A-Za-z' 'N-ZA-Mn-za-m' < rot13.txt  > spoilers.txt`

#7 `tr --delete 2u`

#8 ` yes nonono | head --lines=42`
- Wait whats the diff between `|` and `>` ??

#9 `tee tee-out.txt | tee tee-acc.txt -a`
- Okay so tee "returns" the same thing I put into standard in. I "pipe" that such that the next tee gets the standard in from before (it's not "erased" ig so in that sense it doesn't need to ask for more info from le user). Then the flag `-a` does the rest of the work.

#10 `comm menu-new.txt menu-old.txt -2 -3`

Consider `Usage: tee [OPTION]... [FILE]...` in the --help 
> I think ... represents "serveral" inputs i thinnnkk



#todo how can I have a file, and delete everything that the user says to delete
Even more: how can I let the user input text, and then input the characteres to delete, and finally return that output into a file or something.

#todo how can i use a text file to pass in arguments for a command?
like, can I have a file with string1 and string2 for `cat`