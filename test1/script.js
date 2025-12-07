const courses = [
  { title: "Web Development", level: "Beginner", price: "10000/-" },
  { title: "JavaScript", level: "Intermediate", price: "15000/-" },
  { title: "Python Programming", level: "Beginner", price: "17000/-" },
  { title: "Data Structures", level: "Advanced", price: "20000/-" }
];

const courseContainer = document.getElementById("courseContainer");

courses.forEach((c) => {
  const card = document.createElement("div");
  card.className = "col-md-3";
  card.innerHTML = `
    <div class="card p-3">
      <h4>${c.title}</h4>
      <p>Level: ${c.level}</p>
      <p>Price: ${c.price}</p>
      <a href="registration.html?course=${c.title}" class="btn btn-primary">Enroll</a>
    </div>
  `;
  courseContainer.appendChild(card);
});

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("cname").value.trim();
  const email = document.getElementById("cemail").value.trim();
  const msg = document.getElementById("cmessage").value.trim();
  if(name === "" || email === "" || msg === "" || msg.length < 10 || !email.includes("@")){
    alert("Please enter valid details");
  } else {
    alert("Thank you for contacting us, " + name + "!");
  }
});
