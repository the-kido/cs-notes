This is a separate video lecture
https://utoronto-my.sharepoint.com/personal/rawad_abouassi_utoronto_ca/_layouts/15/stream.aspx?id=%2Fpersonal%2Frawad%5Fabouassi%5Futoronto%5Fca%2FDocuments%2FAndroid%20Testing%2Emp4&ga=1&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2Ebd2e686a%2D87ff%2D4479%2D9b67%2D44c212965b11

Biggest benefit of MVP is testing, especially for mobile development.
![[MVP diagram.png]]

![[Local and Instrumented Tests.png]]
- Unit tests are easy to make. Doesn't need emulator to make sense (i.e. calculating square root doesn't need android to run)
- Pyramid is ordered hardest to easiest. The top is the hardest; the bottom is the easiest. However, it's suggested about 70% of tests are unit tests, 20% are integration tests, and 10% are UI test

Mock objects are fake objects that represent real objects we want to interact with
- i.e. if u want to test a feature to do with buying something *without really buying something*.
- Also used for debugging. If you have a test and it has 