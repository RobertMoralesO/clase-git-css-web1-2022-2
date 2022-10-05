//Hola mundo

//alert('hola mundo');

// Comentarios de linea
/*
Comentarios de más de una línea
*/ 

// Sentencias

//alert('Hola');
//alert('mundo');
//alert('mundox')

// Variables
let mensaje;
mensaje = 'Hola Mundo';
//alert(mensaje)
console.log(mensaje);

a = 5;
b = 4;
suma = a + b;
console.log("el resulta es:",suma);

camelCase = 'camelCase';
snake_case = 'snake_case';
//keback-case = 'keback-case;
PascalCase = 'PascalCase';

// nombres no comunes
let _ = 50;
let $ = 40;

// No puede nombrar variables
//let 1a = 5;
//let b-a = 5;

// Constantes

const PI = 3.1616

// TIPOS DE DATOS

// Dinámicamente tipado

let n = 123;
n = "hola";
console.log(n)

//*********** TIPO NUMBER  ****/

// Valores numéricos especiales
// Infinity, -Infinity, NaN

// Infinity: representa el infito
// matemático

console.log(1/0);

// NaN representa un error de cálculo
// es el resultado de una operación
// matemática incorrecta

console.log("asdf" / 2);

// NaN es pegajoso. Cualquier operación 
// sobre NaN devuelve NaN

console.log("no es num" / 2 * 3)

/**** TIPO DE DATO STRING ****/

let texto = "Hola";
let texto2 = 'Hola';

let men = 'Alias "Carlos"';
console.log(men)

let men2 = "I can't do it";
console.log(men2)

let men3 = ``; // backtick funcionalidad extendida

let nombre = "Roberto";
console.log("Hola ${nombre}")
console.log('Hola ${nombre}')
console.log(`Hola ${nombre}`) //Interpolación

/****** TIPO BOOLEANO*******/
// true y false

let verdadero = true;
let falso = false;
let mayor = 4 > 1;
console.log(mayor)


/***** null ****/

// valor especial que NO pertenece
// a ningún tipo de dato anterior

// Forma un tipo de dato propio que 
// contiene solo el valor null

let edad = null;
console.log(edad);

// En JS null NO significa que un
// objeto no existe
// null es solo un valor especial
// que representa nada, vacío o desconocido


/***** Valor Undefined ****/

// Valor especial que no pertenece a nigún
// tipo de dato anterior.
// El significado de undefined es valor no asignado.


// Operador Typeof o función typeof() devuelve el tipo de dato.

console.log(typeof(undefined))
console.log(typeof(0))
console.log(typeof('hola'))
console.log(typeof(true))

console.log(typeof(alert))
console.log(typeof(null)) // ERROR DE JAVASCRIPT

// Interacciones: alert, prompt, confirm

// alert

// alert('Hola Mundo');

// prompt

//let nombre_capturado = prompt('Digite el nombre');
//alert(nombre_capturado);

//prompt('Digite el nombre')

// Confirm

//let esHelado = confirm('¿Te gusta el helado?');
//console.log(esHelado); // true si presionan OK y false si presionan cancelar

// CONVERSIÓN DE TIPOS

// Existen dos tipos de conversiones explícita e implícita

//Convertir a String

let valor = true;
console.log(typeof valor);

valor = String(valor); // "true"
valor = String(false); // "false"
valor = String(null); // "null"
valor = String(undefined); //"undefined"
console.log(valor);
console.log(typeof valor);

// Convertir a Número

console.log('6' / '2'); //conversión automática

console.log(Number("123")) //123
console.log(Number("asdf")) //NaN
console.log(Number("")) //0
console.log(Number(NaN)) //NaN
console.log(Number(undefined)) //NaN
console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(null)) //0

// Convertir a Boleano
console.log("**** Conversión Boleano ****")
console.log(Boolean(123)) //true
console.log(Boolean(0)) //false
console.log(Boolean("123")) //true
console.log(Boolean("")) //false
console.log(Boolean(NaN)) //false
console.log(Boolean(undefined)) //false
console.log(Boolean(null)) //false

