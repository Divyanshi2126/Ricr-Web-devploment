const marker = document.getElementById("marker");

function playSound() {
  document.getElementById("clickSound").play();
}

// STATE COORDINATES
const coordinates = {
  "jammu and kashmir": { x: 302, y: 72 },
  "ladakh": { x: 347, y: 48 },
  "punjab": { x: 285, y: 132 },
  "haryana": { x: 305, y: 155 },
  "delhi": { x: 316, y: 168 },
  "rajasthan": { x: 265, y: 228 },
  "uttar pradesh": { x: 356, y: 220 },
  "bihar": { x: 420, y: 240 },
  "jharkhand": { x: 430, y: 285 },
  "west bengal": { x: 472, y: 268 },
  "odisha": { x: 445, y: 350 },
  "chhattisgarh": { x: 385, y: 325 },
  "madhya pradesh": { x: 330, y: 318 },
  "gujarat": { x: 210, y: 200 },
  "maharashtra": { x: 290, y: 400 },
  "goa": { x: 278, y: 435 },
  "karnataka": { x: 298, y: 505 },
  "telangana": { x: 365, y: 395 },
  "andhra pradesh": { x: 398, y: 455 },
  "tamil nadu": { x: 350, y: 610 },
  "kerala": { x: 300, y: 640 },
  "sikkim": { x: 455, y: 205 },
  "arunachal pradesh": { x: 545, y: 185 },
  "assam": { x: 505, y: 220 },
  "meghalaya": { x: 495, y: 255 },
  "manipur": { x: 550, y: 265 },
  "nagaland": { x: 558, y: 245 },
  "tripura": { x: 503, y: 295 },
  "mizoram": { x: 525, y: 315 }
};


function searchLocation() {
  const state = document.getElementById("searchState").value.toLowerCase();

  if (coordinates[state]) {
    marker.style.left = coordinates[state].x + "px";
    marker.style.top = coordinates[state].y + "px";
    marker.style.display = "block";
    playSound();
  } else {
    alert("State not found!");
  }
}

// 🎤 VOICE SEARCH
function startVoiceSearch() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript.toLowerCase();
    document.getElementById("voiceText").innerText = "You said: " + spokenText;
    document.getElementById("searchState").value = spokenText;
    searchLocation();
  };

  recognition.onerror = () => alert("Microphone error or permission denied");
}
