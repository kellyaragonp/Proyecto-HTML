function iniciarScroll(containerId) {
  const box = document.getElementById(containerId);
  const content = box.querySelector('.scroll-content');
  const items = content.querySelectorAll('p');

  let current = 0;

  setInterval(() => {
    current++;
    if (current >= items.length) {
      current = 0;
    }
    content.style.transform = `translateY(-${current * 80}px)`;
  }, 3000); 
}

iniciarScroll('trivia-box');
iniciarScroll('curiosidades-box');

 const libros = [
    {
      titulo: "Verity - Colleen Hoover",
      imagen: "imagenes/verity.jpg"
    },
    {
      titulo: "Orgullo y Prejuicio - Jane Austen",
      imagen: "imagenes/orgullo.jpg"
    },
    {
      titulo: "Un Amor Agridulce- Agustina Buera",
      imagen: "imagenes/agridulce.jpg"
    },
    {
      titulo: "El Año de Gracia  - Kim Liggett",
      imagen: "imagenes/gracia.jpg"
    }
    ];
    let indiceActual = 0;

function cambiarLibro(direccion) {
  indiceActual += direccion;
  if (indiceActual < 0) indiceActual = libros.length - 1;
  if (indiceActual >= libros.length) indiceActual = 0;

  const libro = libros[indiceActual];
  document.getElementById("portadaLibro").src = libro.imagen;
  document.getElementById("tituloLibro").textContent = libro.titulo;
}

setInterval(() => {
  cambiarLibro(1);
}, 5000);
