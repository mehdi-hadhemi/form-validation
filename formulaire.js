 const inputname=document.getElementById("name");
const inputprenom=document.getElementById("prenom");
const inputemail=document.getElementById("adressemail");
const inputmdp=document.getElementById("password");
const validationnom= /^[a-z]{4,}/;
const validationprénom = /^[a-z]{5,}/;
const validationemail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
const validationmdp =/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]{8,}$/;

inputname.addEventListener('keyup', () => validate(inputname, validationnom))
inputprenom.addEventListener('keyup', () => validate(inputprenom, validationprénom))
inputemail.addEventListener('keyup', () => validate(inputemail, validationemail))
inputmdp.addEventListener('keyup', () => validate(inputmdp, validationmdp))


function validate(input, condition){
    var res = condition.test(input.value)
    if(res){
        // input.style.background = 'green'
        input.classList.replace('invalid', 'valid')
    }else{
        // input.style.background = 'red'
        input.classList.add('invalid')

    }
}
// document.getElementById("reset").addEventListener("click", function())
// {
//     document.getElementsByClassName("texto").innerText=""
// }

document.getElementById("send").addEventListener("click", function(e){ 
    e.preventDefault();
  var erreur;
  var inputs=document.getElementsByClassName("texto");
  for (var i=0;i< inputs.length;i++){
      if(!inputs[i].value){
          erreur="veuiller renseigner tous les chapms du formulaires"
      } 
  }
  if (erreur){
      e.preventDefault();
document.getElementById("erreur").innerText= erreur;
// return false
}else{
    alert('formulaire envoyé')
  }

});
