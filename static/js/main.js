mmdElements = document.getElementsByClassName("mermaid");
const mmdHTML = [];
for (let i = 0; i < mmdElements.length; i++) {
	mmdHTML[i] = mmdElements[i].innerHTML;
}

function mermaidRender(theme) {
	if (theme == "dark") {
		initOptions = {
			startOnLoad: false,
			theme: "dark",
		};
	} else {
		initOptions = {
			startOnLoad: false,
			theme: "neutral",
		};
	}
	for (let i = 0; i < mmdElements.length; i++) {
		delete mmdElements[i].dataset.processed;
		mmdElements[i].innerHTML = mmdHTML[i];
	}
	mermaid.initialize(initOptions);
	mermaid.run();
}

function setTheme(theme) {
	const htmlElement = document.documentElement;
	
	if (theme === 'auto') {
		// Remove the attribute to let CSS media queries handle it
		htmlElement.removeAttribute('color-scheme');
	} else {
		// Set explicit theme
		htmlElement.setAttribute('color-scheme', theme);
	}
	
	localStorage.setItem('theme', theme);
	
	// Handle mermaid re-rendering if needed
	if (mmdElements.length > 0) {
		let effectiveTheme;
		if (theme === 'auto') {
			effectiveTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		} else {
			effectiveTheme = theme;
		}
		mermaidRender(effectiveTheme);
	}
}

function setFlavor(flavor) {
	const htmlElement = document.documentElement;
	htmlElement.setAttribute('flavor', flavor);
	localStorage.setItem('flavor', flavor);
}

function initializeThemeSwitcher() {
	const savedTheme = localStorage.getItem('theme');
	const savedFlavor = localStorage.getItem('flavor');
	
	if (savedTheme) {
		setTheme(savedTheme);
	}
	if (savedFlavor) {
		setFlavor(savedFlavor);
	}
	
	const themeButtons = document.querySelectorAll('[data-theme]');
	const flavorButtons = document.querySelectorAll('[data-flavor]');
	
	themeButtons.forEach(button => {
		button.addEventListener('click', () => {
			const theme = button.getAttribute('data-theme');
			setTheme(theme);
			updateActiveStates();
		});
	});
	
	flavorButtons.forEach(button => {
		button.addEventListener('click', () => {
			const flavor = button.getAttribute('data-flavor');
			setFlavor(flavor);
			updateActiveStates();
		});
	});
	
	updateActiveStates();
}

function updateActiveStates() {
	const savedTheme = localStorage.getItem('theme') || 'auto';
	const currentFlavor = document.documentElement.getAttribute('flavor') || 'monochrome';
	
	document.querySelectorAll('[data-theme]').forEach(button => {
		button.classList.toggle('active', button.getAttribute('data-theme') === savedTheme);
	});
	
	document.querySelectorAll('[data-flavor]').forEach(button => {
		button.classList.toggle('active', button.getAttribute('data-flavor') === currentFlavor);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.theme-switcher')) {
		initializeThemeSwitcher();
	}
	
	// Listen for system theme changes when in auto mode
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		const savedTheme = localStorage.getItem('theme');
		if ((!savedTheme || savedTheme === 'auto') && mmdElements.length > 0) {
			const effectiveTheme = e.matches ? 'dark' : 'light';
			mermaidRender(effectiveTheme);
		}
	});
});
