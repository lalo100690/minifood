function navigation(liga){
	window.location.assign(liga + '.html');
}

function cargarI(){
	promos = document.querySelector('.promo')
	vendido = document.querySelector('.masVendido')
	cafe = document.querySelector('.cafe')
	menu = document.querySelector('.menu')
	navegar = document.querySelector('.navegacion2')

	menu.style.transition = ".4s all"
	navegar.style.transition = ".4s all"
	promos.style.transition = ".4s all"
	vendido.style.transition = ".4s all"
	cafe.style.transition = ".4s all"

	navegar.style.opacity="1"
	navegar.style.marginTop="0%"
	promos.style.opacity="1"
	
	setTimeout(function(){
		vendido.style.marginTop="10px"
		vendido.style.opacity="1"
	},100);

	setTimeout(function(){
		cafe.style.marginTop="10px"
		cafe.style.opacity="1"
	},200);

	menu.style.opacity="1"
	menu.style.bottom = "0%"

}

function prom(pagina){
	promos = document.querySelector('.promo');
	promos.style.width = "100%";
	promos.style.marginLeft = "0px"
	promos.style.height = "36%"
	promos.style.marginTop = "-50px"
	promos.style.borderRadius = "0px 0px 0px 0px"
	promos.style.transition = ".4s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#promo-h1');
	texto.style.transition = ".4s all"
	texto.style.transform="scale(1.5)"

	vendido = document.querySelector('.masVendido')
	vendido.style.marginTop = "100%"
	vendido.style.opacity = "0"
	vendido.style.transition = ".4s all"

	cafe = document.querySelector('.cafe')
	cafe.style.marginTop = "100%"
	cafe.style.opacity = "0"
	cafe.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)



	// document.getElementById('c-'+pagina).classList.toggle('fa-chevron-circle-right')
	// document.getElementById('c-'+id).classList.toggle('fa-chevron-circle-left')
}



function cargarPromo(){
	document.querySelector('.promos2').style.transition = ".4s all"
	
	texto = document.querySelector('#promo-h1');
	// texto.style.transition = ".1s all"
	texto.style.transform="scale(1.5)"
	// texto.style.marginLeft = "100%"
} 

function regresar(){
	promos = document.querySelector('.promos2');
	promos.style.width = "calc(100% - 20px)";
	promos.style.margin = "85px 10px 0px 10px"
	promos.style.height = "26.8%"
	promos.style.borderRadius = "20px 20px 20px 20px"
	promos.style.transition = ".4s all"

	texto = document.querySelector('#promo-h1');
	texto.style.transition = ".4s all"
	texto.style.transform = "scale(1.0)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".4s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('inicio.html');
		},500)
}

function solt(pagina){
	vendido = document.querySelector('.masVendido');
	vendido.style.width = "100%";
	vendido.style.marginLeft = "0px"
	vendido.style.height = "36%"
	vendido.style.marginTop = "-50px"
	vendido.style.borderRadius = "0px 0px 0px 0px"
	vendido.style.transition = ".6s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#masVendido-h1');
	texto.style.transition = ".6s all"
	texto.style.transform="scale(1.5)"

	promo = document.querySelector('.promo')
	promo.style.marginTop = "-100%"
	promo.style.opacity = "0"
	promo.style.transition = ".4s all"

	cafe = document.querySelector('.cafe')
	cafe.style.marginTop = "100%"
	cafe.style.opacity = "0"
	cafe.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)
}

function cargarVendido(){
	document.querySelector('.vendido2').style.transition = ".6s all"
	
	texto = document.querySelector('#masVendido-h1');
	// texto.style.transition = ".1s all"
	texto.style.transform="scale(1.5)"
	// texto.style.marginLeft = "100%"
} 

function regresar2(){
	vendido = document.querySelector('.vendido2');
	vendido.style.width = "calc(100% - 20px)";
	vendido.style.margin = "300px 10px 0px 10px"
	vendido.style.height = "26.4%"
	vendido.style.borderRadius = "20px 20px 20px 20px"
	vendido.style.transition = ".8s all"

	texto = document.querySelector('#masVendido-h1');
	texto.style.transition = ".4s all"
	texto.style.transform = "scale(1.0)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".4s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('inicio.html');
		},500)
}

