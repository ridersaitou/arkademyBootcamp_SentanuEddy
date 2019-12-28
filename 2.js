function validateName() {
  var x = document.forms["myForm"]["fname"].value;
  var regexName = /\b[A-Z0-9]{3,}\b/;
  if(regexName.test(x.value) == false){
    alert("Nama harus huruf kapital, minimal 3 karakter");
    x.focus();
    return false;
  }
  if (x.value == "") {
    alert("Name tidak boleh kosong");
    x.focus();
    return false;
  }
   return true;
}

function validateAge(){
    var y = document.forms["myForm"]["fage"].value;
    var regexAge = /^\d{2}$/;
    if(regexAge.test(y.value) == false){
   alert("Format umur 2 digit");
   y.focus();
   return false;
    }
    if(y.value == " "){
      alert("Age tidak boleh kosong");
      y.focus();
      return false;
    }
    return true;
  }

  function validateUname(){
    var y = document.forms["myForm"]["funame"].value;
    var regexUname = /[a-z]{4}[_|.][0-9]{3}/;
    if(regexUname.test(z.value) == false){
   alert("Format username kombinasi dari 4 huruf kecil lalu diikuti underscore/garis bawah “_” atau titik “.” dan 3 digit angka");
   z.focus();
   return false;
    }
    if(z.value == " "){
      alert("Username tidak boleh kosong");
      z.focus();
      return false;
    }
    return true;
  }