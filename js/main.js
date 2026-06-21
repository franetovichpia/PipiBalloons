/* ============================================
   MAIN.JS
   Funcionalidad de la página: animación de
   aparición al scrollear las secciones.
============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initFadeUpOnScroll();
});

/**
 * Observa todos los elementos con clase .fade-up
 * y les agrega la clase .in cuando entran en
 * pantalla, disparando la transición CSS.
 */
function initFadeUpOnScroll() {
  const elements = document.querySelectorAll('.fade-up');

  // Si el navegador no soporta IntersectionObserver,
  // mostramos todo directamente sin animación.
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}