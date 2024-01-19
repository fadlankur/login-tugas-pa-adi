function checklogin() {
  var username = document.getElementById
  ("form_login").username.value;
  var password = document.getElementById
  ("form_login").password.value;
  if  (username == "saya" && password == "1919"){
    alert("berhasil login");
    window.location = "loop.html";
  } else{
    alert("gagal login");
  }
}

document.getElementById("form_login").addEventListener("submit",function(event){
  event.preventDefault();
  checklogin();
});