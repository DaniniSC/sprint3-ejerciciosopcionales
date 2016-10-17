//PRIMERA PARTE

//Ejercicio #3: Sucesión de Fibonacci
//Realice un algoritmo para generar N elementos de la sucesión de Fibonacci
//(0, 1, 1, 2, 3, 5, 8, 13,...).
function fibonacci(a){
	if (a==0){
		return [0];
	}else if(a==1){
		return [0,1];
	}
	var stringInicial = [0, 1];
	for (var i=2; i<=a; ++i){
		var stringFinal = stringInicial[i-2] + stringInicial[i-1];
		stringInicial.push(stringFinal);
	}
	return stringInicial;
}

//Ejercicio #4: Aguascalientes-Zacatecas
//Una persona se encuentra en el kilómetro 70 de la carretera AguascalientesZacatecas,
//otra se encuentra en el km 150 de la misma carretera.
//La primera viaja en dirección a Zacatecas, mientras que la segunda se dirige a
//Aguascalientes, a la misma velocidad.
//Realice un algoritmo para determinar en qué kilómetro de esa carretera se encontrarán.
function encuentro(personaA, personaB){
	var puntoDeEncuentro;
	if (personaA!==personaB){
		puntoDeEncuentro = (personaA+personaB)/2; 
	}
	return puntoDeEncuentro;
}

//Ejercicio #6: Mayores a 0
//Se requiere un algoritmo para determinar, de N cantidades, cuántas son menores o 
//iguales a cero y cuántas mayores a cero.
function mayoresA0(array1){
	var menoresOIguales = 0;
	var mayores = 0;
	for (var i=0; i<=array1.length; ++i){
		if (array1[i]>0){
			mayores++;
		}else{
			menoresOIguales++;
		}
	}
	document.getElementById("respuestaIndex").innerHTML = "Hay " + mayores + " números mayores a 0. Hay " + menoresOIguales + " números menores o iguales a 0.";
}

//Ejercicio #7: Horas de trabajo
//Una empresa tiene el registro de las horas que trabaja diariamente un empleado durante 
//la semana (seis días) y requiere determinar el total de éstas, así como el sueldo que 
//recibirá por las horas trabajadas.
function pagoTrabajo (hrs, valorXhora){
	return hrs*valorXhora;
}

//Ejemplo #9: Mensualidades
//Una persona adquirió un producto para pagar en 20 meses.
//El primer mes pagó $10, el segundo $20, el tercero $40 y así sucesivamente.
//Realice un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo
//que pagó después de los 20 meses.
function mensualidades() {
	var cuota = [20];
	for (var i=1; i<=19 ; ++i) {
		var pagoTotal = cuota[i - 1] * 2;
		cuota.push(PagoTotal);
	}
	return pagoTotal;
}

// SEGUNDA PARTE

//Ejercicio #1: El menor de los números
//Elabora una función a la cual le enviemos tres enteros y muestre el menor
function numeroMenor(num1, num2, num3){
	var b;
	if (num1<num2 && num1<num3){
		b=num1;
	} else if (num2<num1 && num2<num3){
		b=num2;
	} else{
		b=num3;
	}
	return b;
}

//Ejercicio #2: Número par o impar
//Escribir el código de una función a la que se le pasa como parámetro un número entero 
//y devuelve como resultado una cadena de texto que indica si el número es par o impar.
//Mostrar por pantalla el resultado devuelto por la función
function parImpar(c){
	var cadenaRespuesta;
	if (c%2==0){
		cadenaRespuesta = "El número " + n + " es PAR!!!";
	} else{
		cadenaRespuesta = "El número " + n + " es IMPAR!!!";
	}
	return cadenaRespuesta;
}

//Ejercicio #7: Cuadrado de la suma de dos números
//Realizar un programa que calcule el cuadrado dela suma de dos números
function cuadradoDeLaSuma(d, e){
	return Math.pow([d + e], 2);
}

// Ejercicio #8: Número primo
// Realizar un programa que por medio de una función nos indique si el número que es 
//usuario ingresa es primo o no.
function esPrimo(f){
	var contador = 2;
	if (f<=contador) {
		return true;
	}

	for(var contador=2; contador<f ; ++contador){
		if(f%contador==0){
			return false;
		} else{
			return true;
		}
	}
}

//Ejercicio #9: Múltiplos de un número
//Programa que calcula los 10 primeros múltiplos del número que queramos, utilizando 
//una función que retorna parámetro.
function primeros10Multiplos(g){
	var respuestaMultiplos = [];
	for (var i=1; i<=10; ++i){
		respuestaMultiplos.push(a*i);
	}
	return respuestaMultiplos;
}