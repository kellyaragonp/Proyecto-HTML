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
