+++
title = "Pechersk Theme Showcase"
date = 2025-01-13
description = "Complete demonstration of all Pechersk theme features including color schemes, flavors, sidenotes, wide layout, and interactive components."
+++

# Pechersk Theme Showcase

Welcome to the **Pechersk** theme showcase! This post demonstrates all the custom features that make this theme unique for Zola static sites.

## Color Schemes & Flavors

This theme supports multiple **color schemes** and **flavor variants**:

Configure in your `config.toml`:

```toml
[extra]
color_scheme = "auto"  # auto/light/dark
flavor = "deep-headers"  # monochrome/happy/happy-headers/deep/deep-headers
```

### Color Schemes
- **Auto**: Follows your system preference (current setting)
- **Light**: Force light mode
- **Dark**: Force dark mode

### Flavor Variants
Currently using `deep-headers` flavor:

- **monochrome**: Clean minimal styling
- **happy-headers**: Bright gradient headers only
- **happy**: Bright gradients on headers + bold text  
- **deep-headers**: Deep color headers only *(current)*
- **deep**: Deep colors on headers + bold text

## GitHub Style Alerts

Write alerts using this markdown syntax:

```md
> [!NOTE]
> This is a note alert with important information that users should be aware of.

> [!TIP]
> Here's a helpful tip that can improve your workflow or understanding.

> [!IMPORTANT]
> This is crucial information that requires immediate attention.

> [!WARNING]
> This warning highlights potential issues or risks to consider.

> [!CAUTION]
> This caution alert warns about negative consequences that could occur.
```

Which renders as:

> [!NOTE]
> This is a note alert with important information that users should be aware of.

> [!TIP]
> Here's a helpful tip that can improve your workflow or understanding.

> [!IMPORTANT]
> This is crucial information that requires immediate attention.

> [!WARNING]
> This warning highlights potential issues or risks to consider.

> [!CAUTION]
> This caution alert warns about negative consequences that could occur.

Requires `github_alerts = true` in your `config.toml`.

## Intelligent Sidenotes System

Create sidenotes using standard markdown footnote syntax:

```md
Regular text with auto-positioned footnote[^auto-note].
Left-positioned note[^left-example].
Right-positioned note[^right-demo].

[^auto-note]: Auto-positioned sidenote (alternates left/right)
[^left-example]: Forces left side placement
[^right-demo]: Forces right side placement
```

Which creates:

The theme features a sophisticated three-layout sidenotes system[^auto-note].

### Auto-Positioning
Regular footnotes automatically alternate between left and right sides[^auto-left]. The system intelligently manages positioning[^auto-right] to create visual balance[^auto-balance].

### Explicit Positioning
You can force specific sides when needed[^left-forced]. Sometimes you want right-side notes[^right-forced] for particular content flow.

### Responsive Behavior
- **Desktop (1024px+)**: Left/right floating beside content
- **Tablet (768px-1023px)**: All notes consolidate to right side  
- **Mobile (767px-)**: Inline footnotes with minimal styling

[^auto-note]: This note demonstrates automatic positioning - the system will choose the optimal side based on the alternating algorithm.

[^auto-left]: Another auto-positioned note that follows the intelligent alternating pattern.

[^auto-right]: Yet another automatically positioned sidenote showing the system's balance.

[^auto-balance]: The auto-positioning creates visual harmony by distributing notes evenly.

[^left-forced]: This note is explicitly positioned on the left side using `[^left-forced]` syntax.

[^right-forced]: This note is explicitly positioned on the right side using `[^right-forced]` syntax.

## Wide Layout System

Use the wide layout shortcode for full-width content:

```md
Regular content stays within the optimal reading measure.

{% wide() %}
![Wide Image](image.jpg)
{% end %}

{% wide() %}
### Wide Content Example

This entire section is wrapped in the wide layout, demonstrating how text content can also utilize the full width when needed for special content or emphasis.

- Wide layout works with all content types
- Images, tables, code blocks, and text
- Responsive behavior across all devices
- Seamless integration with the grid system
{% end %}
```

Which renders as:

Regular content stays within the optimal reading measure for comfortable reading.

