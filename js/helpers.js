
let getRamdomNumer = size => {
  return Math.floor ( Math.random () * size) //  genera numero aleatorio hasta el tamaño que ponga en size.
} // math floor convierte num decimal y deja parte entera redondeando hacia abajo

// como tener la distancia de ambos puntos

//toma parametro de los dos puntos, lo generamos a travez de un evento
//(e) evento

let getDistance = (e, target) => {
  let diffX = e.offsetX - target.x; // nos dice donde dio click y restamos el otro punto donde esta el tesoro
  let diffY = e.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY + diffY)); // sqrt: raiz cuadrada
}

let getDistanceHint =  distance => { // decirle de que tan lejos esta el jugador del tesoro
  if (distance <30){ // si la distancia que da es menor a 30 pixeles de distancia, le devolvemos que esta cerca de encontrarlo
    return "Boiling Hot"
  }else if (distance <40){
    return "Really Hot"
  }else if (distance <60){
    return "Hot"
  }else if (distance <100){
    return "Warm"
  }else if (distance <180){
    return "Cold"
  }else if (distance <360){
    return "Freezing"
  }
}

 