// Operadores Binarios

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b; // mod
res = a ** b; // potencia

// Operaciones Unaria +

console.log("Operación  Unitaria")
a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true); // 1
console.log(+false); // 0
console.log(+NaN); //NaN
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+""); // 0

// ASIGNACIONES

a = 2 + 3;
a = b = c = 2 + 3;

c = 2 + 3;
b = c;
a = b;

c = 3 - (a = b + 1);

// Incremento y Decremento

// ++ Incremento
// -- Decremento

a = 2;
a ++;
console.log(a); // 3

a = 2;
a --;
console.log(a); // 1

// Posición del incremento o decremento
console.log('Posición del operador')
a = 1;
b = ++ a;
console.log(b); // 2

a = 1;
b = a ++;
c = a;
console.log(b); // 1
console.log(c); // 2

// COMPARACIONES    

console.log( 2 > 1); //true
console.log( 2 < 1); //false
console.log(2 == 1); // false
console.log(2 !=1 ); // true

Boolean(0) //false
Boolean('0') //true

// Al comparar valores de diferentes tipos, 
// JS convierte lo valores a Números

console.log('*************')
console.log('2' > 1); // true
console.log('01' == 1); // true
console.log(true > 0); // true
console.log(false == 0); // true

console.log('***** NaN ********')
// NaN
console.log('hola'> 0)// false
console.log('hola'< 0)// false
console.log('hola' == 0) // false

// toda comparación con NaN es falsa.

console.log('***** Undefined ********')
// Undefined
console.log(undefined > 0); //false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

console.log('***** Null ********')
// null
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true // Error de javascript
console.log(null <= 0); // true // Error de javascript
console.log(null == 0); // false

console.log('******* Null y Undefined == ******')
// El undefined y el null en las comparaciones de igualación no estrictas 
// actúan diferente: son iguales entre sí, pero no a ningún otro valor

console.log(null == undefined); // true
console.log(null == 5) // false
console.log(undefined == 5) // false

console.log('******* No diferencia de 0 de falso == ******')

console.log(0 == false); // true
console.log('' == false); // true

// Igualación Estricta

console.log(0 === false); // false
console.log( null === undefined); // false


// SENTENCIA IF

/*
if(condicion){

}else if(condicion){

}else{

}
*/


// if de línea
if(4 > 5) console.log('Mensaje');

if(4 > 5){
    b = 5+ 3;
    console.log('Mensaje');
}

/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

if('45a'/3){
    console.log('No entró');
}

if('0'){
    console.log('entró');
}

if(4/2){
    console.log('entró');
}

if (1){
    console.log('entró o no entró?');
}


let edadx;

if(edadx){
    console.log('Variable definida');
}else{
    console.log('Variable indefinida');
}

// Haga un algoritmo que dado una edad imprima true si es mayor de edad
// false si no lo es.

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}

console.log(edad_usuario>= 18);

// Operador ternario

// condición ? operación verdadera : operación falsa;
resultado = edad_usuario >=18 ? x =5 : x=7;

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/

console.log ('***** Opoerador OR ******');
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

