function calculateAge() {
    const birthDateValue = document.getElementById("birthDate").value;
    const currentDateValue = document.getElementById("currentDate").value;
    const result = document.getElementById("result");

    if (!birthDateValue || !currentDateValue) {
        result.textContent = "Please select both dates.";
        result.className = "text-danger";
        return;
    }

    const birthDate = new Date(birthDateValue);
    const currentDate = new Date(currentDateValue);

    if (currentDate < birthDate) {
        result.textContent = "Current date must be after birth date.";
        result.className = "text-danger";
        return;
    }

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    result.textContent = `Your age is ${age} years.`;
    result.className = "text-success";
}
