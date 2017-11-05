# Flashcard-Generator

Flashcard-Generator is a nodeJS application that uses the Inquirer npm package to present the user with flashcards.  All flashcards are hardcoded and can be added to by modifying the flashcard.js file.  At the start, the user can select whether they want to use a ‘basic’ flashcard or a ‘cloze’ flashcard:

![opening](/images/opening.png)

A basic flashcard is one that presents a question and the user provides an answer: 

![basic](/images/basic.png)

A cloze flashcard is one where a section of the sentence is removed and the user has to provide the missing part of the sentence:

![cloze](/images/cloze.png)

Selecting ‘end program’ will end the inquirer session:

![end](/images/end.png)