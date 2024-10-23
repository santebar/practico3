import fs from 'fs';

//Clase para representar un Superheroe
class Superheroe{
    constructor(id, nombreSuperheroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo){
        this.id = id;
        this.nombreSuperheroe = nombreSuperheroe;
        this.nombreReal = nombreReal;
        this.nombreSociedad = nombreSociedad;
        this.edad = edad;
        this.planetaOrigen = planetaOrigen;
        this.debilidad = debilidad;
        this.poder = poder;
        this.habilidadEspecial = habilidadEspecial;
        this.aliado = aliado;
        this.enemigo = enemigo;
    }
}

//Funcion para leer y ordenar los supergeroes
export function leerSuperheroes(ruta){
    const datos = fs.readFileSync(ruta, 'utf8');
    const superHeroesArrray = JSON.parse(datos);

    //Convertir a instanias de Superheroe
    const superHeroes = superHeroesArrray.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Ordenar por nombre de superheroe
    superHeroes.sort((a,b) => a.nombreSuperheroe.localeCompare(
        b.nombreSuperheroe));
    return superHeroes;
}

//Nuvea funcion para agregar superheroes
export function agregarSuperheroes(rutaOriginal, rutaNuevos){
    const datosOriginales = fs.readFileSync(rutaOriginal, 'utf8');
    const datosNuevos = fs.readFileSync(rutaNuevos, 'utf8');

    const superheroesOriginales = JSON.parse(datosOriginales);
    const nuevosSuperheroes = JSON.parse(datosNuevos);

    //Convertir los nuevos superheroes a instancias de Superheroes
    const instaciasNuevos = nuevosSuperheroes.map(
        hero => new Superheroe(hero.id, hero.nombreSuperheroe, hero.nombreReal, hero.nombreSociedad, hero.edad, hero.planetaOrigen, hero.debilidad, hero.poder, hero.habilidadEspecial, hero.aliado, hero.enemigo)
    );

    //Guardar la lista actualizada
    const listaActualizada = [...superheroesOriginales, ...instaciasNuevos];

    //Guardar la lista actualizada
    fs.writeFileSync(rutaOriginal, JSON.stringify(listaActualizada, null, 2),'utf8');
    console.log('Lista de superheroes actualizada con exito');
}