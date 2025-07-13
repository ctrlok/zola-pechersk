+++
title = "Alerts & Interactive Components Showcase"
date = 2025-01-13
description = "Demonstration of GitHub-style alerts, folded content, Mermaid diagrams, and other interactive components with glass design aesthetics."
+++

# Alerts & Interactive Components

The **Pechersk** theme includes several interactive components with glass design aesthetics and smooth animations.

## GitHub Style Alerts

Modern alert system with animated accent bars and glass effects[^alerts-note].

### Information Alerts

To create information alerts, write:

```md
> [!NOTE]
> **Information Note**: This alert provides general information that users should be aware of. Perfect for highlighting important details or providing context.

> [!TIP]
> **Helpful Tip**: Use this alert type for optional information that can improve user experience or workflow. Great for best practices and recommendations.
```

Which renders as:

> [!NOTE]
> **Information Note**: This alert provides general information that users should be aware of. Perfect for highlighting important details or providing context.

> [!TIP]
> **Helpful Tip**: Use this alert type for optional information that can improve user experience or workflow. Great for best practices and recommendations.

### Priority Alerts

For high-priority information, write:

```md
> [!IMPORTANT]
> **Critical Information**: This alert highlights crucial information that requires immediate attention. Use sparingly for truly important content.

> [!WARNING]
> **Warning Alert**: This indicates potential issues, risks, or important considerations that users should carefully evaluate before proceeding.

> [!CAUTION]
> **Caution Alert**: This warns about negative consequences, risks, or dangerous actions that could cause problems or damage.
```

Which renders as:

> [!IMPORTANT]
> **Critical Information**: This alert highlights crucial information that requires immediate attention. Use sparingly for truly important content.

> [!WARNING]
> **Warning Alert**: This indicates potential issues, risks, or important considerations that users should carefully evaluate before proceeding.

> [!CAUTION]
> **Caution Alert**: This warns about negative consequences, risks, or dangerous actions that could cause problems or damage.

[^alerts-note]: All alerts automatically adapt to your theme colors and include subtle animations.

## Folded Content Components

Minimalist collapsible sections with smooth animations[^folded-note].

### Basic Usage Examples

To create folded content, write:

```md
{% folded(title="Simple Text Content") %}
This is basic folded content with **markdown support**. You can include any standard markdown elements like:

- Bullet points and lists
- **Bold** and *italic* formatting  
- Links and `inline code`
- Multiple paragraphs

The component uses smooth CSS transitions for opening and closing.
{% end %}
```

Which renders as:

{% folded(title="Simple Text Content") %}
This is basic folded content with **markdown support**. You can include any standard markdown elements like:

- Bullet points and lists
- **Bold** and *italic* formatting  
- Links and `inline code`
- Multiple paragraphs

The component uses smooth CSS transitions for opening and closing.
{% end %}

For complex content with headers, code, and tables:

```md
{% folded(title="Rich Content Example") %}
### Headers Work Inside

Folded content can contain complex markdown structures:

```javascript
function complexContent() {
  const features = ['headers', 'code', 'lists', 'alerts'];
  return features.map(f => `✓ ${f} supported`);
}
```

> [!TIP]
> Even alerts work inside folded content! This creates powerful content organization possibilities.

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✓ | All levels work |
| Code blocks | ✓ | With syntax highlighting |
| Tables | ✓ | Responsive design |
| Alerts | ✓ | Full glass effects |
{% end %}
```

Which renders as:

{% folded(title="Rich Content Example") %}
### Headers Work Inside

Folded content can contain complex markdown structures:

```javascript
function complexContent() {
  const features = ['headers', 'code', 'lists', 'alerts'];
  return features.map(f => `✓ ${f} supported`);
}
```

> [!TIP]
> Even alerts work inside folded content! This creates powerful content organization possibilities.

| Feature | Supported | Notes |
|---------|-----------|-------|
| Headers | ✓ | All levels work |
| Code blocks | ✓ | With syntax highlighting |
| Tables | ✓ | Responsive design |
| Alerts | ✓ | Full glass effects |
{% end %}

### How to Use Folded Content

Write the folded content shortcode in your markdown:

```markdown
{% folded(title="Your Title Here") %}
Your content goes here. You can use **any markdown** including:

- Lists
- Code blocks
- Tables
- Even alerts!
{% end %}
```

{% folded(title="Creating Multiple Sections") %}
You can create as many folded sections as needed:

```markdown
{% folded(title="Section 1") %}
Content for first section.
{% end %}

{% folded(title="Section 2") %}
Content for second section.
{% end %}
```
{% end %}

[^folded-note]: Folded sections work on all devices and adapt to your theme automatically.


### How to Use Alerts

Write GitHub-style alerts in your markdown using this syntax:

```markdown
> [!NOTE]
> Your note content here

> [!TIP] 
> Helpful tips and suggestions

> [!IMPORTANT]
> Critical information

> [!WARNING]
> Warnings about potential issues

> [!CAUTION]
> Serious warnings about risks
```


### Configuration Required

Make sure your `config.toml` includes:

```toml
[markdown]
github_alerts = true
```

---

This showcase demonstrates the **Pechersk** theme's interactive components - GitHub-style alerts and folded content, all designed with glass aesthetics and responsive behavior.
