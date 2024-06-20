

window.speechSynthesis.onvoiceschanged = function() {
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicearea=document.getElementById("voices");
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// Populate the voices dropdown
function populateVoices() {
  let voices = window.speechSynthesis.getVoices();
  voices.forEach(voice => {
    let option = document.createElement('option');
    option.textContent = voice.name;
    voicearea.appendChild(option);
  });
}

// Set the voice for the message
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}

// Toggle speech synthesis
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    msg.text = document.querySelector('[name="text"]').value;
    speechSynthesis.speak(msg);
  }
}

// Set options for rate and pitch
function setOption() {
  msg[this.name] = this.value;
  toggle(false);
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

// Initialize voices
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoices;
} else {
  populateVoices();
}

};