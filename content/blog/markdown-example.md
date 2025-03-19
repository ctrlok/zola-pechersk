+++
title = "Introduction to GloryToUkraine"
date = 2024-03-20
description = "A demonstration of HTML elements commonly found in Markdown"
+++

This is a zola template with <mark>support</mark> of all ~~common~~ ^Markdown^ ~elements~ and 
sidenotes [^1 left]. 



### header

[^1 left]: This is a sidenote

    It can be placed on right or left side.
    Via small JS script it calculates position of paragraph it refers to. 

    Sidenotes are implemented via footnote syntax with adding `left` 
    and `right` to calculate position.

    If your layout is not big enought — JS script will hide sidenotes. 

Sidenotes is a powerful instrument to share your thoughts and opinions about text. 

You can use sidenotes like this:

```markdown
This is a zola template with support of all common Markdown elements and 
sidenotes [^1 right].

[^1 right]: This is a sidenote

    It can be placed on right or left side.
    Via small JS script it calculates position of paragraph it refers to. 

    Sidenotes are implemented via `footnote` syntax with adding `left` 
    and `right` to calculate position.

    If your layout is not big enought — JS script will hide sidenotes. 
```


# Why Use Markdown?
## Why Use Markdown?
### Why Use Markdown?
#### Why Use Markdown?
##### Why Use Markdown?
###### Why Use Markdown?


Here are some reasons [^3 left] why Markdown is popular [^2 left]:

* It's **easy** to learn and use
* It's *readable* even in its raw form
* It can be converted to HTML, PDF, and other formats
* It's widely supported across various platforms


[^2 left]: This is a sidenote

    This is another paragraph in the sidenote. 
    This is another paragraph in the sidenote. 
    This is another paragraph in the sidenote. 
    This is another paragraph in the sidenote. 
    This is another paragraph in the sidenote. 


[^3 left]:
    this is a text

    this is a text
    this is a text


## Examples of Markdown Elements

### Text Formatting

You can make text **bold** or *italic* in Markdown. You can also combine them to make text ***bold and italic***.

### Lists

#### Ordered List

1. First item
2. Second item
3. Third item

#### Unordered List

* Item 1
* Item 2
* Item 3

### Links

You can create links like [this one to Example.com](https://www.example.com).

### Images

![Placeholder Image](https://via.placeholder.com/600x300)

### Blockquotes

> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.
> 
> <cite>Markdown Guide, Generating Data</cite>


> [!NOTE]
>
> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.

> [!TIP]
>
> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.

> [!IMPORTANT]
>
> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.


> [!WARNING]
>
> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.

> [!CAUTION]
>
> Markdown is a lightweight **markup** language with plain text formatting syntax.
> It is designed so that it can be converted to ^HTML^ and ~many~ other formats.
> Markdown is often used to format ~~readme~~ files, for writing messages in online discussion forums, and to create rich text using a plain text editor.
> It is easy to learn and use, making it a popular choice for many writers and developers.

### Code

Inline code: `console.log('Hello World');`

Code block:

```javascript
function sayHello() {
    console.log('Hello, world!');
}

sayHello();
```

### Tables

| Name | Age | Country |
|------|-----|---------|
| John Doe | 30 | USA |
| Jane Smith | 25 | Canada |
| Robert Johnson | 35 | UK |

### Task Lists

- [x] Write the introduction
- [x] Add code examples
- [ ] Finalize the article