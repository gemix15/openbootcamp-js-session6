
const listaCompra = ["sal", "chocolate", "lechuga", "tomate", "aguacate"];
listaCompra.splice(2, 0, "aceite de girasol");
console.log(listaCompra);

listaCompra.splice(2, 1);
console.log(listaCompra);


const peliculasFavoritas = [
    {titulo: "El señor de los anillos", director: "Peter Jackson", fecha: new Date('12-19-2001')},
    {titulo: "Matrix", director: "Wachowski sisters", fecha: new Date('06-23-1999')},
    {titulo: "Los juegos del hambre", director:"Gary Ross", fecha: new Date('04-20-2012')}
];

const posteriores = peliculasFavoritas.filter(obj => obj.fecha > new Date('01-01-2010'));
console.log(posteriores);

const directores = peliculasFavoritas.map((pelicula) => pelicula.director); 
console.log(directores);

const titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const directoresTitulos = directores.concat(titulos);
console.log(directoresTitulos);

const directoresTitulos2 = [...directores, ...titulos];
console.log(directoresTitulos2);

