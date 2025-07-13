+++
title = "Foldable Content Testing"
date = "2025-01-13"
description = "Testing the foldable content shortcode system with various content types and nested structures."
draft = false

[extra]
toc = true
+++

# Foldable Content System Test

This post demonstrates the **foldable content shortcode** in the Pechersk theme. Foldable sections allow readers to expand and collapse content sections for better organization and reading flow.

## Basic Foldable Sections {other}

### Simple Text Content{test}

Here's a basic foldable section with plain text:

{% folded(title="Click to reveal basic information") %}
This is a simple foldable section containing plain text. The content is hidden by default and expands when the user clicks on the title. This helps keep long documents organized and allows readers to focus on sections that interest them most.

You can include multiple paragraphs in a foldable section. Each paragraph maintains proper spacing and formatting when expanded.
{% end %}

### Code Examples

Technical documentation often benefits from collapsible code sections:

{% folded(title="JavaScript Example") %}
```javascript
// Enhanced sidenotes positioning system
class SidenotesManager {
  constructor() {
    this.state = {
      lastSide: null,
      lastWasExplicit: false
    };
  }
  
  determineOptimalSide(footnoteId) {
    if (footnoteId.includes('left')) return 'left';
    if (footnoteId.includes('right')) return 'right';
    return this.calculateAutoSide();
  }
  
  calculateAutoSide() {
    if (this.state.lastSide === null) return 'right';
    if (this.state.lastWasExplicit) {
      return this.state.lastSide === 'left' ? 'right' : 'left';
    }
    return this.state.lastSide === 'left' ? 'right' : 'left';
  }
}
```

This code demonstrates the auto-side positioning logic we implemented earlier.
{% end %}

### Lists and Structured Content

Foldable sections work well with lists and structured information:

{% folded(title="Feature Comparison") %}
**Current Sidenotes System Features:**

- ✅ **Responsive Design**: Three-layout system (desktop, tablet, mobile)
- ✅ **Auto-Side Positioning**: Intelligent left/right placement
- ✅ **Explicit Positioning**: Support for manual left/right specification
- ✅ **Theme Integration**: Works with all Pechersk flavors
- ✅ **Performance Optimized**: Lightweight with minimal CPU usage
- ✅ **Accessibility**: ARIA labels and keyboard navigation

**Planned Enhancements:**

- 🔄 **Visual Connections**: Lines connecting references to sidenotes
- 🔄 **Preview on Hover**: Quick content preview without navigation
- 🔄 **Batch Operations**: Bulk show/hide sidenotes
- 🔄 **Reading Progress**: Track which sidenotes have been viewed
{% end %}

## Advanced Foldable Content

### Nested Foldable Sections

You can nest foldable sections for hierarchical organization:

{% folded(title="Project Structure") %}
This section contains an overview of our project organization.

{% folded(title="Frontend Components") %}
**JavaScript Files:**
- `footnotes.js` - Sidenotes positioning system
- `main.js` - Theme initialization and utilities
- `mermaid.js` - Diagram rendering integration

**CSS/Sass Files:**
- `footnotes.sass` - Sidenotes styling and responsive layouts
- `colors.sass` - Theme color system and flavor variants
- `typography.sass` - Font system and text styling
{% end %}

{% folded(title="Content Structure") %}
**Markdown Content:**
- `content/blog/` - Blog posts and articles
- `content/pages/` - Static pages
- `templates/` - Zola template files

**Static Assets:**
- `static/css/` - Compiled stylesheets
- `static/js/` - JavaScript modules
- `static/images/` - Image assets
{% end %}
{% end %}

### Mixed Content Types

Foldable sections can contain any type of content:

{% folded(title="Mixed Media Example") %}
This section demonstrates various content types within a foldable container.

**Text Content:**
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

**Code Block:**
```css
.foldable-section {
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2);
  margin: var(--size-3) 0;
}
```

**Sidenotes within Foldable Content:**
This paragraph contains a sidenote[^fold1] that should work normally even inside foldable content.

**Lists:**
1. First item with detailed explanation
2. Second item with additional context
3. Third item with related information

**Emphasis and Formatting:**
You can use **bold text**, *italic text*, and `inline code` within foldable sections just like anywhere else.
{% end %}

## Use Cases for Foldable Content

### Documentation

{% folded(title="API Documentation Example") %}
**Function: `determineOptimalSide(footnoteId)`**

**Parameters:**
- `footnoteId` (string): The ID of the footnote element

**Returns:**
- (string): Either 'left' or 'right' indicating the optimal positioning side

**Description:**
This function analyzes the footnote ID and current state to determine the optimal side for positioning. It checks for explicit positioning hints and applies auto-side logic when none are found.

**Example Usage:**
```javascript
const manager = new SidenotesManager();
const side = manager.determineOptimalSide('fn:auto1');
console.log(side); // 'right' (first auto sidenote defaults to right)
```
{% end %}

### Tutorials and Guides

{% folded(title="Step-by-Step Implementation Guide") %}
**Step 1: Setup State Management**
Initialize the sidenotes manager with proper state tracking for auto-side positioning.

**Step 2: Parse Footnote References**
Process all footnote references in the document and extract positioning hints.

**Step 3: Apply Positioning Logic**
Use the auto-side algorithm to determine optimal positioning for each sidenote.

**Step 4: Update DOM and CSS**
Modify footnote IDs and apply appropriate CSS classes for visual positioning.

**Step 5: Testing and Validation**
Verify that the positioning works correctly across different screen sizes and content types.
{% end %}

### FAQ Sections

{% folded(title="Frequently Asked Questions") %}
**Q: How does auto-side positioning work?**
A: The system tracks the last sidenote position and whether it was explicitly set. Auto sidenotes alternate sides, while explicit positioning overrides the pattern.

**Q: Can I mix explicit and auto positioning?**
A: Yes! You can use `[^left1]` for explicit left positioning and `[^auto1]` for automatic positioning in the same document.

**Q: Does this work on mobile devices?**
A: Yes, the system is fully responsive. On mobile, all sidenotes appear inline regardless of positioning logic.

**Q: How do I disable auto-positioning?**
A: You can explicitly specify `left` or `right` in every footnote reference to override the auto-positioning system.
{% end %}

## Performance and Accessibility

{% folded(title="Technical Implementation Details") %}
**Performance Characteristics:**
- Foldable sections use pure CSS for expand/collapse animations
- No JavaScript required for basic functionality
- Lightweight markup with semantic HTML structure
- Minimal impact on page load times

**Accessibility Features:**
- Keyboard navigation support (Tab, Enter, Space)
- Screen reader compatible with proper ARIA attributes
- Focus management for collapsed/expanded states
- High contrast support for visual indicators

**Browser Compatibility:**
- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Progressive enhancement approach
{% end %}

## Summary

The foldable content system provides a clean way to organize information hierarchically while maintaining readability. It works seamlessly with other theme features like sidenotes, code highlighting, and responsive design.

{% folded(title="Key Benefits Summary") %}
**For Content Creators:**
- Better content organization
- Improved reader engagement
- Flexible content structuring
- Easy to implement and maintain

**For Readers:**
- Focused reading experience
- Progressive disclosure of information
- Reduced cognitive load
- Mobile-friendly interaction

**For Developers:**
- Semantic HTML structure
- CSS-based animations
- Minimal JavaScript requirements
- Theme-aware styling
{% end %}

[^fold1]: This sidenote demonstrates that footnotes work normally inside foldable content sections, maintaining their positioning logic and responsive behavior.