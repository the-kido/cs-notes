There are 4 classes relevant to this 
```java
// For writing
FileWriter fw = new FileWriter("fileDirectory.txt");
PrintWriter pw = new PrintWriter(fw);

// Related methods
pr.println("Here is a line!");
fw.close(); // close otherwise everything will be lost

// For reading
FileReader fr = new FileReader("fileDirectory.txt");
BufferedReader br = new BufferedReader(fr);


String line = br.readLine(); // Reads the next unread line. Will return null when there are no more lines left in the file.
fw.close(); // close otherwise everything will

```

```java
// import for all things IO
import java.io.*;

public class Main {
	public static void main(String[] args) {
		// Writing
		try {
			FileWriter fr = new FileWriter("myFile1.txt");
			PrintWriter pr = new PrintWriter(fr);
			// Adds a line to the file
			pr.println("Hello");
			fr.close();
	
		} catch (IOException e) {
				
		} 


		try {
			FileReader fr = new FileWriter("myFile1.txt");
			BufferedReader br = new BufferedReader(fr);
			String strLine = br.readLine();
			while (strLine != null) {
				System.out.println(strLine);
				strLine = br.readLine();
			}
			// Close otherwise file will disapear!
			fr.close();
	
		} catch (IOException e) {
			
		} 
	}
}
```


## Adding a line to the end of the file
```java
FileWriter fr = new FileWriter(director, true); // starts writing at the end of the line
```

