+++
title = "Headers Guide"
date = 2025-01-20
description = "Quick guide to using headers in the Pechersk theme"
+++


The Pechersk theme provides a semantic header system with progressive sizing and optional styling.

## Header Sizes

Headers follow a clear visual hierarchy using Open Props fluid variables:

# h1 - Main Titles (fluid-5)
## h2 - Section Headers (fluid-4)
### h3 - Subsections (fluid-3)
#### h4 - Minor Headers (fluid-2)
##### h5 - Details (fluid-1)
###### h6 - Smallest (fluid-0)

## Optional Styling

### Clean Headers (Default)
All headers are clean by default - no borders or underlines.

### Underscore Headers {.underscore}
Add `.underscore` class for simple gradient underlines:

```markdown
# Title with Underscore {.underscore}
```

## Examples

```markdown
# Main Page Title {.underscore}
## Section Header
### Clean Subsection
#### Minor Header {.underscore}
##### Detail Header
###### Smallest Header
```

The styling respects your theme's flavor system - gradient colors adapt automatically to your chosen theme variant.