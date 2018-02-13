var Iniciar = {
	valor: 0,
	valor2: 0,
	operacion: "",

	calculadora: function(){
        var tecla = document.getElementsByClassName("tecla");
        var presionar_tecla = function() {
        	if(this.style.transform == ""){
            	this.style.transform = "scale(0.95,0.95)";
        	}else{
        		this.style.transform = "";
        	}
        };

        for (var num = 0; num < tecla.length; num++) {
            tecla[num].addEventListener("mouseup", presionar_tecla);
        };

        for (var num = 0; num < tecla.length; num++) {
            tecla[num].addEventListener("mousedown", presionar_tecla);
        };

		document.getElementById("on").addEventListener("click",function(){Iniciar.tecla_on()});
		document.getElementById("punto").addEventListener("click",function(){Iniciar.tecla_punto()});
		document.getElementById("1").addEventListener("click",function(){Iniciar.memoria("1")});
		document.getElementById("2").addEventListener("click",function(){Iniciar.memoria("2")});
		document.getElementById("3").addEventListener("click",function(){Iniciar.memoria("3")});
		document.getElementById("4").addEventListener("click",function(){Iniciar.memoria("4")});
		document.getElementById("5").addEventListener("click",function(){Iniciar.memoria("5")});
		document.getElementById("6").addEventListener("click",function(){Iniciar.memoria("6")});
		document.getElementById("7").addEventListener("click",function(){Iniciar.memoria("7")});
		document.getElementById("8").addEventListener("click",function(){Iniciar.memoria("8")});
		document.getElementById("9").addEventListener("click",function(){Iniciar.memoria("9")});
		document.getElementById("0").addEventListener("click",function(){Iniciar.memoria("0")});
		document.getElementById("sign").addEventListener("click",function(){Iniciar.tecla_sing()});
		document.getElementById("mas").addEventListener("click",function(){Iniciar.aritmetica("+")});
		document.getElementById("menos").addEventListener("click",function(){Iniciar.aritmetica("-")});
		document.getElementById("por").addEventListener("click",function(){Iniciar.aritmetica("*")});
		document.getElementById("dividido").addEventListener("click",function(){Iniciar.aritmetica("/")});
		document.getElementById("igual").addEventListener("click",function(){Iniciar.tecla_igual()});

	},

	restablecer: function(){
		this.valor = 0;
		this.valor2 = 0;
		this.punto = false;
		this.operacion = "";
	},

	mostrar_valor: function(valor){
		document.getElementById("display").innerHTML = valor;
	},

	tecla_on: function(){
		Iniciar.restablecer();
		Iniciar.mostrar_valor(this.valor);
	},

	tecla_punto: function(){
		if(this.valor == "0" ){
			this.valor += "."
		}else{
			if( this.valor.indexOf('.') == -1){
				this.valor += "."
			}
		}
	},

	tecla_sing: function(){
		if(this.valor != "0" ){
			if(this.valor.indexOf('-') == -1){
				this.valor = "-" + this.valor;
			}else{
				this.valor = this.valor.replace("-", "");
			}
		}
		Iniciar.mostrar_valor(this.valor);
	},

	tecla_igual: function(){
		var resultado = "";
		if(this.valor != ""){
			switch(this.operacion){
				case "+":
					resultado = Number(this.valor2) + Number(this.valor);
					break;
				case "-":
					resultado = Number(this.valor2) - Number(this.valor);
					break;
				case "*":
					resultado = Number(this.valor2) * Number(this.valor);
					break;
				case "/":
					resultado = Number(this.valor2) / Number(this.valor);
					break;
				default:
					break;
			}
			if(this.operacion != ""){
				this.operacion = "";
				this.valor2 = 0;
				resultado = resultado.toString();
				this.valor = resultado.substring(0, 8);
			}
			Iniciar.mostrar_valor(this.valor);
		}
	},

	aritmetica: function(signos){
		if(this.operacion == ""){
			this.operacion = signos;
			this.valor2 = this.valor;
			this.valor = 0;
			Iniciar.mostrar_valor(this.valor);
		}
	},

	memoria: function(tecla){
		if(this.valor == "0"){
			this.valor = tecla;
		}else{
			if(this.valor.length < 8){
				this.valor += tecla;
			}
		}
		Iniciar.mostrar_valor(this.valor);
	},
	
}

Iniciar.calculadora();
Iniciar.mostrar_valor(0);