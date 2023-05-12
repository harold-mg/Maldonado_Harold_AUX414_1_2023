/* let nombre = 'Harold';
console.log('el nombre es',nombre);

let nombres = ['Harold', 'Luis', 'Daniela', 'Maria', 'Alejandro'];
//console.log('Los estudiantes son: ', nombres);
//console.log('el estudiante :', nombres[1]);
//Alejandro

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
}
console.log('el tamaño es',nombres.length);
let nombreLargo = [0];
for (let i = 0; i < nombres.length; i++) { //i=1
        if (nombreLargo.length <= nombres[i].length) { //6 <= 4
            nombreLargo = nombres[i];
        }
}
console.log('El nombre mas largo es: ', nombreLargo);
 */
let n = 10;
let a = 0;
let b = 1;
let c = 0;
let fibonacci = [];
fibonacci.push(a);
fibonacci.push(b);
for (let i = 0; i < n-2; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci.push(c);
}
console.log(fibonacci);

