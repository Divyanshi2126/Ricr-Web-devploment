
  const stateCoordinates = {
  "jammu kashmir": { x: 320, y: 110 },
  "ladakh": { x: 360, y: 90 },
  "punjab": { x: 325, y: 160 },
  "himachal pradesh": { x: 350, y: 150 },
  "uttarakhand": { x: 390, y: 180 },
  "haryana": { x: 350, y: 200 },
  "delhi": { x: 370, y: 210 },
  "rajasthan": { x: 300, y: 260 },
  "uttar pradesh": { x: 430, y: 250 },
  "bihar": { x: 480, y: 260 },
  "jharkhand": { x: 490, y: 300 },
  "west bengal": { x: 550, y: 310 },
  "sikkim": { x: 520, y: 270 },
  "assam": { x: 610, y: 260 },
  "arunachal pradesh": { x: 650, y: 230 },
  "nagaland": { x: 640, y: 280 },
  "manipur": { x: 640, y: 300 },
  "mizoram": { x: 620, y: 320 },
  "tripura": { x: 600, y: 330 },
  "meghalaya": { x: 590, y: 290 },
  "gujarat": { x: 260, y: 350 },
  "madhya pradesh": { x: 350, y: 330 },
  "maharashtra": { x: 330, y: 420 },
  "chhattisgarh": { x: 430, y: 370 },
  "odisha": { x: 490, y: 410 },
  "telangana": { x: 380, y: 450 },
  "andhra pradesh": { x: 420, y: 520 },
  "karnataka": { x: 310, y: 500 },
  "tamil nadu": { x: 360, y: 600 },
  "kerala": { x: 300, y: 620 },
  "goa": { x: 300, y: 460 },
  "puducherry": { x: 375, y: 580 },
  "andaman nicobar islands": { x: 550, y: 750 },
  "lakshadweep": { x: 200, y: 700 }
};


document.getElementById("searchBtn").addEventListener("click", searchState);

function searchState() {
  const query = document.getElementById("searchInput").value.toLowerCase().trim();
  const marker = document.getElementById("marker");

  if (stateCoordinates[query]) {
    const { x, y } = stateCoordinates[query];
    marker.style.left = x + "px";
    marker.style.top = y + "px";
    marker.style.display = "block";
  } else {
    alert("❌ State not found! Try again.");
  }
}