function cafes(pagina){
	cafe = document.querySelector('.cafe');
	cafe.style.width = "100%";
	cafe.style.marginLeft = "0px"
	cafe.style.height = "36%"
	cafe.style.marginTop = "-50px"
	cafe.style.borderRadius = "0px 0px 0px 0px"
	cafe.style.transition = ".8s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#cafe-h1');
	texto.style.transition = ".8s all"
	texto.style.transform="scale(1.5)"

	promo = document.querySelector('.promo')
	promo.style.marginTop = "-100%"
	promo.style.opacity = "0"
	promo.style.transition = ".4s all"
	
	vendido = document.querySelector('.masVendido')
	vendido.style.marginTop = "-100%"
	vendido.style.opacity = "0"
	vendido.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)
}

function cargarCafe(){
	document.querySelector('.cafe2').style.transition = ".8s all"
	
	texto = document.querySelector('#cafe-h1');
	// texto.style.transition = ".1s all"
	texto.style.transform="scale(1.5)"
	// texto.style.marginLeft = "100%"
} 

function regresar3(){
	cafe = document.querySelector('.cafe2');
	cafe.style.width = "calc(100% - 20px)";
	cafe.style.margin = "510px 10px 0px 10px"
	cafe.style.height = "26.4%"
	cafe.style.borderRadius = "20px 20px 20px 20px"
	cafe.style.transition = ".8s all"

	texto = document.querySelector('#cafe-h1');
	texto.style.transition = ".4s all"
	texto.style.transform = "scale(1.0)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".4s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('inicio.html');
		},500)
}

function cargarM(){
	comida = document.querySelector('.comidaR')	
	bebida = document.querySelector('.bebidas')
	desayuno = document.querySelector('.desayunos')
	postre = document.querySelector('.postres');
	menu = document.querySelector('.menu')
	navegar = document.querySelector('.navegacion2')

	comida.style.transition = ".4s all"
	comida.style.opacity = "1"
	comida.style.marginTop = "35px"

	setTimeout(function(){
		bebida.style.transition = ".4s all"
		bebida.style.opacity = "1"
		bebida.style.marginTop = "10px"
	}, 100);

	setTimeout(function(){
		desayuno.style.transition = ".4s all"
		desayuno.style.opacity = "1"
		desayuno.style.marginTop = "10px"
	}, 200);

	setTimeout(function(){
		postre.style.transition = ".4s all"
		postre.style.opacity = "1"
		postre.style.marginTop = "10px"
	}, 300);

	menu.style.transition = ".4s all"
	navegar.style.transition = ".4s all"
	navegar.style.opacity="1"
	navegar.style.marginTop="0%"
	menu.style.opacity="1"
	menu.style.bottom = "0%"
}

function comR(pagina){
	comida = document.querySelector('.comidaR')
	comida.style.width = "100%";
	comida.style.marginLeft = "0px"
	comida.style.height = "36%"
	comida.style.marginTop = "-50px"
	comida.style.borderRadius = "0px 0px 0px 0px"
	comida.style.transition = ".4s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#comida-h1');
	texto.style.transition = ".4s all"
	texto.style.transform="scale(1.5)"

	bebida = document.querySelector('.bebidas')
	bebida.style.marginTop = "100%"
	bebida.style.opacity = "0"
	bebida.style.transition = ".4s all"

	desayuno = document.querySelector('.desayunos')
	desayuno.style.marginTop = "100%"
	desayuno.style.opacity = "0"
	desayuno.style.transition = ".4s all"

	postre = document.querySelector('.postres')
	postre.style.marginTop = "100%"
	postre.style.opacity = "0"
	postre.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)
}

function cargarComida(){
	document.querySelector('.comidaR2').style.transition = ".4s all"
	
	texto = document.querySelector('#comida-h1');
	// texto.style.transition = ".1s all"
	texto.style.transform="scale(1.5)"
	// texto.style.marginLeft = "100%"
}

