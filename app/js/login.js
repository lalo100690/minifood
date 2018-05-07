window.addEventListener('load', init, true);

function init(){
	console.log('INICIALIZAR')
	//QUITAR MANCHA COVER
	setTimeout(function(){
		coverTop = document.querySelector('.cover');
		coverTop.classList.remove('ver-cover');
	},700)
	
	//BUSCAR ELEMENTOS DE EVENTOS
	email = document.querySelector('#input-email');
	password = document.querySelector('#input-password');
	registro = document.querySelector('#btn-registro');

	//EVENTOS EMAIL
	email.addEventListener('focus', function(){verLabel('email')}, true);
	email.addEventListener('blur', function(){esconderLabel('email')}, true);

	//EVENTOS PASSWORD
	password.addEventListener('focus', function(){verLabel('password')}, true);
	password.addEventListener('blur', function(){esconderLabel('password')}, true);

	//EVENTOS REGISTRO
	registro.addEventListener('click', function(){navegar('registro')}, true);
	
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
	},700)
}

function verLabel(texto){
	document.getElementById('label-'+texto).classList.remove('escondido');
}

function esconderLabel(texto){
	if (document.getElementById('input-'+texto).value=="") {
		document.getElementById('label-'+texto).classList.add('escondido');
	}
}

function login(){
	coverBottom = document.querySelector('.cover');
	coverBottom.classList.add('ver-cover');
	// usuario = document.getElementById('input-email').value;
	// password = document.getElementById('input-password').value;
	// if(usuario == '' || password == '') {
	// 	alert("Verifica que los campos estén llenos");
	// }else{
	// 	loginAjax = new XMLHttpRequest();
	// 	loginAjax.open('GET', 'algo.php?usuario='+usuario+'&password='+password);
	// 	loginAjax.send();
	// 	loginAjax.readystateonchange = function(){
	// 		if (loginAjax.readystate == 4 && loginAjax.status == 200) {
	// 			if(loginAjax.responseText == 'ERROR'){
	// 				document.getElementById
	// 			}
	// 		}
	// 	}
	// }
}