// function botonAPI() {
//   fetch('http://localhost:3000')
//   .then(res => res.text())
//   .then(res => {
//     document.querySelector('.res').innerHTML = `Esto es lo que devuelve la peticion = ${res}
//     <h1>Bienvenidos</h1>`;
//   })
//   .catch(err => console.log(err))  
// }

const registro = event => {
  event.preventDefault();
  fetch('http://localhost:3000/signup',{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      usuario: event.target.usuario.value,
      password: event.target.password.value,
    }),
  })
  
}
