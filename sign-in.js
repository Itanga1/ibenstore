/*Dropdown menu */
function dropdownMenu(){
  let dropdown = document.getElementById('menu-dropdown');
  if(dropdown.style.display==='none'){
    dropdown.style.display='flex';
  }else{
    dropdown.style.display='none';
  }
}

/* Sign in and place order*/
let signIn = document.querySelector("#form-container form");
let placeOrder = document.querySelector('#form-container section');


function hideSignIn(){
  signIn.style.display="none";
  placeOrder.style.display = "flex"
}
let noAccount = document.getElementById('no-account');
noAccount.addEventListener('click', hideSignIn);

function hidePlaceOrder(){
  placeOrder.style.display = "none";
  signIn.style.display = "flex";
}
let goback = document.getElementById('goback');
goback.addEventListener('click', hidePlaceOrder);

let forgotPassword = document.getElementById('forgot-password');
function forgot(){
  alert(
    `Unbelievable !! 
click 'Don't have account' below to continue.`
  );
}
forgotPassword.addEventListener('click', forgot);

/*order filling*/
function submission(){
  let description = document.getElementById('description');
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let phone = document.getElementById('phone');
  if(description.value===''||name.value===''||email.value===''||phone.value===''){
    alert('Fill all fields');
  }else{
    alert(`      Order Placed Successfully!! 
      You will receive feedback via email.
      Thank you!`);
  }
}
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click',submission);