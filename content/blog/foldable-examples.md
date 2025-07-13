+++
title = "Foldable Content"
date = 2025-01-13
description = "How to use collapsible sections."
+++

# Foldable Content

## Syntax

```
{%/* folded(title="Click to expand") */%}
Your content here.
{%/* end */%}

```

## Examples

### Basic

```
{%/* folded(title="About") */%}
Pechersk is a minimalist Zola theme.
{%/* end */%}

```

{% folded(title="About") %}
Pechersk is a minimalist Zola theme.
{% end %}

### With Code

```
{%/* folded(title="Config") */%}
Add to `config.toml`:

```toml
color_scheme = "auto"
```
{%/* end */%}

```

{% folded(title="Config") %}
Add to `config.toml`:

```toml
color_scheme = "auto"
```
{% end %}

### Nested

```
{%/* folded(title="Main") */%}
Main section content.

{%/* folded(title="Sub") */%}
Nested content here.
{%/* end */%}
{%/* end */%}

```

{% folded(title="Main") %}
Main section content.

{% folded(title="Sub") %}
Nested content here.
{% end %}
{% end %}

That's it!
