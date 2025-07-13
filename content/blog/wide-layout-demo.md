+++
title = "Wide Layout Demonstration"
date = "2025-01-13"
description = "Showcasing the enhanced wide layout system that utilizes sidenote spaces for full-width content on desktop and tablet views."
draft = false

[extra]
toc = true
+++

# Wide Layout System Demo

This post demonstrates the **enhanced wide layout system** that intelligently uses the sidenote spaces for full-width content on desktop and tablet views, while providing optimal mobile experience.

## How Wide Layout Works

The wide layout system adapts to different screen sizes:

- **Desktop (1024px+)**: Spans across sidenote areas + content area for maximum width
- **Tablet (768px-1023px)**: Uses most of the screen width with proper margins  
- **Mobile (767px-)**: Edge-to-edge layout with minimal padding

## Wide Images

Here's a regular image in normal content width:

![Regular Image](https://picsum.photos/800/400)

Now the same image in wide layout - notice how it utilizes the full available space including sidenote areas[^wide-image].

{% wide() %}
![Wide Image](https://picsum.photos/1200/600)
{% end %}

[^wide-image]: This wide image demonstrates how the layout system utilizes both sidenote areas on desktop, creating a more immersive visual experience for photography and diagrams.

## Wide Tables

Regular table:

| Feature | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| Layout | Grid-based | Block flow | Block flow |
| Sidenotes | Left/Right | Right only | Inline |
| Width | Content width | 90% | 100% |

Wide table with more columns and data[^left-table]:

{% wide() %}
| Component | Desktop Width | Tablet Width | Mobile Width | Breakpoint | Grid Columns | Sidenote Behavior | Notes |
|-----------|---------------|--------------|--------------|------------|--------------|-------------------|-------|
| Article | var(--content-width) | 90% | 100% | Always | content | Normal flow | Main content area |
| Sidenotes | var(--sidenote-width) | Right only | Inline | 1024px+ | sidenote-left/right | Absolute positioned | Floating beside content |
| Wide Content | Full grid width | Edge margins | Full viewport | All | 1 / -1 | Ignored | Spans all available space |
| Header | Container width | Container width | Container width | Always | N/A | N/A | Navigation and branding |
| Footer | Container width | Container width | Container width | Always | N/A | N/A | Site information |
{% end %}

[^left-table]: This technical comparison table shows how different components behave across breakpoints. Notice how wide content ignores sidenote positioning and spans the full available width.

## Wide Code Blocks

Regular code block:

```javascript
function regularExample() {
  const message = "This is normal content width";
  console.log(message);
}
```

Wide code block for complex examples[^right-code]:

{% wide() %}
```javascript
// Enhanced Sidenotes System - Full Implementation Example
class SidenotesManager {
  constructor() {
    this.breakpoints = { mobile: 768, tablet: 1024 };
    this.state = { currentLayout: this.getCurrentLayout(), processedSidenotes: new Set(), lastSide: null, lastWasExplicit: false };
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
  
  calculateAutoSide() {
    if (this.state.lastSide === null) return 'right';
    if (this.state.lastWasExplicit) return this.state.lastSide === 'left' ? 'right' : 'left';
    return this.state.lastSide === 'left' ? 'right' : 'left';
  }
}
```
{% end %}

[^right-code]: Wide code blocks are perfect for complex examples that would otherwise require horizontal scrolling. The extra width allows for better code readability and longer variable names.

## Mixed Wide Content

{% wide() %}
The wide layout system is perfect for:

### Large Datasets
When you need to display complex data that benefits from maximum horizontal space.

### Code Examples  
Complex code samples that would otherwise require horizontal scrolling.

### Images and Media
Photography, diagrams, charts, and other visual content that looks better at full width.

### Comparison Tables
Side-by-side comparisons that need more columns than regular content width allows.

![Wide Layout Diagram](https://picsum.photos/1400/500)

**Technical Implementation:**
- Uses CSS Grid `grid-column: 1 / -1` to span all columns
- Responsive margins and padding for each breakpoint
- Automatic content optimization (font sizes, spacing)
- Maintains theme consistency and accessibility
{% end %}

## Implementation Usage

To use the wide layout in your Markdown content:

```markdown
Regular content here...

{% wide() %}
Your wide content goes here - images, tables, code blocks, etc.
{% end %}

Back to regular content...
```

## Responsive Behavior Summary

### Desktop (1024px+)
- **Layout**: CSS Grid with sidenote areas
- **Wide elements**: Span full grid width (sidenotes + content)
- **Effective width**: ~1200px+ depending on screen size

### Tablet (768px-1023px)  
- **Layout**: Block flow (no grid)
- **Wide elements**: Use most screen width with margins
- **Font optimization**: Smaller table fonts for better fit

### Mobile (767px-)
- **Layout**: Block flow
- **Wide elements**: Edge-to-edge with minimal padding
- **Optimization**: Touch-friendly scrolling, minimal fonts

The wide layout system maintains the clean, minimal aesthetic of the Pechersk theme while providing maximum usability for content that benefits from extra horizontal space.