function regresarComidaR(){
	comida = document.querySelector('.comidaR2');
	comida.style.width = "calc(100% - 20px)";
	comida.style.margin = "100px 10px 0px 10px"
	comida.style.height = "26.4%"
	comida.style.borderRadius = "20px 20px 20px 20px"
	comida.style.transition = ".8s all"

	texto = document.querySelector('#comida-h1');
	texto.style.transition = ".4s all"
	texto.style.transform = "scale(1.0)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".4s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('menu.html');
		},500)
}

function drinks(pagina){
	bebida = document.querySelector('.bebidas')
	bebida.style.width = "100%";
	bebida.style.marginLeft = "0px"
	bebida.style.height = "36%"
	bebida.style.marginTop = "-50px"
	bebida.style.borderRadius = "0px 0px 0px 0px"
	bebida.style.transition = ".6s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#bebida-h1');
	texto.style.transition = ".6s all"
	texto.style.transform="scale(1.5)"

	comida = document.querySelector('.comidaR')
	comida.style.marginTop = "-100%"
	comida.style.opacity = "0"
	comida.style.transition = ".4s all"

	desayuno = document.querySelector('.desayunos')
	desayuno.style.marginTop = "100%"
	desayuno.style.opacity = "0"
	desayuno.style.transition = ".4s all"

	postre = document.querySelector('.postres')
	postre.style.marginTop = "100%"
	postre.style.opacity = "0"
	postre.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)
}

function cargarBebidas(){
	document.querySelector('.bebidas2').style.transition = ".4s all"	
	texto = document.querySelector('#bebida-h1');
	texto.style.transform="scale(1.5)"
}

function regresarDrinks(){
	bebida = document.querySelector('.bebidas2');
	bebida.style.width = "calc(100% - 20px)";
	bebida.style.margin = "300px 10px 0px 10px"
	bebida.style.height = "26.4%"
	bebida.style.borderRadius = "20px 20px 20px 20px"
	bebida.style.transition = ".6s all"

	texto = document.querySelector('#bebida-h1');
	texto.style.transition = ".4s all"
	texto.style.transform = "scale(1)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".4s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('menu.html');
		},500)
}

function breakfast(pagina){
	desayuno = document.querySelector('.desayunos')
	desayuno.style.width = "100%";
	desayuno.style.marginLeft = "0px"
	desayuno.style.height = "36%"
	desayuno.style.marginTop = "-50px"
	desayuno.style.borderRadius = "0px 0px 0px 0px"
	desayuno.style.transition = ".8s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#desayuno-h1');
	texto.style.transition = ".8s all"
	texto.style.transform="scale(1.5)"

	comida = document.querySelector('.comidaR')
	comida.style.marginTop = "-100%"
	comida.style.opacity = "0"
	comida.style.transition = ".4s all"

	bebidas = document.querySelector('.bebidas')
	bebidas.style.marginTop = "-100%"
	bebidas.style.opacity = "0"
	bebidas.style.transition = ".4s all"

	postre = document.querySelector('.postres')
	postre.style.marginTop = "100%"
	postre.style.opacity = "0"
	postre.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},400)
}

function cargarDesayuno(){
	document.querySelector('.desayunos2').style.transition = ".8s all"	
	texto = document.querySelector('#desayuno-h1');
	texto.style.transform="scale(1.5)"
}

function regresarDesayuno(){
	desayuno = document.querySelector('.desayunos2');
	desayuno.style.width = "calc(100% - 20px)";
	desayuno.style.margin = "460px 10px 0px 10px"
	desayuno.style.height = "26.4%"
	desayuno.style.borderRadius = "20px 20px 20px 20px"
	desayuno.style.transition = ".8s all"

	texto = document.querySelector('#desayuno-h1');
	texto.style.transition = ".8s all"
	texto.style.transform = "scale(1)"

	volver = document.querySelector('.regresar');
	volver.style.transition = ".8s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('menu.html');
		},500)
}

