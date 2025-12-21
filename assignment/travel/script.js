document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateBill);

function calculateBill() {
  let kmValue = document.getElementById("kmInput").value;
  let errorMsg = document.getElementById("errorMsg");
  let result = document.getElementById("result");
  let breakdown = document.getElementById("breakdown");

  errorMsg.innerText = "";
  breakdown.innerHTML = "";
  result.classList.add("d-none");

  if (kmValue === "" || isNaN(kmValue) || kmValue < 0) {
    errorMsg.innerText = "Please enter a non-negative number of kilometres";
    return;
  }

  let km = Number(kmValue);

  let slab1 = Math.min(km, 10);
  let slab2 = Math.min(Math.max(km - 10, 0), 40);
  let slab3 = Math.max(km - 50, 0);

  let cost1 = slab1 * 11;
  let cost2 = slab2 * 10;
  let cost3 = slab3 * 9;

  let total = cost1 + cost2 + cost3;

  breakdown.innerHTML += `<li>${slab1} km × Rs.11 = Rs.${cost1.toFixed(
    2
  )}</li>`;
  breakdown.innerHTML += `<li>${slab2} km × Rs.10 = Rs.${cost2.toFixed(
    2
  )}</li>`;
  breakdown.innerHTML += `<li>${slab3} km × Rs.9 = Rs.${cost3.toFixed(2)}</li>`;

  document.getElementById("totalAmount").innerText = total.toFixed(2);
  result.classList.remove("d-none");
}
