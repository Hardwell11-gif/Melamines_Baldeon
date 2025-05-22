document.getElementById('menu-icon').addEventListener('click', function () {
  const smallMenu = document.getElementById('small-menu');
  if (smallMenu.style.display === 'flex') {
    smallMenu.style.display = 'none';
  } else {
    smallMenu.style.display = 'flex';
  }
});

  document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('small-menu');
    const navItems = document.querySelectorAll('.nav-text');

    navItems.forEach(item => {
      item.addEventListener('click', () => {
        if (menu) {
          menu.style.display = 'none';
        }
      });
    });
  });
