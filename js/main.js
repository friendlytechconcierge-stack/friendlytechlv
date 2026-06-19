document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img[data-fallback-initials]').forEach((img) => {
    img.addEventListener('error', () => {
      const fallback = document.createElement('div');
      fallback.className = 'photo-fallback';
      fallback.textContent = img.getAttribute('data-fallback-initials') || 'FTC';
      img.replaceWith(fallback);
    }, { once: true });
  });
});