{% wide() %}
![Wide Landscape](https://picsum.photos/1200/400?random=1)
{% end %}

The wide layout spans the full available width including sidenote spaces on desktop and tablet[^wide-note].

{% wide() %}
### Wide Content Example

This entire section is wrapped in the wide layout, demonstrating how text content can also utilize the full width when needed for special content or emphasis.

- Wide layout works with all content types
- Images, tables, code blocks, and text
- Responsive behavior across all devices
- Seamless integration with the grid system
{% end %}

[^wide-note]: Wide layout utilizes sidenote spaces on desktop, creating immersive full-width content experiences.

## Professional Table Styling

Regular table with normal content width:

| Feature | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | Grid-based | Block flow | Block flow |
| Sidenotes | Left/Right | Right only | Inline |
| Width | Content width | 90% | 100% |

{% wide() %}
Wide table demonstrating complex data with many columns:

| Component | Desktop Width | Tablet Width | Mobile Width | Breakpoint | Grid Columns | Sidenote Behavior | Features |
|-----------|---------------|--------------|--------------|------------|--------------|-------------------|----------|
| Article | var(--content-width) | 90% | 100% | Always | content | Normal flow | Main reading area |
| Sidenotes | var(--sidenote-width) | Right only | Inline | 1024px+ | sidenote-left/right | Absolute positioned | Floating beside content |
| Wide Content | Full grid width | Edge margins | Full viewport | All | 1 / -1 | Ignored | Spans all available space |
| Tables | Content/Wide width | Responsive | Scroll if needed | All | Inherits | Adapts | Professional styling |
{% end %}

## Apple-Inspired Glass Code Blocks

Regular code block with theme-integrated syntax highlighting:

```javascript
function regularExample() {
  const message = "This is normal content width";
  console.log(message);
}
```

{% wide() %}
Wide code block for complex examples:

```javascript
// Enhanced Sidenotes System - Full Implementation Example
class SidenotesManager {
  constructor() {
    this.breakpoints = { mobile: 768, tablet: 1024 };
    this.state = { 
      currentLayout: this.getCurrentLayout(), 
      processedSidenotes: new Set(), 
      lastSide: null, 
      lastWasExplicit: false 
    };
    this.init();
  }
  
  determineOptimalSide(footnoteId) {
    const hasExplicitLeft = footnoteId.includes('left');
    const hasExplicitRight = footnoteId.includes('right');
    
    if (hasExplicitLeft) { this.state.lastWasExplicit = true; return 'left'; }
    if (hasExplicitRight) { this.state.lastWasExplicit = true; return 'right'; }
    
    const chosenSide = this.calculateAutoSide();
    this.state.lastWasExplicit = false;
    this.state.lastSide = chosenSide;
    return chosenSide;
  }
}
```
{% end %}

## Folded Content Components

Create collapsible sections using the folded shortcode:

```md
{% folded(title="Basic Foldable Section") %}
This is a simple folded content section with **markdown support**. You can include:

- Lists and bullet points
- **Bold** and *italic* text
- Links and other markdown elements
- Multiple paragraphs

The folded component uses minimalist design with smooth animations.
{% end %}
```

Which renders as:

{% folded(title="Basic Foldable Section") %}
This is a simple folded content section with **markdown support**. You can include:

- Lists and bullet points
- **Bold** and *italic* text
- Links and other markdown elements
- Multiple paragraphs

The folded component uses minimalist design with smooth animations.
{% end %}

Folded content supports complex markdown:

```md
{% folded(title="Complex Content Example") %}
### Headers Work Too

You can include complex content inside folded sections:

```python
def example_code():
    return "Code blocks work inside folded content"
```

> Even blockquotes and alerts work:

> [!TIP]
> Folded content can contain any markdown elements including alerts!

| Column 1 | Column 2 |
|----------|----------|
| Tables | Also work |
| Inside | Folded sections |
{% end %}
```

Which renders as:

{% folded(title="Complex Content Example") %}
### Headers Work Too

You can include complex content inside folded sections:

```python
def example_code():
    return "Code blocks work inside folded content"
```

> Even blockquotes and alerts work:

> [!TIP]
> Folded content can contain any markdown elements including alerts!

| Column 1 | Column 2 |
|----------|----------|
| Tables | Also work |
| Inside | Folded sections |
{% end %}


## Three-Tier Header System

# Large Title Header (H1)
Used for main page titles and major sections.

## Medium Section Header (H2)
Perfect for main content sections with optional accent borders.

### Subsection Header (H3)
For organizing content within major sections.

#### Detail Header (H4)
For fine-grained content organization.

##### Minor Header (H5)
For detailed subsections.

###### Smallest Header (H6)
For the most granular content divisions.

## Theme Configuration

All these features are controlled through your `config.toml`:

```toml
[markdown]
highlight_code = true
highlight_theme = "css"
github_alerts = true
heading_attributes = true
gfm = true

[extra]
color_scheme = "auto"  # auto/light/dark
flavor = "deep-headers"  # monochrome/happy/happy-headers/deep/deep-headers
```

---

This showcase demonstrates the **Pechersk** theme's comprehensive feature set, from responsive sidenotes to glass-effect code blocks, all designed with minimalist aesthetics and modern web standards.
