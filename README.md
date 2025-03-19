# Zola Blog Theme with Light/Dim Mode and Flavor System

This is a Zola theme with light/dim mode and flavor system support using [Open Props](https://open-props.style/).

## Features

- Light and dim mode support
- Theme toggle button
- Automatic system preference detection
- Multiple theme flavors (happy, deep, monochrome, etc.)
- Flavor selection in UI (optional)
- Zola configuration for default theme and flavor
- User preferences saved to cookies

## Configuration

### Setting Default Theme and Flavor

You can set the default theme and flavor in your `config.toml` file:

```toml
[extra]
# Theme settings
default_theme = "light" # "light", "dim", or "auto"
enable_theme_selector = true # Show theme selector in UI

# Flavor settings
default_flavor = "none" # "none", "happy-headers", "happy", "deep-headers", "deep", or "monochrome"
enable_flavor_selector = true # Show flavor selector in UI
```

If not specified, the theme will use:

1. User's previously saved preference (stored in cookies)
2. System preference for theme (if available)
3. Light mode and no flavor as fallback

### Flavor System

The flavor system allows you to apply different styles to your site independently of the light/dim theme:

- **none**: Standard styling without gradients
- **happy-headers**: Colorful headers with bright gradient
- **happy**: Colorful headers and bold text with bright gradient
- **deep-headers**: Colorful headers with deep gradient
- **deep**: Colorful headers and bold text with deep gradient
- **monochrome**: Plain black/white text for headers and bold text

#### Build-time Flavors

If `enable_flavor_selector` is set to `false`, the selected `default_flavor` will be applied at build time and cannot be
changed by users. This is useful for sites where you want a consistent look and don't want users to be able to change
the flavor.

## Implementation Details

### CSS

The theme uses Open Props for styling with light/dim mode and flavor support:

- CSS variables for colors, spacing, and typography
- Theme variables defined in `:root` and theme-specific classes
- Flavor variables for different visual styles
- Media query for system preference detection

### JavaScript

The theme-switcher.js file handles:

- Theme toggling (light/dim/auto)
- Flavor selection
- Preference storage in cookies
- System preference detection
- Creating the theme and flavor selector UI

## Usage

Users can access theme settings by clicking the gear icon in the header. This opens a dropdown with options for:

- Theme mode (Auto/Light/Dim)
- Theme flavor (if enabled)

Preferences are saved to cookies and will be remembered on future visits.

## Customization

### Colors and Themes

To customize the colors:

1. Edit the CSS variables in the `:root`, `.light-theme`, and `.dim-theme` selectors in `static/css/style.css`
2. Update the gradient colors in the `--gradient-1` and `--gradient-2` variables

### Adding New Flavors

To add a new flavor:

1. Add a new flavor class in `static/css/flavors.css`
2. Add the new flavor to the `FLAVORS` object in `static/js/theme-switcher.js`
3. Update the flavor selector UI in the `createThemeSwitcher` function
4. Add the new flavor to the documentation in `config.toml`

## Credits

- [Open Props](https://open-props.style/) for CSS variables
- Icons from [Remix Icon](https://remixicon.com/) 