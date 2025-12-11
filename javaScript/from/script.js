function submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const db = document.getElementById("DOB").value.trim();


//   validation
//   if(data is invalid)
//     alert()

// if(/^[A-Za-z]+$/.test(nm)){
//     console.log("true input");
// }else{
//     console.log("wrong input");
// }

if(/^[A-Za-z]+$/.test(nm)){
    alert("Wrong intput")
}

  const data ={
    fullName:nm,
    email:em,
    phone:ph,
    DOB:db,

  };
  console.log(data);
}
