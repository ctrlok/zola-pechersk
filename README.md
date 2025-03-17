# Zola Blog Theme with Light/Dark Mode

This is a Zola theme with light and dark mode support using [Open Props](https://open-props.style/).

## Features

- Light and dark mode support
- Theme toggle button
- Automatic system preference detection
- Zola configuration for default theme
- User preference saved to local storage

## Configuration

### Setting Default Theme

You can set the default theme in your `config.toml` file:

```toml
[extra]
default_theme = "light" # or "dark"
```

If not specified, the theme will use:
1. User's previously saved preference (stored in localStorage)
2. System preference (if available)
3. Light mode as a fallback

## Implementation Details

### CSS

The theme uses Open Props for styling with light and dark mode support:

- CSS variables for colors, spacing, and typography
- Theme variables defined in `:root` and theme-specific classes
- Media query for system preference detection

### JavaScript

The theme.js file handles:

- Theme toggling
- Preference storage
- System preference detection
- Creating the theme toggle button

## Usage

Users can toggle between light and dark mode by clicking the sun/moon icon in the header.

## Customization

To customize the colors:

1. Edit the CSS variables in the `:root`, `.light-theme`, and `.dark-theme` selectors in `static/css/style.css`
2. Update the gradient colors in the `--main-gradient` variable

## Credits

- [Open Props](https://open-props.style/) for CSS variables
- Icons from [Remix Icon](https://remixicon.com/) 