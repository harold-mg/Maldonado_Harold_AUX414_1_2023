////////////////// 1 ////////////////////////
let autos = ['Nissan', 'Ford', 'Toyota', 'Alfa Romeo'];
//toyota
//Alfa Romeo
console.log(autos[2]);

console.log('el tamaño es',autos.length);
let nombreLargo = [0];
for (let i = 0; i < autos.length; i++) {
        if (nombreLargo.length <= autos[i].length) { 
            nombreLargo = autos[i];
        }
}
console.log('El nombre mas largo es: ', nombreLargo);

////////////////// 2 ////////////////////////
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

////////////////// 3 ////////////////////////
let numeros = [2, 6, 8, 15, 17, 22, 7, 14];
let numeroPar = [];
let numeroImpar = [];
let numeroMayor = 0;
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    if ((numero%2) === 0) {
        numeroPar.push(numero);
    } else {
        numeroImpar.push(numero);
    }
    if (numeroMayor <= numero) {
        numeroMayor = numero;
    }
}
console.log(numeroPar);
console.log(numeroImpar);
console.log(numeroMayor);
// [2, 6, 8, 22, 14] 
// [15, 17, 7] 
// 22

//////////////// 4 ////////////////////
let cocaCola = ['3lt', '2lt', '500ml', '300ml'];
let precios = [13, 10, 5, 3];

for (let i = 0; i < cocaCola.length; i++) {
    console.log(`El precio de la CocaCola de ${cocaCola[i]} es de ${precios[i]}bs`)   
}