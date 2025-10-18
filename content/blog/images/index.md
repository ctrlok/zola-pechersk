+++
title = "Wide"
date = 2024-03-20
description = "A demonstration of how you can make content wider"
+++

Here is an example of how to make content wider.

![/cat1.jpg](./cat1.jpg)


```markdown
{%/* wide() */%}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1 | Data 2 | Data 3 |
| Data 4 | Data 5 | Data 6 |
{%/* end */%}}
```

{% wide() %}

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
| Data 4   | Data 5   | Data 6   |

{% end %}
