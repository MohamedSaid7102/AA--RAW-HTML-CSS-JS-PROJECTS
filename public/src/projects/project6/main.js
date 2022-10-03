const themeButton = document.getElementById('theme-icon-btn');
const themeButtonCircle = document.getElementById('icon-circle');

themeButton.addEventListener('click', handleUserTheme);

document.addEventListener('DOMContentLoaded', handleUserTheme);

// Functions
function handleUserTheme(e) {
  const localStorageTheme = localStorage.getItem('my-theme');
  const LIGHT_THEME = 'light';
  const DARK_THEME = 'dark';

  if (
    e.type === 'DOMContentLoaded' &&
    (localStorageTheme === LIGHT_THEME || localStorageTheme == DARK_THEME)
  ) {
    document.documentElement.setAttribute('data-theme', localStorageTheme);
    /** Disable the transition on the circle incase we reload and the theme is light, this is to prevent the circle from shifting from it's normal position.*/
    if (localStorageTheme === 'light')
      themeButtonCircle.style.transition = 'all 0s';
    return;
  }

  if (
    window.getComputedStyle(themeButtonCircle).transition === 'all 0s ease 0s'
  ) {
    themeButtonCircle.style.transitionProperty =
      'transform, left, top, width, height';
    themeButtonCircle.style.transitionDuration = '450ms';
    themeButtonCircle.style.transitionTimingFunction = 'ease-in-out';
  }

  // Switch themes
  let theme = undefined;
  if (localStorageTheme === LIGHT_THEME) theme = DARK_THEME;
  else if (localStorageTheme === DARK_THEME) theme = LIGHT_THEME;
  else theme = LIGHT_THEME; /** Choose light theme by default */

  setRootTheme(theme);
  localStorage.setItem('my-theme', theme); /** Store in the local Storage */
  // Add rotation animation
  themeButton.style.animation = `${
    theme === LIGHT_THEME ? 'rotate-right' : 'rotate-left'
  } 1.2s cubic-bezier(.32,.43,.1,1.29)`;
}

function setRootTheme(theme) {
  if (typeof theme !== 'string') throw TypeError('Pass a valid theme');
  document.documentElement.setAttribute('data-theme', theme);
}
