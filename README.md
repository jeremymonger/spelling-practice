# Basic Spelling Game

## Introduction
The purpose of this project is to create a little game for my niece to practice her spelling and keyboard skills. A primary focus is to push phonetic understanding.  

In its current form, a random word and corresponding image is displayed. Then word is either (50% chance of either) verbally spelled or "sounded out". The user must then correctly type in the word to receive a new one.

There is currently no feedback on incorrect presses.

#### Todo:
1. Move from completely random next words to "alliterative" (shared first letter) or "rhyming" (shared rest). For instance, if the current word is *bug*, the next word may be *bat* or *rug*. I may use color or some other visual element to push the pattern recognition.
2. Figure out how to handle word transitions. Neither instant transfer, nor requiring a key press feel correct.
3. Pretty it up. Right now, its default font with random images off pixabay.
4. Add some sort of scoring mechanism. Potentially just a counter.
