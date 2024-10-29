export function menu() {
  const navLinks = document.querySelectorAll('.nav-link');

  function animateLinks() {
    navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
    });
  }

  animateLinks();
}