function dessert(pagina){
	postre = document.querySelector('.postres')
	postre.style.width = "100%";
	postre.style.marginLeft = "0px"
	postre.style.height = "36%"
	postre.style.marginTop = "-50px"
	postre.style.borderRadius = "0px 0px 0px 0px"
	postre.style.transition = ".8s all"

	nav = document.querySelector('.navegacion2');
	nav.style.opacity = "0"
	nav.style.transition = ".4s all"

	menu = document.querySelector('.menu');
	menu.style.opacity = "0"
	menu.style.marginTop = "100%"
	menu.style.transition = ".4s all"

	texto = document.querySelector('#postre-h1');
	texto.style.transition = ".8s all"
	texto.style.transform="scale(1.5)"

	comida = document.querySelector('.comidaR')
	comida.style.marginTop = "-100%"
	comida.style.opacity = "0"
	comida.style.transition = ".4s all"

	bebidas = document.querySelector('.bebidas')
	bebidas.style.marginTop = "-100%"
	bebidas.style.opacity = "0"
	bebidas.style.transition = ".4s all"

	desayuno = document.querySelector('.desayunos')
	desayuno.style.marginTop = "-100%"
	desayuno.style.opacity = "0"
	desayuno.style.transition = ".4s all"

	setTimeout(function(){
			window.location.assign(pagina + '.html');
		},600)
}

function cargarPostres(){
	document.querySelector('.postres2').style.transition = ".8s all"	
	texto = document.querySelector('#postre-h1');
	texto.style.transform="scale(1.5)"
	// texto.style.transform = "2s all"
}

function regresarPostre(){
	postre = document.querySelector('.postres2');
	postre.style.width = "calc(100% - 20px)";
	postre.style.margin = "570px 10px 0px 10px"
	postre.style.height = "26.4%"
	postre.style.borderRadius = "20px 20px 20px 20px"
	postre.style.transition = "1s all"

	texto = document.querySelector('#postre-h1');
	texto.style.transition = "1s all"
	texto.style.transform = "scale(1)"

	volver = document.querySelector('.regresar');
	volver.style.transition = "1s all"
	volver.style.opacity = "0"

	setTimeout(function(){
			window.location.assign('menu.html');
		},500)
}


function cargarBuscar(){
	menu = document.querySelector('.menu')
	navegar = document.querySelector('.navegacion2')
	buscar = document.querySelector('img')

	menu.style.transition = ".4s all"
	navegar.style.transition = ".4s all"
	buscar.style.transition = ".4s all"
	
	navegar.style.opacity="1"
	navegar.style.marginTop="0%"
	menu.style.opacity="1"
	menu.style.bottom = "0%"
	buscar.style.opacity ="1"
	buscar.style.marginTop = "40px"
	buscar.style.marginLeft = "25px"
}

function cargarCarro(){
	menu = document.querySelector('.menu')
	navegar = document.querySelector('.navegacion2')

	menu.style.transition = ".4s all"
	navegar.style.transition = ".4s all"
	
	navegar.style.opacity="1"
	navegar.style.marginTop="0%"
	menu.style.opacity="1"
	menu.style.bottom = "0%"
}

function cargarPerfil(){
	menu = document.querySelector('.menu')
	navegar = document.querySelector('.navegacion2')

	menu.style.transition = ".4s all"
	navegar.style.transition = ".4s all"
	
	navegar.style.opacity="1"
	navegar.style.marginTop="0%"
	menu.style.opacity="1"
	menu.style.bottom = "0%"
}

function editar(){
	document.getElementById('n').removeAttribute("disabled");
	document.getElementById('telefono').removeAttribute("disabled");
	document.getElementById('email').removeAttribute("disabled");
	document.getElementById('quitar').style.display = 'none';
	document.getElementById('ver').style.display = 'block';
}

function guardarEditado(){
	document.getElementById("n").setAttribute("disabled", "true")
	document.getElementById("telefono").setAttribute("disabled", "true")
	document.getElementById("email").setAttribute("disabled", "true")
	document.getElementById('quitar').style.display = 'block';
	document.getElementById('ver').style.display = 'none'
}

function borrar(){
	document.getElementById('buscar').value = "";
}