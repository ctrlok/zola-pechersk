+++
title = "Sidenotes System Showcase"
date = 2025-01-13
description = "Comprehensive demonstration of the intelligent three-layout sidenotes system with auto-positioning, explicit control, and responsive behavior."
+++

# Intelligent Sidenotes System

The **Pechersk** theme features a sophisticated sidenotes system that adapts to different screen sizes and provides intelligent positioning algorithms.

## Auto-Positioning Algorithm

The system automatically alternates sidenotes between left and right sides[^auto-1]. This creates visual balance and prevents overcrowding[^auto-2] on either side of the content[^auto-3].

The algorithm considers previous placements[^auto-4] and maintains alternating patterns[^auto-5] for optimal reading experience[^auto-6].

### How Auto-Positioning Works

When you create a footnote without explicit positioning[^technical-1], the system:

1. **Checks for explicit positioning** (left/right keywords)
2. **Calculates optimal side** based on alternating logic  
3. **Updates internal state** for next footnote
4. **Applies responsive behavior** based on screen size

[^auto-1]: This is the first auto-positioned sidenote. The system chooses the optimal side based on the alternating algorithm.

[^auto-2]: Second auto-note demonstrates the alternating pattern - should appear on the opposite side from the previous note.

[^auto-3]: Third note continues the alternating sequence, creating visual balance across both sides of the content.

[^auto-4]: The system remembers previous placements to make intelligent decisions about future note positioning.

[^auto-5]: Consistent alternating creates a pleasant reading rhythm and prevents visual clustering.

[^auto-6]: The algorithm ensures optimal reading experience by distributing notes evenly across both sides.

[^technical-1]: The JavaScript `SidenotesManager` class handles all positioning logic with efficient algorithms and minimal CPU usage.

## Explicit Positioning Control

Sometimes you need precise control over sidenote placement[^left-control]. Use explicit positioning when you want specific visual arrangements[^right-control].

### Left-Side Positioning

You can force notes to the left side using `left` in the footnote ID[^left-example]. This is useful for complementary information[^left-supplement] that relates to specific content on the right[^left-context].

### Right-Side Positioning  

Similarly, force right-side placement using `right` in the footnote ID[^right-example]. Right-side notes work well for additional details[^right-details] or elaborative content[^right-elaboration].

### Mixed Positioning Strategy

Combine auto and explicit positioning strategically[^mixed-auto]. Use explicit positioning for important notes[^left-important] while letting the system handle routine footnotes[^mixed-routine]. This creates intentional visual hierarchy[^right-hierarchy].

[^left-control]: Left-positioned note demonstrating explicit control using `[^left-control]` syntax.

[^right-control]: Right-positioned note showing explicit placement using `[^right-control]` syntax.

[^left-example]: This note is explicitly positioned on the left side for demonstration purposes.

[^left-supplement]: Supplementary information positioned specifically on the left to balance the layout.

[^left-context]: Contextual details placed on the left side for specific visual relationships.

[^right-example]: This note is explicitly positioned on the right side using the `right` keyword.

[^right-details]: Additional details positioned on the right side for specific layout control.

[^right-elaboration]: Elaborative content placed specifically on the right for visual balance.

[^mixed-auto]: This note uses auto-positioning within a mixed strategy approach.

[^left-important]: Important information positioned explicitly on the left for emphasis.

[^mixed-routine]: Routine footnote using auto-positioning as part of the mixed strategy.

[^right-hierarchy]: Hierarchical information positioned on the right to create visual structure.

## Complex Content in Sidenotes

Sidenotes support **rich markdown content**[^rich-content] including code snippets[^code-content] and even small lists[^list-content].

### Technical Implementation Notes

The system handles complex scenarios[^complex-1] like multiple notes in close proximity[^complex-2] and maintains performance[^performance-note] even with many footnotes[^efficiency-note].

[^rich-content]: Sidenotes can contain **bold text**, *italic text*, and even `inline code` for technical notes.

[^code-content]: 
```javascript
// Code in sidenotes
const note = "Brief code examples work well";
```

[^list-content]: 
- Bullet lists work
- Keep them concise
- Avoid long content

[^complex-1]: The system handles overlapping notes, collision detection, and responsive repositioning automatically.

[^complex-2]: Multiple notes near each other are managed intelligently to prevent visual conflicts.

[^performance-note]: Optimized JavaScript ensures smooth performance even with 50+ sidenotes on a single page.

[^efficiency-note]: Efficient DOM manipulation and event handling keep CPU usage minimal during scrolling and resizing.

## Responsive Behavior Showcase

### Desktop Experience (1024px+)
On desktop screens, sidenotes float beside the main content in dedicated grid areas. The intelligent positioning creates a magazine-like reading experience[^desktop-note].

### Tablet Experience (768px-1023px)  
On tablet devices, all sidenotes consolidate to the right side for optimal touch interaction[^tablet-note]. This prevents interference with touch scrolling[^touch-note].

### Mobile Experience (767px-)
On mobile devices, sidenotes become inline footnotes at the bottom of the content[^mobile-note]. This ensures accessibility[^accessibility-note] and prevents layout issues[^layout-note].

[^desktop-note]: Desktop users enjoy the full sidenotes experience with left/right floating beside content areas.

[^tablet-note]: Tablet users see all notes on the right side, optimized for portrait and landscape orientations.

[^touch-note]: Right-side positioning on tablets prevents accidental activation during touch scrolling gestures.

[^mobile-note]: Mobile users get traditional footnotes that don't interfere with the linear reading flow.

[^accessibility-note]: Mobile footnotes maintain full accessibility with proper ARIA labels and keyboard navigation.

[^layout-note]: Inline footnotes prevent horizontal scrolling and viewport issues on small screens.

## Performance Characteristics

The sidenotes system is designed for optimal performance[^performance-1]:

- **Lightweight JavaScript**: ~2KB compressed
- **Efficient algorithms**: O(1) positioning decisions  
- **Minimal DOM manipulation**: Only updates when necessary
- **Debounced resize handling**: Smooth window resizing[^resize-performance]
- **Progressive enhancement**: Works without JavaScript[^no-js]

### Accessibility Features

Full accessibility support includes[^a11y-features]:

- **Screen reader compatibility**: Proper ARIA labels
- **Keyboard navigation**: Tab and focus management
- **High contrast support**: Theme-aware colors
- **Touch-friendly targets**: Optimized for mobile interaction

[^performance-1]: Performance testing shows minimal impact on page load times and runtime performance.

[^resize-performance]: Window resize events are debounced to prevent excessive recalculations during window dragging.

[^no-js]: When JavaScript is disabled, sidenotes gracefully degrade to standard footnote behavior.

[^a11y-features]: Comprehensive accessibility testing ensures the system works with assistive technologies.

---

This showcase demonstrates the **Pechersk** theme's advanced sidenotes system - from intelligent auto-positioning to responsive behavior across all device types.
