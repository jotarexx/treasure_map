
const width = 650;
const heigh = 450;

let target = { // tiene dos parametros X e Y
  x: getRamdomNumer (width),
  y: getRamdomNumer (heigh),
};

//obtener donde clickea usuario

// 1. tener referencia de la imagen (id: map) $: hace referencia a un elemento html

let $map = document.getElementById ('map');
let $distance = document.getElementById('distance');
let clicks = 0;

//obtener cuando dan click, una escucha al evento click y luego pasará algo

$map.addEventListener ('click', function (e){
  clicks++; // cada vez que de un click, que aumente el contador +1
  let distance = getDistance (e, target); // aca obtenemos el otro punto de coordenanda del usuario
  let distanceHint = getDistanceHint (distance); // uso las distancias para darle pistas al usuario
  $distance.innerHTML = `<h1>${distanceHint}</h1>`; 

  if (distance <20){
    alert (`CONGRATULATIONS! You've found the treasure in ${clicks} clicks`);
    location.reload // refresca la pagina
  }

})