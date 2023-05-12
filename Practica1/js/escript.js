let suma = document.getElementById("suma");
let reiniciarP = document.getElementById("boton-reiniciar")
let botonImc = document.getElementById("boton-imc");
let efect = document.getElementById("efect");
let dividir = document.getElementById("dividir");
let resta =document.getElementById("resta");
function sumarNumeros () {
    let txt1 = document.getElementById("txt1").value;
    let txt2 = document.getElementById("txt2").value;
    let result = parseInt(txt1) + parseInt(txt2);
    console.log("La suma es: " , result);
    //alert("la suma es: " + result)
}
function calcularIMC (){
    
    let masculino = document.getElementById("m"); //aqui estamos declarando masculino con la id="m"
    let femenino = document.getElementById("f");
    /* if (masculino.checked) {
        alert("masculino");
    } else if (femenino.checked){
        alert("femenino");
    } else {
        alert("MARQUE UNA OPCION!")
    } */
    let genero = '';
    if (!masculino.checked && !femenino.checked) {
        //alert("marque una opcion");
        console.log("marque una opcion");
    } else if (masculino.checked) {
        //alert("MASCULINO 👨");
        genero = '👨';
    } else {
        //alert("FEMENINO 👩");
        genero = '👩';
    }
    let peso = document.getElementById("peso").value;
    //alert("tu peso es: " + peso);
    let altura = document.getElementById("altura").value;
    //alert("tu altura en Metros es: " + altura);
    let imc = peso/(altura* altura);
    //let imc = parseFloat(peso)/(parseFloat(altura) * parseFloat(altura))
    //alert(imc.toFixed(2) +" ⚖");
    let estado = '';
    switch (true) {
        case imc<18.5:
            estado = ' ¡BAJO PESO! ❌'
            //alert(estado)
            break;
        case (imc>18.5 && imc<25):
            estado = ' NORMAL ✅'
            //alert(estado);
            break;
        case (imc>25):
            estado = ' ¡SOBRE PESO! ❌'
            //alert(estado);
            break;
    }
    if (genero) {
        //alert('tu IMC es: ' + imc.toFixed(2) + ' tu estado es: ' + estado + genero);
        console.log('tu IMC es: ' + imc.toFixed(2) + ' tu estado es: ' + estado + genero);
    }
}
function reiniciarPrograma() {
    location.reload()
}
function multiplicarNumeros(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    //alert("el producto es: "+ parseInt(num1)*parseInt(num2));
    console.log("el producto es: "+ parseInt(num1)*parseInt(num2));
}

function dividirN(){
    let num1=document.getElementById("num3").value;
    let num2=document.getElementById("num4").value;
    //alert("la division es: "+ ( parseInt(num1)/parseInt(num2)));
    console.log("la division es: "+ ( parseInt(num1)/parseInt(num2)));
}
 function restardosnumeros(){
     let num1=document.getElementById("num5").value;
     let num2=document.getElementById("num6").value;
     //alert ( 'la resta es:'+ (parseInt(num1)-parseInt(num2)));
    console.log('la resta es:'+ (parseInt(num1)-parseInt(num2)));
 }

suma.addEventListener('click',sumarNumeros);
reiniciarP.addEventListener('click', reiniciarPrograma);
botonImc.addEventListener('click', calcularIMC);
efect.addEventListener('click',multiplicarNumeros);
dividir.addEventListener('click',dividirN);
resta.addEventListener('click',restardosnumeros);