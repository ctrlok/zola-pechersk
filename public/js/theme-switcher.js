document.addEventListener('DOMContentLoaded', function() {
    // Theme constants
    const THEMES = {
        LIGHT: 'light',
        DARK: 'dark',
        AUTO: 'auto'
    };
    
    // Flavor constants
    const FLAVORS = {
        NONE: 'none',
        HAPPY_HEADERS: 'happy-headers',
        HAPPY: 'happy',
        DEEP_HEADERS: 'deep-headers',
        DEEP: 'deep',
        MONOCHROME: 'monochrome'
    };
    
    // Cookie settings
    const THEME_COOKIE_NAME = 'preferred-theme';
    const FLAVOR_COOKIE_NAME = 'preferred-flavor';
    const COOKIE_EXPIRY_DAYS = 365;
    
    // Check if theme selector is enabled in config
    function isThemeSelectorEnabled() {
        // We'll use a data attribute on the html element to pass this info from the template
        const htmlElement = document.documentElement;
        // Check if the enable_theme_selector config option is true
        return htmlElement.hasAttribute('data-theme-selector-enabled');
    }
    
    // Check if flavor selector is enabled in config
    function isFlavorSelectorEnabled() {
        // We'll use a data attribute on the html element to pass this info from the template
        const htmlElement = document.documentElement;
        // Check if the enable_flavor_selector config option is true
        return htmlElement.hasAttribute('data-flavor-selector-enabled');
    }
    
    // Check if static flavor is set (flavor selector disabled but default flavor set)
    function hasStaticFlavor() {
        const htmlElement = document.documentElement;
        return htmlElement.hasAttribute('data-static-flavor');
    }
    
    // Get the static flavor value
    function getStaticFlavor() {
        const htmlElement = document.documentElement;
        const staticFlavor = htmlElement.getAttribute('data-static-flavor');
        
        if (staticFlavor && Object.values(FLAVORS).includes(staticFlavor)) {
            return staticFlavor;
        }
        
        return FLAVORS.NONE;
    }
    
    // Get the default theme from the HTML element
    function getDefaultTheme() {
        const htmlElement = document.documentElement;
        
        if (htmlElement.classList.contains('light-theme')) {
            return THEMES.LIGHT;
        } else if (htmlElement.classList.contains('dark-theme')) {
            return THEMES.DARK;
        } else {
            return THEMES.AUTO;
        }
    }
    
    // Get the default flavor from the HTML element
    function getDefaultFlavor() {
        const htmlElement = document.documentElement;
        const defaultFlavor = htmlElement.getAttribute('data-default-flavor');
        
        if (defaultFlavor && Object.values(FLAVORS).includes(defaultFlavor)) {
            return defaultFlavor;
        }
        
        // If no valid default flavor is set, return 'none'
        return FLAVORS.NONE;
    }
    
    // Get theme from cookie or config default
    function getCurrentTheme() {
        const cookieTheme = getCookie(THEME_COOKIE_NAME);
        if (cookieTheme && Object.values(THEMES).includes(cookieTheme)) {
            return cookieTheme;
        }
        
        // If no cookie, use the default theme from config
        return getDefaultTheme();
    }
    
    // Get flavor from cookie or config default
    function getCurrentFlavor() {
        // If static flavor is set, always use that
        if (hasStaticFlavor()) {
            return getStaticFlavor();
        }
        
        // Only use cookie if flavor selector is enabled
        if (isFlavorSelectorEnabled()) {
            const cookieFlavor = getCookie(FLAVOR_COOKIE_NAME);
            if (cookieFlavor && Object.values(FLAVORS).includes(cookieFlavor)) {
                return cookieFlavor;
            }
        }
        
        // If no cookie or flavor selector is disabled, use the default flavor from config
        return getDefaultFlavor();
    }
    
    // Apply theme to document based on system preference or cookie
    function applyTheme(theme) {
        // Remove all theme classes
        document.documentElement.classList.remove(`${THEMES.LIGHT}-theme`, `${THEMES.DARK}-theme`);
        
        if (theme === THEMES.AUTO) {
            // For auto, we don't add any class and let the media query handle it
            document.documentElement.removeAttribute('data-theme');
        } else {
            // For explicit themes, add the appropriate class
            document.documentElement.classList.add(`${theme}-theme`);
            document.documentElement.setAttribute('data-theme', theme);
        }
        
        // Update the active state in the theme switcher if it exists
        if (isThemeSelectorEnabled()) {
            updateActiveThemeSwitchState(theme);
        }
        
        // Save preference to cookie
        setCookie(THEME_COOKIE_NAME, theme, COOKIE_EXPIRY_DAYS);
    }
    
    // Apply flavor to document
    function applyFlavor(flavor) {
        // If static flavor is set, don't change the flavor
        if (hasStaticFlavor()) {
            // Just update the UI to match the static flavor
            if (isFlavorSelectorEnabled()) {
                updateActiveFlavorSwitchState(getStaticFlavor());
            }
            return;
        }
        
        // Remove all flavor classes
        Object.values(FLAVORS).forEach(f => {
            document.documentElement.classList.remove(`${f}-flavor`);
        });
        
        if (flavor !== FLAVORS.NONE) {
            // Add the new flavor class
            document.documentElement.classList.add(`${flavor}-flavor`);
        }
        
        // Update the active state in the flavor switcher if it exists
        if (isFlavorSelectorEnabled()) {
            updateActiveFlavorSwitchState(flavor);
            
            // Save preference to cookie only if flavor selector is enabled
            setCookie(FLAVOR_COOKIE_NAME, flavor, COOKIE_EXPIRY_DAYS);
        }
    }
    
    // Create theme and flavor switcher UI
    function createThemeSwitcher() {
        // Only create the UI if theme selector or flavor selector is enabled in config
        if (!isThemeSelectorEnabled() && !isFlavorSelectorEnabled()) {
            return;
        }
        
        const header = document.querySelector('header');
        if (!header) return;
        
        const configMenu = document.createElement('div');
        configMenu.className = 'config-menu';
        
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme settings');
        themeToggle.innerHTML = `
            <svg class="gear-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5zm0-2A1.5 1.5 0 0 0 13.5 12 1.5 1.5 0 0 0 12 10.5 1.5 1.5 0 0 0 10.5 12 1.5 1.5 0 0 0 12 13.5zM19.43 12.97l.71.71a1 1 0 0 1 0 1.41l-1.83 1.83a1 1 0 0 1-1.41 0l-.71-.71a7.05 7.05 0 0 1-1.24.71l-.11 1a1 1 0 0 1-1 .88h-2.59a1 1 0 0 1-1-.88l-.11-1a7.05 7.05 0 0 1-1.24-.71l-.71.71a1 1 0 0 1-1.41 0L4.96 15.1a1 1 0 0 1 0-1.41l.71-.71a7.05 7.05 0 0 1-.71-1.24l-1-.11a1 1 0 0 1-.88-1V8.04a1 1 0 0 1 .88-1l1-.11a7.05 7.05 0 0 1 .71-1.24l-.71-.71a1 1 0 0 1 0-1.41L6.87 1.94a1 1 0 0 1 1.41 0l.71.71a7.05 7.05 0 0 1 1.24-.71l.11-1a1 1 0 0 1 1-.88h2.59a1 1 0 0 1 1 .88l.11 1a7.05 7.05 0 0 1 1.24.71l.71-.71a1 1 0 0 1 1.41 0l1.83 1.83a1 1 0 0 1 0 1.41l-.71.71a7.05 7.05 0 0 1 .71 1.24l1 .11a1 1 0 0 1 .88 1v2.59a1 1 0 0 1-.88 1l-1 .11a7.05 7.05 0 0 1-.71 1.24z"/>
            </svg>
        `;
        
        const themeDropdown = document.createElement('div');
        themeDropdown.className = 'theme-dropdown';
        
        let dropdownHTML = '<div class="theme-options">';
        
        // Add theme options if enabled
        if (isThemeSelectorEnabled()) {
            dropdownHTML += `
                <h3>Theme Mode</h3>
                <div class="theme-switches">
                    <label class="switch-container">
                        <input type="radio" name="theme" value="${THEMES.AUTO}" id="theme-auto">
                        <span class="switch-label">Auto</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="theme" value="${THEMES.LIGHT}" id="theme-light">
                        <span class="switch-label">Light</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="theme" value="${THEMES.DARK}" id="theme-dark">
                        <span class="switch-label">Dark</span>
                    </label>
                </div>
            `;
        }
        
        // Add flavor options if enabled
        if (isFlavorSelectorEnabled()) {
            dropdownHTML += `
                <h3>Theme Flavor</h3>
                <div class="theme-switches">
                    <label class="switch-container">
                        <input type="radio" name="flavor" value="${FLAVORS.HAPPY_HEADERS}" id="flavor-happy-headers">
                        <span class="switch-label">Happy Headers</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="flavor" value="${FLAVORS.HAPPY}" id="flavor-happy">
                        <span class="switch-label">Happy</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="flavor" value="${FLAVORS.DEEP_HEADERS}" id="flavor-deep-headers">
                        <span class="switch-label">Deep Headers</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="flavor" value="${FLAVORS.DEEP}" id="flavor-deep">
                        <span class="switch-label">Deep</span>
                    </label>
                    <label class="switch-container">
                        <input type="radio" name="flavor" value="${FLAVORS.MONOCHROME}" id="flavor-monochrome">
                        <span class="switch-label">Monochrome</span>
                    </label>
                </div>
            `;
        }
        
        dropdownHTML += '</div>';
        themeDropdown.innerHTML = dropdownHTML;
        
        // Append elements to the DOM
        configMenu.appendChild(themeToggle);
        configMenu.appendChild(themeDropdown);
        header.appendChild(configMenu);
        
        // Add event listeners
        themeToggle.addEventListener('click', function() {
            themeDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!configMenu.contains(event.target)) {
                themeDropdown.classList.remove('active');
            }
        });
        
        // Add event listeners to theme radio buttons if theme selector is enabled
        if (isThemeSelectorEnabled()) {
            const themeRadioButtons = themeDropdown.querySelectorAll('input[name="theme"]');
            themeRadioButtons.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.checked) {
                        applyTheme(this.value);
                    }
                });
            });
        }
        
        // Add event listeners to flavor radio buttons if flavor selector is enabled
        if (isFlavorSelectorEnabled()) {
            const flavorRadioButtons = themeDropdown.querySelectorAll('input[name="flavor"]');
            flavorRadioButtons.forEach(radio => {
                radio.addEventListener('change', function() {
                    if (this.checked) {
                        applyFlavor(this.value);
                    }
                });
            });
        }
    }
    
    // Update the active state in the theme switcher
    function updateActiveThemeSwitchState(theme) {
        const radioButtons = document.querySelectorAll('input[name="theme"]');
        radioButtons.forEach(radio => {
            radio.checked = radio.value === theme;
        });
    }
    
    // Update the active state in the flavor switcher
    function updateActiveFlavorSwitchState(flavor) {
        const radioButtons = document.querySelectorAll('input[name="flavor"]');
        radioButtons.forEach(radio => {
            radio.checked = radio.value === flavor;
        });
    }
    
    // Cookie helper functions
    function setCookie(name, value, days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = "; expires=" + date.toUTCString();
        document.cookie = name + "=" + value + expires + "; path=/; SameSite=Lax";
    }
    
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
    // Initialize theme and flavor
    function initTheme() {
        // Always apply the theme from cookie or default
        const currentTheme = getCurrentTheme();
        applyTheme(currentTheme);
        
        // Apply the flavor from cookie or default
        const currentFlavor = getCurrentFlavor();
        applyFlavor(currentFlavor);
        
        // Create the theme/flavor switcher UI if enabled in config
        createThemeSwitcher();
        
        // Debug information
        if (window.console && window.console.log) {
            console.log('Theme system initialized:');
            console.log('- Current theme:', currentTheme);
            console.log('- Current flavor:', currentFlavor);
            console.log('- Theme selector enabled:', isThemeSelectorEnabled());
            console.log('- Flavor selector enabled:', isFlavorSelectorEnabled());
            console.log('- Static flavor:', hasStaticFlavor() ? getStaticFlavor() : 'none');
        }
    }
    
    // Run initialization
    initTheme();
});
