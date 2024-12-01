let url = "https://jsonplaceholder.typicode.com/posts"
let container = document.getElementById("container")

fetch(url)
  .then(response => response.json())
  .then(datos => {

    let tarjeta = ""

    for (dato of datos) {
      console.log(dato)

      tarjeta += `
      <div class="card">
      <p><b>Id:</b> ${dato.id}</p>
      <p><b>userId:</b> ${dato.userId}</p>
      <p><b>Title:</b> ${dato.title}</p>
      <p><b>Body:</b> ${dato.body}</p>
      </div>
      `
    }

  container.innerHTML = tarjeta
    

  })