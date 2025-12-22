// Standalone calculation function (ES6 style)
function calculateGrossSalary(basic) {
  const hra = basic * 0.2; // 20% HRA
  const da = basic * 0.4; // 40% DA
  const gross = basic + hra + da;

  return { basic, hra, da, gross };
}

// Format amount in Indian Rupees
function formatINR(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  const basicInput = document.getElementById("basicSalary").value;
  const errorMsg = document.getElementById("errorMsg");
  const resultDiv = document.getElementById("result");
  const successMsg = document.getElementById("successMsg");
  const spinner = document.getElementById("spinner");
  const btnText = document.getElementById("btnText");
  const button = this;

  errorMsg.innerText = "";
  successMsg.innerText = "";
  resultDiv.classList.add("d-none");

  // Validation
  if (basicInput === "" || isNaN(basicInput) || basicInput < 0) {
    errorMsg.innerText = "Please enter a valid salary (0 or greater)";
    return;
  }

  button.disabled = true;
  spinner.classList.remove("d-none");
  btnText.innerText = "Calculating...";

  setTimeout(() => {
    const basic = Number(basicInput);
    const salary = calculateGrossSalary(basic);

    document.getElementById("resBasic").innerText = formatINR(salary.basic);
    document.getElementById("resHra").innerText = formatINR(salary.hra);
    document.getElementById("resDa").innerText = formatINR(salary.da);
    document.getElementById("resGross").innerText = formatINR(salary.gross);

    resultDiv.classList.remove("d-none");
    successMsg.innerText = "Salary calculated successfully ✔";

    button.disabled = false;
    spinner.classList.add("d-none");
    btnText.innerText = "Calculate Gross Salary";
  }, 500);
});

function resetForm() {
  document.getElementById("basicSalary").value = "";
  document.getElementById("result").classList.add("d-none");
  document.getElementById("errorMsg").innerText = "";
  document.getElementById("successMsg").innerText = "";
}
