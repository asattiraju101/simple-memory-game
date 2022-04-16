# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Abhinav Sattiraju

Time spent: 2.5 hours spent in total

Link to project: https://glitch.com/edit/#!/shared-wide-atlasaurus

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [ ] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- I found an error due to the timeout functions that when the user completed a segment of a pattern, hit the Stop button, and restarted the game, all within a second or two, the game would play 2 notes. This is because the timeout functions are asynchronous. Therefore, I added a segment of code such that all setTimeout calls would be cleared when a user restarted the game.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![H1, P, Button Tags](https://i.imgur.com/eNjKHkK.gif)
![Button functionality and Losing](https://i.imgur.com/taNMSE1.gif)
![Winning](https://i.imgur.com/E9osMsb.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

   No outside sources used to complete this challenge!

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

   I found this challenge fairly straightforward. However, after I completed the challenge's initial requirements,
   I noticed a small error where when I completed a pattern without error and restarted the game within a second, multiple buttons would
   play tones at the same time. I found this challenging at first because I thought it was an error with my game logic, but after several
   minutes of debugging, I realized that this was due to the setTimeout function's asynchronous nature. It came to me that it didn't matter
   that when I quickly restarted the game via the button press and the pattern was reset, due to the "scheduling" of the desired function callback
   within setTimeout(), it would execute regardless during the game state. This was the reason behind multiple tones playing at once if I
   completed a pattern and restarted the game quickly. To fix this, I recalled that I could use the clearTimeout() function, which would clear the timer
   instantiated during the setTimeout() call. Therefore, I collected all return values - the timers - of the setTimeout functions in an array,
   which I would loop over and call the clearTimeout function over each element. I looped over this array and performed the clearing right when
   the user started the game, when I also resetted the pattern and progress variables. This fixed the issue, and I enjoyed this process, as it was
   the result of identifying the problem via strategic debugging and fixing it via outlining the desired change and remembering the desired
   function to be used.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

   So far, my web development experience has been mainly on the front-end. I have developed my personal website and am currently working
   towards developing the website within a team for the Big Data Big Impact student organization at Georgia Tech. These experiences have
   helped me gain more comfort in programming in HTML, CSS, Javascript, React.js, Tailwind CSS, and Bootstrap. I also have some experience
   with Flask for back-end development via hackathon involvments. However, what I hope to learn is Full Stack Development, where I can
   bridge the two - front-end and back-end - together to create a complete, unique project. This is what I have most questions about. There
   are so many frameworks and tools for handling front-end and back-end tasks - are there heuristics for choosing certain ones over others? How
   do I evaluate a framework compared to others? It gets confusing for me at times, because there is so much to choose from. Svelte or React?
   How does Next.js fit into the scenario? What about Nest.js vs. Express.js for the back-end? Maybe I can't compare these frameworks head on, and
   maybe they could be used in tandem. This is where I currently don't know enough to fully understand the space, but I get very excited at this topic,
   as there is so much for me to learn, and I know that
   I am making slow but steady steps towards obtaining a greater understanding of Full Stack Development. I am thinking of project ideas, reading
   documentation, and seeing examples of various frameworks used to get a better idea of what I could use in my potential projects.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

   If I had more time to work on this project, I would first implement all the optional functionality. I also love customization, so I could increase the
   complexity of the app by adding sliders for the user to choose how long each note was played, the delay between notes played,
   the number of buttons, and more game-changing features. I would also improve the styling of the site, as I love visually appealing sites. I could add various backgrounds to the game
   and to the buttons, from images to gradients to SVG's. I would also change the game where the user would have an initial stage of memorizing the sound of each button; then, the patterns
   of sounds would play without showing the buttons. Then, the buttons would appear, and the user would have to reproduce the pattern. This would emphasize more of
   the audio part of the memorization of patterns in addition to the visual part. Finally, I also noticed that the user could click on the buttons as the audio was playing instead of
   waiting till the audio completed. This is essentially cheating, and I would implement a function and CSS class not changing the color of the buttons and not keeping track of which button is pressed
   while the audio is playing. This would disallow the user from cheating when the audio is playing.

## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)

## License

    Copyright Abhinav Sattiraju

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
