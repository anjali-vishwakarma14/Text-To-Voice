let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

function populatedVoices(){
    voices = window.speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        const option= document.createElement("option");
        option.value = i;
        option.textContent = `${voice.name} (${voice.lang})`;
        voiceSelect.appendChild(option);
    });

    speech.voice = voices[0];
}

window.speechSynthesis.onvoiceschanged = populatedVoices;

populatedVoices();

    // voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));


voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

document.querySelector('button').addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();

    if(text){
        window.speechSynthesis.cancel();
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }else{
        alert("Please enter some text.");
    }
});