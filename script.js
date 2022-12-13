var password= document.querySelector('.password_input');
var toggler= document.querySelector('#toggle');

// show hide the password function

showHidePassword = () =>{
if(password.type == 'password'){
password.setAttribute('type','text');
toggler.setAttribute('src', 'showed.png');

}else{
password.setAttribute('type','password');
toggler.setAttribute('src','hidden.png');
}
};
toggler.addEventListener('click',showHidePassword);