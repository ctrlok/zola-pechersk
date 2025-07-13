+++
title = "Auto-Side Sidenotes Positioning Test"
date = "2025-01-13"
description = "Testing the intelligent auto-positioning system for sidenotes that alternates sides and responds to explicit positioning hints."
draft = false

[extra]
toc = true
+++

# Auto-Side Sidenotes Positioning System

This post demonstrates the **intelligent auto-positioning system** for sidenotes in the Pechersk theme. The system automatically determines the optimal side (left or right) for each sidenote based on explicit user preferences and smart alternating logic.

## How Auto-Side Positioning Works

### Basic Auto-Alternating Behavior

When no explicit side is specified, sidenotes automatically alternate between left and right sides for balanced visual distribution.

This paragraph has an auto-positioned sidenote[^auto1]. Since it's the first auto sidenote, it will default to the right side.

This paragraph has another auto-positioned sidenote[^auto2]. This one should appear on the left side, alternating from the previous right-side placement.

Here's a third auto-positioned sidenote[^auto3] which should return to the right side, continuing the alternating pattern.

### Explicit Positioning Override

Users can explicitly specify sidenote positioning using special naming conventions:

This sidenote is explicitly positioned on the left[^left1] using the `left` keyword in the footnote reference.

This sidenote is explicitly positioned on the right[^right1] using the `right` keyword in the footnote reference.

### Smart Context-Aware Positioning

After an explicit positioning, the next auto sidenote intelligently chooses the opposite side:

We just had an explicit right sidenote above. This auto sidenote[^auto4] should automatically position itself on the left side to maintain balance.

Another auto sidenote[^auto5] should now alternate back to the right side.

### Mixed Explicit and Auto Positioning

Let's test a complex scenario with mixed positioning:

Start with an explicit left sidenote[^left2]. The system remembers this explicit choice.

Next auto sidenote[^auto6] should go to the right side (opposite of the explicit left).

Another explicit left sidenote[^left3] forces left positioning again.

Following auto sidenote[^auto7] should choose right side (opposite of explicit left).

Final auto sidenote[^auto8] should continue the alternating pattern on the left.

## Technical Implementation

The auto-side system tracks:

1. **Last auto-assigned side** - for basic alternating
2. **Side history** - to detect explicit positioning patterns  
3. **Explicit vs auto detection** - using footnote ID parsing

### Algorithm Logic

```javascript
// Simplified algorithm
function determineOptimalSide(footnoteId) {
  if (footnoteId.includes('left')) return 'left';
  if (footnoteId.includes('right')) return 'right';
  
  // Auto-side: opposite of last explicit, or alternate
  return calculateAutoSide();
}
```

## Expected Visual Results

When viewing this post on **desktop** (1024px+), you should see:

- **Right side**: `auto1`, `auto3`, `right1`, `auto5`, `auto6`, `auto7`
- **Left side**: `auto2`, `left1`, `auto4`, `left2`, `left3`, `auto8`

On **tablet** (768px-1023px), all sidenotes appear on the right side regardless of logic.

On **mobile** (767px-), all sidenotes appear inline below their reference paragraphs.

## Performance Notes

The auto-side system is **lightweight**:
- No expensive calculations or DOM measurements
- Simple string parsing and state tracking
- Maintains the same responsive performance as before

This intelligent positioning creates a more balanced and visually appealing reading experience while respecting user intent when explicit positioning is specified.

[^auto1]: This is the first auto-positioned sidenote. It should appear on the right side by default.

[^auto2]: This is the second auto-positioned sidenote. It should automatically alternate to the left side.

[^auto3]: This is the third auto-positioned sidenote, returning to the right side in the alternating pattern.

[^left1]: This sidenote is explicitly positioned on the left side using the `left` keyword in its reference ID.

[^right1]: This sidenote is explicitly positioned on the right side using the `right` keyword in its reference ID.

[^auto4]: After the explicit right sidenote above, this auto sidenote should intelligently choose the left side for balance.

[^auto5]: This auto sidenote should alternate back to the right side from the previous auto-left.

[^left2]: Another explicit left sidenote to test the system's response to multiple explicit positioning.

[^auto6]: Following an explicit left, this auto sidenote should choose the right side.

[^left3]: A third explicit left sidenote to create a pattern.

[^auto7]: After another explicit left, this should auto-position to the right side.

[^auto8]: Final auto sidenote should continue the alternating pattern, going to the left side.
