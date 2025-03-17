// Theme toggling functionality
document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'user-color-scheme';
  const COLOR_MODE_KEY = '--color-mode';

  // SVG icons for toggle button
  const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>`;
  const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27105 10 5.04162 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path></svg>`;

  // Function to get CSS custom property value
  const getCSSCustomProp = (propKey) => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey);
    return response.length ? response.replace(/\'|"/g, '').trim() : '';
  };

  // Function to get user's color mode preference
  const getUserColorMode = () => {
    // Check local storage first
    const localStorageMode = localStorage.getItem(STORAGE_KEY);
    if (localStorageMode) {
      return localStorageMode;
    }
    
    // Check for default mode set in CSS (can be used by Zola)
    const cssMode = getCSSCustomProp(COLOR_MODE_KEY);
    if (cssMode) {
      return cssMode;
    }
    
    // Check for system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light'; // Default to light mode
  };

  // Function to set color mode
  const setColorMode = (mode) => {
    // Set on root element
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${mode}-theme`);
    
    // Update toggle button aria attributes
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.setAttribute('aria-label', mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      toggleButton.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
    }
    
    // Save to local storage
    localStorage.setItem(STORAGE_KEY, mode);
  };

  // Function to toggle color mode
  const toggleColorMode = () => {
    const currentMode = getUserColorMode();
    const newMode = currentMode === 'dark' ? 'light' : 'dark';
    setColorMode(newMode);
  };

  // Create toggle button if it doesn't exist
  const createToggleButton = () => {
    const headerElement = document.querySelector('header');
    if (!headerElement) return;
    
    // Check if button already exists
    if (document.querySelector('.theme-toggle')) return;
    
    const currentMode = getUserColorMode();
    const button = document.createElement('button');
    button.classList.add('theme-toggle');
    button.setAttribute('aria-label', currentMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', currentMode === 'dark' ? 'true' : 'false');
    
    // Add both icons, we'll control visibility with CSS
    button.innerHTML = `
      <span class="sun-icon">${sunIcon}</span>
      <span class="moon-icon">${moonIcon}</span>
    `;
    
    button.addEventListener('click', toggleColorMode);
    headerElement.appendChild(button);
  };

  // Initialize
  const init = () => {
    // Set initial color mode
    const initialColorMode = getUserColorMode();
    setColorMode(initialColorMode);
    
    // Create toggle button
    createToggleButton();
    
    // Listen for system preference changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only change if user hasn't manually set a preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          setColorMode(e.matches ? 'dark' : 'light');
        }
      });
    }
  };

  // Run initialization
  init();
}); 