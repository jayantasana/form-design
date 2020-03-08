$(document).ready(function(){
    function checkForm(){

	if (document.form1.email.value.indexOf('@', 0) == -1) {
		alert("Please Enter a valid Email Address");
		document.form1.email.focus();
		return false;
	}
  else
  {
    setTimeout(function(){
   location.href = "https://myonlinestartup.com/rego/?id=ed08724";
    }, 1000);
    return true;
    }
  }
});