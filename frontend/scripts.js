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
  .then (res => res.json())
  .then (console.log)
}
const reg = `<div class="container">
<form onsubmit="registro(event)">
  <div class="form-group">
    <label for="InputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="usuario">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>`;
const Home = `<div>Home</div>`;
const contenido = document.querySelector('.contenido');
const router = {
 '/':Home,
 '/registro':reg
}
const onNavClick = ruta => {
  history.pushState({},
    ruta + ' | login simple',
    location.origin + ruta),
    contenido.innerHTML = router[ruta]
}