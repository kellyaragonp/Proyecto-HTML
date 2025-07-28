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
  }, 3000); // cada 3 segundos cambia
}

// Llama la función para cada bloque que tenga auto-scroll
iniciarScroll('trivia-box');
iniciarScroll('curiosidades-box');

 const libros = [
    {
      titulo: "La Sombra del Viento - Carlos Ruiz Zafón",
      imagen: "libro1.jpg"
    },
    {
      titulo: "Orgullo y Prejuicio - Jane Austen",
      imagen: "libro2.jpg"
    },
    {
      titulo: "Cien Años de Soledad - Gabriel García Márquez",
      imagen: "libro3.jpg"
    },
    {
      titulo: "El Principito - Antoine de Saint-Exupéry",
      imagen: "libro4.jpg"
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

// Auto cambio cada 5 segundos
setInterval(() => {
  cambiarLibro(1);
}, 5000);
