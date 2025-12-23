let selectedProduct = {};

function selectProduct(name, brand, price) {
  selectedProduct = { name, brand, price };
  console.log("Selected Product:", selectedProduct);
}

document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const payment = document.getElementById("payment").value;
      const quantity = document.getElementById("quantity").value;

      console.log({
        name,
        address,
        phone,
        email,
        payment,
        quantity,
        selectedProduct,
      });

      alert(`Thank you for Shopping, ${name}!`);
      checkoutForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("cname").value;
      const email = document.getElementById("cemail").value;
      const message = document.getElementById("message").value;

      if (!email.includes("@") || message.length < 10) {
        alert("Please enter valid details!");
        return;
      }

      console.log({ name, email, message });
      alert(`Thank you for contacting us, ${name}!`);
      contactForm.reset();
    });
  }
});
