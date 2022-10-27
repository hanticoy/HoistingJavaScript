//hoisting asignacion

//1:
console.log(hello);      //arroja undefined porque la variable existe pero no tiene nada asignado                             
var hello = 'world';     //declaración correcta


//2:
var needle = 'haystack'; //declaración correcta
test();                  //llamada a la función, pero el interprete la coloca ultimo en la ejecución porque primero carga la funcion test() 
function test() {
	var needle = 'magnet';
	console.log(needle);
}
// Resultado 'magnet'

//3:
var brendan = 'super cool'; //declaración correcta
function print() {           //declaración de una funcion que no es usada en el flujo
	brendan = 'only okay';      //asigna valor ambito local solo para la funcion
	console.log(brendan);       //impresion de la variable modificada
}
console.log(brendan); //impresión de la variable original en el estado que fue declarado.
//Resultado: 'super cool'

//4:
var food = 'chicken'; //declaración correcta
console.log(food); //impresion de la variable anterior
eat();				//llamada a una la función
function eat() {
	food = 'half-chicken';	//asigna valor ambito local solo para la funcion
	console.log(food);		// imprime variable actualizada
	var food = 'gone';		//declara una nueva variable de ambito local, pero aqui la sube en su ejecucion al principio
}
// Resultado 'chicken' y 'half-chicken' 


// //5:
// mean();					//llamada a una funcion que no existe, esto proboca un error
// console.log(food);		//imprime una variable sin valor asignado
// var mean = function() {			//declara una variable que no se usa en el order de ejecucion del código
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);		//imprime una variable sin valor asignado

// //Resultado: En la primera linea debiera darnos un error de que la funcion no existe y detenerse. 
// //Ahora si movemos la linea donde se declara 'mean' a antes de su llamada si funcionara



//6:
console.log(genre);				//imprime undefined porque esta declarada pero sin valor
var genre = "disco";			//declara variable y le asigna valor
rewind();
function rewind() {
	genre = "rock";				//asigna valor ambito local solo para la funcion
	console.log(genre);			//imprime valor de variable global, pero aqui es de ambito de la funcion
	var genre = "r&b";			//declara una variable nueva del ambito de la fincion y le asigna valor
	console.log(genre);			//imprime variable local
}
console.log(genre);

//Resultado: arrojara primero 'undefined' y luego 'rock' 'r&b' y finalmente 'disco'


//7:
dojo = "san jose"; //declara una variable y le asigna valor
console.log(dojo);	//imprime variable
learn();
function learn() {
	dojo = "seattle"; //asigna valor ambito local solo para la funcion
	console.log(dojo);	// imprime la variable
	var dojo = "burbank"; //declara otra variable local del ambito de la funcion
	console.log(dojo);	//imprime la variable local
}
console.log(dojo); //imprime la variable global

// Resultado: 'san jose' 'seattle' 'burbank' 'san jose'


//8:
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
	const dojo = {};
	dojo.name = name;
	dojo.students = students;
	if (dojo.students > 50) {
		dojo.hiring = true;
	}
	else if (dojo.students <= 0) {
		dojo = "closed for now"; //esta linea arroja error.
	}
	return dojo;
}

//Rsultado : primer caso {name:Chicago, students:65, hiring:true}
//segundo caso  retorna un error porque esta tratando de asignar un valor de propiedad al Objeto dojo
