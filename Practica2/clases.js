class Bandas {
    constructor (a, b, c, d) {
        this.nombre = a;
        this.genero = b;
        this.integrantes = c;
        this.activo = d;
    }
    integrantesNuevos(integrante){
        this.integrantes = integrante;
        console.log(`Ahora el grupo tiene ${this.integrantes}`)
    }
}
const BlackPink = new Bandas ('Banda BlackPink', 'K-POP', 4, true);
const SaviaAndina = new Bandas ('Grupo Savia Andina', 'Folcklore', 8, true);
console.log('la banda BlackPink:', BlackPink);
console.log('la banda Savia Andina:', SaviaAndina);
BlackPink.integrantesNuevos(5);
