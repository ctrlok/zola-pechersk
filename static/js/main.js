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

function getSystemTheme() {
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getCurrentTheme() {
	const htmlElement = document.documentElement;
	const colorScheme = htmlElement.getAttribute('color-scheme');
	
	if (colorScheme === 'auto' || !colorScheme) {
		return getSystemTheme();
	}
	return colorScheme;
}

function setTheme(theme) {
	const htmlElement = document.documentElement;
	htmlElement.setAttribute('color-scheme', theme);
	localStorage.setItem('theme', theme);
	
	if (mmdElements.length > 0) {
		const effectiveTheme = theme === 'auto' ? getSystemTheme() : theme;
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
	const currentTheme = document.documentElement.getAttribute('color-scheme') || 'auto';
	const currentFlavor = document.documentElement.getAttribute('flavor') || 'monochrome';
	
	document.querySelectorAll('[data-theme]').forEach(button => {
		button.classList.toggle('active', button.getAttribute('data-theme') === currentTheme);
	});
	
	document.querySelectorAll('[data-flavor]').forEach(button => {
		button.classList.toggle('active', button.getAttribute('data-flavor') === currentFlavor);
	});
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.theme-switcher')) {
		initializeThemeSwitcher();
	}
});
