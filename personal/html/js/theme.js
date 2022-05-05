const themeSwitcher = document.querySelectorAll('.changeTheme');

  themeSwitcher.forEach(switcher => {
    switcher.addEventListener('click', function(){
      ApplyTheme(this.dataset.theme);
      localStorage.setItem('theme', this.dataset.theme);
    });
  });

  function ApplyTheme(themeName)
  {
    let themeUrl = `css/theme-${themeName}.css`;
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl);
  }

  let activeTheme = localStorage.getItem('theme');

  if (activeTheme === null)
  {
    ApplyTheme('light');
  } else {
    ApplyTheme(activeTheme);
  }
