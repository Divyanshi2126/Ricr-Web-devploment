function submit() {
  const nm = document.getElementById("fullName").value.trim();
  const em = document.getElementById("email").value.trim();
  const ph = document.getElementById("phone").value.trim();
  const db = document.getElementById("DOB").value.trim();

document.querySelectorAll(".Error").forEach((Element)=>{
  Element.innerHTML="";
});

if(!nm ){
  document.getElementById("nameerror").innerHTML="Required";
  return;
}else{
  (!+/^[A-Za-z]+$/.test(nm)) 
    document.getElementById("nameError").innerText= "only albhapet and space allowed";
    return;
  }


  

  //   validation
  //   if(data is invalid)
  //     alert()

  // if(/^[A-Za-z]+$/.test(nm)){
  //     console.log("true input");
  // }else{
  //     console.log("wrong input");
  // }

  if (!+/^[A-Za-z]+$/.test(nm)) {
    document.getElementById("nameError").innerText= "only albhapet and space allowed";
    return;
  }

  if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(em)) {
    alert("Wrong email");
    return;
  }

  if(!/^[6-9]\d{9}$/.test(ph))
  {
     alert("Wrong phone");
    return;
  }

  const currentyear= new Date().getFullYear;
  const birthyear= number(db.split("-")[0]);

  if(currentyear-birthyear<17){
    alert("not eligbile");
    return;
  }

  // use logic age Calculatore and dont allow less then 18 year


  const data = {
    fullName: nm,
    email: em,
    phone: ph,
    DOB: db,
  };
  console.log(data);
}