if ( 4 ==4 || 2 > 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. 
// Si el resultado es true, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran falsos) 
// retorna el último operando.

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0'; // '0'
comparacion_booleana = undefined || null || NaN || ''; // ''
comparacion_booleana = undefined || null || 3 || ''; // 3
comparacion_booleana = undefined || 'hola' || 3 || ''; // 'hola'

// Resumen: Devuelve el primer valor verdadero o el último si todos son falsos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// Operador lógico

// OR
/*
 v or v = v
 v or f = v
 f or v = v
 f or f = f
*/

console.log ('***** Opoerador AND ******');
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

if ( 4 ==4 && 2 < 5){
    console.log('Verdadero');
}

// restulado = valor_uno || valor_dos || valor_tres;
// 1. Evalúa los operandos de izquierda a derecha.
// 2. Por cada operando, converte el valor a booleano. Si el resultado es false, 
// se detiene y retorna el valor original de ese operando.
// 3. Si todos los operandos han sido evaluados (todos eran verdaderos) retorna el último operando.

comparacion_booleana = true && false && true; //false
comparacion_booleana = '0' && '0'; // '0'
comparacion_booleana = undefined && null && NaN && ''; // undefined
comparacion_booleana = undefined && null && 3 && ''; // undefined
comparacion_booleana = undefined && 'hola' && 3 && ''; // undefined

// Resumen: Devuelve el primer valor falso o el último si todos son verdaderos.


/*
TABLA CONVERSIÓN BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
'  ' -> true
*/

// PREVALENCIA U ORDEN ENTRE OR Y AND

// a && b || c && d == (a && b) || (c && d)

// Negación 

console.log(!true); //false
console.log(!false); // true
console.log(!!undefined); // false == Boolean(undefined)



// BUCLES WHILE Y FOR

/* While( condición){

}*/
let i = 1;
while(i<=10){
    console.log(`El valor de i es: ${i}`);
    i++;
}

console.log('****************');
i = 10;
while(i){
    console.log(`El valor de i es: ${i}`);
    i--;
}

// do - while

/*
do {

}while(condición);
*/
console.log('****************');
i = 1;
do{
console.log(`El valor de i es ${i}`);
i++;
}while(i<= 10);

// Ciclo for

/*
    for(comienzo; condición; incremento){

    }
*/

console.log('****************');
for(i=0; i<= 10; i++){

console.log(`El valor de i es ${i}`);
}

console.log('****************');
for(i=10; i>= 0; i--){

console.log(`El valor de i es ${i}`);
}



// Switch

/*
switch(valor):{
    case valor1:
        [break];
    default:
        [break];
}
*/

a = 2 + 2;
switch(a){
    case 3:
        console.log('El resultado es 3');
        break;
    case 4:
        console.log('El resultado es 4');
        break;
    default:
        console.log('Ninguno de los dos valores');
    
}

a = 2 + 2;
switch(a){
    case 3:
        console.log('El resultado es 3');
    case 4:
        console.log('El resultado es 4');
    default:
        console.log('Ninguno de los dos valores');
    
}

a = 2 + 1;
switch(a){
    case 3:
    case 4:
        console.log('El resultado es 3');
        console.log('El resultado es 4');
        break;
    default:
        console.log('Ninguno de los dos valores');
}

// FUNCIONES

/*
function nombre([parámetros]){

}
*/

function saludar(){
    console.log('Hola Mundo');
}

saludar();

// Variable Local

function saludar_nombre(){
    let nombre_xx = 'Roberto'; //Variable local
    console.log(`Hola ${nombre_xx}`);
}
// console.log(`Hola ${nombre_xx}`);

// Variable externa
let nombre_xx = "Carlos";
function saludar_nombre(){
     let nombre_xx = 'Roberto'; //Variable local
    console.log(`Hola ${nombre_xx}`);
}

console.log(`Hola ${nombre_xx}`);
saludar_nombre();

// Parámetros
console.log("**************");
function mensaje_(de, texto){
    console.log(`${de}: ${texto}`);
}

mensaje_('Roberto', 'Hola María.')
mensaje_('María', 'Hola Roberto.')

// Valores predeterminados
console.log("**************");
function mensaje_(de, texto=''){
    console.log(`${de}: ${texto}`);
}

mensaje_('Roberto')
mensaje_('María', 'Hola Roberto.')

function sumar(a, b){
    return a + b;
}

function sumar_dos(a, b){
    return null;
}

console.log(sumar(4, 5));
console.log(sumar_dos(4, 5));


// HUF que devuelva la sumatoria de los números pares del 1 al x

function sumatoria_pares(x){
    sumatoria = 0;
    for(i=0; i<= x; i++){
        if(es_par(i)) sumatoria = sumatoria + i;
    }
    return sumatoria;
}

function es_par(n){
    return n % 2 == 0;
}

console.log(sumatoria_pares(10))


