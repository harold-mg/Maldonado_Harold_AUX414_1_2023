/* let miAuto = {
    marca: 'toyota',
    modelo: 'hilux',
    ruedas: 4,
    colores: ['negro', 'azul', 'rojo'],
    automatico: true,
    combustible: 100,
    infomacion() {
        console.log(`Mi auto es de marca ${this.marca} es modelo ${this.modelo} y es de color ${this.colores[1]} y tiene ${this.ruedas} ruedas`);
        console.log('mi auto es de marca '+miAuto.marca+' es de modelo ' + ' y es de color ');
    }

}
console.log(miAuto);
console.log(miAuto.modelo);
miAuto.infomacion(); */

let bts ={
    nombre:'banda bts',
    integrantes:5,
    genero:'k-pop',
    cantantes:['gumi', 'yiyo'],
    activos: true,
    informacion(){
        console.log(`la ${this.nombre} tiene ${this.integrantes} integrantes`);

    }

}
console.log(bts);
console.log(bts.integrantes);
bts.informacion();