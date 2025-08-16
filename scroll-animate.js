document.addEventListener('DOMContentLoaded', function() {
  var el = document.querySelector('.scroll-animate');
  function onScroll() {
    var rect = el.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      el.classList.add('visible');
      window.removeEventListener('scroll', onScroll);
    }
  }
  window.addEventListener('scroll', onScroll);
  setTimeout(onScroll, 500);
});
