function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 10); // Genera un número aleatorio entre 0 y 10
        resolve(numeroAleatorio); // Resuelve la promesa con el número aleatorio
      },3000);// Retraso de 3 segundos (3000 milisegundos)
});}

// Uso de la función getRandomNumber
getRandomNumber()
  .then((number) => {
    console.log('Número aleatorio:', number);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

module.exports = getRandomNumber;