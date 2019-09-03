function botonAPI() {
  fetch('http://localhost:3000')
  .then(res => res.text())
  .then(res => {
    document.querySelector('.res').innerHTML = `Esto es lo que devuelve la peticion = ${res}
    <h1>Bienvenidos</h1>`;
  })
  .catch(err => console.log(err))  
}
