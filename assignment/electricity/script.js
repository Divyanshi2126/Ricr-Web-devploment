document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateBill);

function calculateBill() {
  const unitsInput = document.getElementById("units").value;
  const errorMsg = document.getElementById("errorMsg");
  const resultDiv = document.getElementById("result");
  const breakdown = document.getElementById("breakdown");

  errorMsg.innerText = "";
  breakdown.innerHTML = "";
  resultDiv.classList.add("d-none");

  // Validation
  if (unitsInput === "" || isNaN(unitsInput) || unitsInput < 0) {
    errorMsg.innerText = "Please enter a valid positive number of units";
    return;
  }

  let units = parseInt(unitsInput);
  let remaining = units;
  let subtotal = 0;

  // Slab calculations
  let slab1 = Math.min(remaining, 50);
  let cost1 = slab1 * 0.5;
  remaining -= slab1;

  let slab2 = Math.min(remaining, 150);
  let cost2 = slab2 * 0.75;
  remaining -= slab2;

  let slab3 = Math.min(remaining, 250);
  let cost3 = slab3 * 1.2;
  remaining -= slab3;

  let slab4 = remaining;
  let cost4 = slab4 * 1.5;

  subtotal = cost1 + cost2 + cost3 + cost4;
  let surcharge = subtotal * 0.2;
  let grandTotal = subtotal + surcharge;

  // Breakdown
  breakdown.innerHTML += `<li class="list-group-item">First 50 units: ${slab1} *₹0.50 = ₹${cost1.toFixed(
    2
  )}</li>`;
  breakdown.innerHTML += `<li class="list-group-item">51–200 units: ${slab2} *0.75 = ₹${cost2.toFixed(
    2
  )}</li>`;
  breakdown.innerHTML += `<li class="list-group-item">201–450 units: ${slab3}*₹1.20 = ₹${cost3.toFixed(
    2
  )}</li>`;
  breakdown.innerHTML += `<li class="list-group-item">Above 450 units: ${slab4} *1.50 = ₹${cost4.toFixed(
    2
  )}</li>`;

  document.getElementById("subtotal").innerText = "₹" + subtotal.toFixed(2);
  document.getElementById("surcharge").innerText = "₹" + surcharge.toFixed(2);
  document.getElementById("grandTotal").innerText = "₹" + grandTotal.toFixed(2);

  resultDiv.classList.remove("d-none");
}

function resetForm() {
  document.getElementById("units").value = "";
  document.getElementById("result").classList.add("d-none");
  document.getElementById("errorMsg").innerText = "";
}
