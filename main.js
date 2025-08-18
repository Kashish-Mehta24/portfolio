document.querySelectorAll('.skills__header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.parentElement;

    // Toggle open/close
    content.classList.toggle('skills__open');
    content.classList.toggle('skills__close');
  });
});

const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  
  // Change button icon
  if(document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
