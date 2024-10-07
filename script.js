let speech = new SpeechSynthesisUtterance();

document.getElementById("myBtn").addEventListener("click",()=>{
    speech.text = document.getElementById("myTextArea").value;
    window.speechSynthesis.speak(speech);
});
