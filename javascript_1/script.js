// alert("hii");


let age = 16;
const birthYear = 2008;
if (age >= 18 && birthYear < 2010){
    console.log('You are a adult');
}
else{
    console.log('you are a child!')
}
console.log("My age is", age)



let num1 = 5;
let num2 = 3;
let sum = num1 + num2;  // Performing addition

console.log("The result of the addition is: " + sum);

function toggleSearch() {
    var form = document.getElementById('searchForm');
    form.style.display = form.style.display === 'none' || form.style.display === '' ? 'block' : 'none';
}


let isSignUp = false;

function toggleForm() {
  isSignUp = !isSignUp;
  document.getElementById('form-title').textContent = isSignUp ? 'Registrarse' : 'Iniciar Sesión';
  document.querySelector('button').textContent = isSignUp ? 'Registrar' : 'Entrar';
  document.querySelector('.toggle').textContent = isSignUp
    ? '¿Ya tienes cuenta? Inicia sesión'
    : '¿No tienes cuenta? Regístrate';
}

function handleSubmit() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (isSignUp) {
    alert(`Registrado como ${user}`);
  } else {
    alert(`Bienvenido ${user}`);
  }
}
