document.getElementById('menu-icon').addEventListener('click', function () {
  const smallMenu = document.getElementById('small-menu');
  if (smallMenu.style.display === 'flex') {
    smallMenu.style.display = 'none';
  } else {
    smallMenu.style.display = 'flex';
  }
});
