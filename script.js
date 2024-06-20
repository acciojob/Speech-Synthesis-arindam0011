

window.speechSynthesis.onvoiceschanged = function() {
const voicearea=document.getElementById("voices");
  let voices = window.speechSynthesis.getVoices();
  voices.forEach(voice => {
    let option = document.createElement('option');
    option.textContent = voice.name;
    voicearea.appendChild(option);
  });
};