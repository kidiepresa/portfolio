
window.addEventListener('DOMContentLoaded', () => {
  const texto = "Bienvenidos a mi portfolio web!";
  const contenedor = document.getElementById('escribir');
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      contenedor.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, 80); // velocidad: 100ms por letra
    }
  }

  escribir();
});
