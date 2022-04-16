/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/* 
 - Noticed issue with setTimeouts, added that feature
 - need to prevent user from clicking while animation is playing ,cheating


*/

let volume = 0.5;
let tonePlaying = false;

let clueHoldTime = 1000;
let cluePauseTime = 333;
const nextClueWaitTime = 1000;

let state = "Start";
let pattern = [];
let progress = 0;
let guessCounter = 0;

let timeouts = [];

function initializePattern() {
  clueHoldTime = 1000;
  cluePauseTime = 333;
  pattern = [];
  progress = 0;
  for (let i = 0; i < 8; i++) {
    pattern.push(Math.floor(Math.random() * 4) + 1);
  }
}

function highlightBtn(num) {
  document.querySelector("#button" + num).classList.add("lit");
}

function clearBtn(num) {
  document.querySelector("#button" + num).classList.remove("lit");
}

function gamefunction() {
  if (state == "Start") {
    for (let i = 0; i < timeouts.length; i++) {
      clearTimeout(timeouts[i]);
    }
    timeouts = [];

    state = "Stop";
    initializePattern();
    document.querySelector("#button").innerHTML = state;
    playClueSequence();

    return;
  } else if (state == "Stop") {
    endState(-1);
    return;
  }
}

function playSingleClue(btn) {
  if (state == "Stop") {
    highlightBtn(btn);
    playTone(btn, clueHoldTime);
    timeouts.push(setTimeout(clearBtn, clueHoldTime, btn));
  }
}

function playClueSequence() {
  if (state == "Stop") {
    guessCounter = 0;
    cluePauseTime -= 30;
    clueHoldTime -= 100;
    let delay = nextClueWaitTime; //set delay to initial wait time
    for (let i = 0; i <= progress; i++) {
      // for each clue that is revealed so far
      console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
      timeouts.push(setTimeout(playSingleClue, delay, pattern[i])); // set a timeout to play that clue
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
  }
}

function endState(num) {
  state = "Start";
  document.querySelector("#button").innerHTML = state;
  if (num == 0) {
    alert("You lost!");
  } else if (num == 1) {
    alert("You won!");
  }
}

function guess(btn) {
  if (state == "Start") {
    return;
  } else {
    if (pattern[guessCounter] != btn) {
      endState(0);
      return;
    } else if (pattern[guessCounter] == btn && guessCounter < progress) {
      guessCounter++;
    } else if (pattern[guessCounter] == btn && guessCounter == progress) {
      progress++;
      if (progress == pattern.length) {
        endState(1);
        return;
      }
      playClueSequence();
    }
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 200.0,
  2: 300.0,
  3: 400.0,
  4: 500.0,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  timeouts.push(
    setTimeout(function () {
      stopTone();
    }, len)
  );
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
