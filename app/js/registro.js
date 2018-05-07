window.addEventListener('load', init, true);

function init(){
	console.log('INICIALIZAR')
	//QUITAR MANCHA COVER
	setTimeout(function(){
		coverTop = document.querySelector('.cover');
		coverTop.classList.remove('ver-cover');
	},1000)
	
	//BUSCAR ELEMENTOS DE EVENTOS
	email = document.querySelector('#input-email');
	nombre = document.querySelector('#input-nombre');
	password = document.querySelector('#input-password');
	verPassword = document.querySelector('#input-verPassword');
	back = document.querySelector('#btn-back');

	//EVENTOS EMAIL
	email.addEventListener('focus', function(){verLabel('email')}, true);
	email.addEventListener('blur', function(){esconderLabel('email')}, true);

	//EVENTOS PASSWORD
	password.addEventListener('focus', function(){verLabel('password')}, true);
	password.addEventListener('blur', function(){esconderLabel('password')}, true);

	//EVENTOS NOMBRE
	nombre.addEventListener('focus', function(){verLabel('nombre')}, true);
	nombre.addEventListener('blur', function(){esconderLabel('nombre')}, true);

	//EVENTOS PASSWORD CONFIRMAR
	verPassword.addEventListener('focus', function(){verLabel('verPassword')}, true);
	verPassword.addEventListener('blur', function(){esconderLabel('verPassword')}, true);

	//EVENTOS BACK
	back.addEventListener('click', function(){navegar('index')}, true);

	//CARGAR ELEMENTOS
	setTimeout(function(){
		cargarElementos()
	},900);
}
var i = 0;

function cargarElementos(){
	elementos = document.querySelectorAll('.datoUsuario');
	if (elementos.length > i) {
		elementos[i].classList.add('ver-datoUsuario');
		i++;
	}
	setTimeout(function(){
		cargarElementos();
	}, 200);
}

function navegar(pagina){
	coverBottom = document.querySelector('.cover');
	coverBottom.classList.add('ver-cover');
	setTimeout(function(){
		window.location.assign(pagina+'.html');
	},1500)
}

function verLabel(texto){
	document.getElementById('label-'+texto).classList.remove('escondido');
}

function esconderLabel(texto){
	if (document.getElementById('input-'+texto).value=="") {
		document.getElementById('label-'+texto).classList.add('escondido');
	}
}

function crearCuenta(){
	coverBottom = document.querySelector('.cover');
	coverBottom.classList.add('ver-cover');
	// nombre = document.getElementById('input-nombre').value;
	// email = document.getElementById('input-email').value;
	// password = document.getElementById('input-password').value;
	// verifPass = document.getElementById('input-verPassword').value;
	// if(nombre != '' && email != '' && password != '' && verifPass != ''){
	// 	if(password == verifPass){
	// 		crearCuentaAjax = new XMLHttpRequest();
	// 		crearCuentaAjax.open('GET', 'algo.php?');
	// 		crearCuentaAjax.send();
	// 		crearCuentaAjax.onreadystatechange = function(){
	// 			// if (crearCuentaAjax.readyState == 4 && crearCuentaAjax.status = 200) {
				
	// 			// }
	// 		}
	// 	}
	// }else{
	// 	alert("Verifica que los campos estén llenos");
	// }
	
}
