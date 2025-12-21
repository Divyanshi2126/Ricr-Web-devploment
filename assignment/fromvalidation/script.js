function Submit() {
  const name = document.getElementById("FullName").value.trim();
  const email = document.getElementById("Email").value.trim();
  const mobile = document.getElementById("Mobile").value.trim();
  const dob = document.getElementById("DOB").value;
  const qualification = document.getElementById("Qualification").value;
  const percent = document.getElementById("Percentage").value.trim();
  const address = document.getElementById("Address").value.trim();
  const city = document.getElementById("City").value.trim();
  const pincode = document.getElementById("Pincode").value.trim();
  const guardianName = document.getElementById("GuardianName").value.trim();
  const guardianMobile = document.getElementById("GuardianMobile").value.trim();
  const source = document.getElementById("Source").value;

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll(".Error").forEach((e) => (e.innerText = ""));

  /* 1. Full Name */
  if (!name || !/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("NameError").innerText =
      "Please enter a valid name";
    isValid = false;
  }

  /* 2. Email */
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("EmailError").innerText =
      "Please enter a valid email address";
    isValid = false;
  }

  /* 3. Mobile Number */
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    document.getElementById("MobileError").innerText =
      "Enter a 10-digit Indian mobile number";
    isValid = false;
  }

  /* 4. DOB */
  if (!dob) {
    document.getElementById("DOBError").innerText = "Required";
    isValid = false;
  } else {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    if (age < 15) {
      document.getElementById("DOBError").innerText =
        "You must be at least 15 years old";
      isValid = false;
    }
  }

  /* 5. Qualification */
  if (!qualification) {
    document.getElementById("QualificationError").innerText =
      "Please select a qualification";
    isValid = false;
  }

  /* 6. Percentage / Grade */
  if (!/^(100|[0-9]{1,2}|[A-Fa-f])$/.test(percent)) {
    document.getElementById("PercentageError").innerText =
      "Enter a valid percentage or grade";
    isValid = false;
  }

  /* 7. Address */
  if (!address) {
    document.getElementById("AddressError").innerText =
      "Enter your full address";
    isValid = false;
  }

  /* 8. City */
  if (!city || !/^[A-Za-z ]+$/.test(city)) {
    document.getElementById("CityError").innerText =
      "Please enter a valid city name";
    isValid = false;
  }

  /* 9. Pin Code */
  if (!/^\d{6}$/.test(pincode)) {
    document.getElementById("PincodeError").innerText =
      "Enter a valid 6-digit pin code";
    isValid = false;
  }

  /* 10. Guardian Name */
  if (!guardianName || !/^[A-Za-z ]+$/.test(guardianName)) {
    document.getElementById("GuardianNameError").innerText =
      "Enter guardian's full name";
    isValid = false;
  }

  /* 11. Guardian Mobile */
  if (!/^[6-9]\d{9}$/.test(guardianMobile)) {
    document.getElementById("GuardianMobileError").innerText =
      "Enter a valid 10-digit contact number";
    isValid = false;
  }

  /* 12. Source */
  if (!source) {
    document.getElementById("SourceError").innerText = "Select an option";
    isValid = false;
  }

  if (!isValid) return;

  alert("🎉 Registration Successful!");

  console.log({
    name,
    email,
    mobile,
    dob,
    qualification,
    percent,
    address,
    city,
    pincode,
    guardianName,
    guardianMobile,
    source,
  });
}
