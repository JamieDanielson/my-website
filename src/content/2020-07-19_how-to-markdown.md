---
title: "How To: Markdown"
date: "2020-07-19"
draft: false
path: "/blog/how-to-markdown"
---

Many people are unfamiliar with using Markdown, but it is highly recommended that everyone - but most especially developers - learn and understand how Markdown works.

This post explains the basics of Markdown using comparisons to a regular word processing program like Microsoft Word.

To get started, open your favorite text editor (I love [VSCode](https://code.visualstudio.com/)). Create a file with a .md extension. I also recommend getting a plugin to help with this process as well. I use [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) for style checking and [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) to see what I'm working with. Markdown Preview allows you to view your work to the side (Go to Command Palette, click Open Markdown Preview to the side).

---

## Header Styles

Just like in Word, you often won't go as deep a level as Header 6, but it is there if you need it. A `#` sign represents a header, and the number of `#` signs represent what header style you are using.

```md
# Header 1 = title

## Header 2 - subtitle

### Header 3 - section header

#### Header 4 - sub-section header

##### Header 5 - sub-sub-section header

###### Header 6 - sub-sub-sub-section header
```

Always have a newline space after a header, and only use one Header 1 per document.

---

## Paragraph Styles

When typing a regular paragraph, there is nothing specifically distinguishing the words; an absence of other symbols indicates regular text.

To make text bold, wrap the bolded text with two asterisks. For italics, wrap the text with one asterisk.

```md
**I am bold**
_I am italic_
```

The above code block shows up like this:

**I am bold**
_I am italic_

Above it was mentioned that an extra newline space should be added after the use of every header. For typing a new line with regular text, the same holds true. If you simply click to the next line, that will not be rendered as white space. Instead, you must leave a full line between text to indicate a new line.

```md
This is my first line of text.

This is a new line of text.
```

If I don't leave an extra line between those two sentences, they will run together.

```md
This is my first line of text. This is a new line of text
```

For lists, use either asterisks or hyphens for an unordered list, or numbers for an ordered list. For indented or nested items, hit tab or space twice before adding the new line symbol.

```md
- I'm a bullet point
  - I'm an indented/nested bullet point
- I'm a second bullet point
  - I'm a second indented/nested bullet point
  - I'm a third indented/nested bullet point
```

The above code block looks like this:

- I'm a bullet point
  - I'm an indented/nested bullet point
- I'm a second bullet point
  - I'm a second indented/nested bullet point
  - I'm a third indented/nested bullet point

```md
1. Item 1
   1. Item 1.1
   2. Item 1.2
2. Item 2
3. Item
```

The above code block looks like this:

1. Item 1
   1. Item 1.1
   2. Item 1.2
2. Item 2
3. Item 3

---

A horizontal rule can simply be achieved by writing three hyphens.

```md
---
```

---

For a code block you have two main options. To have inline-code, type a backtick character before and after the code.

```md
The backtick key is typically below the `esc` key and above the `tab` key.
```

The above code block will look like this:

The backtick key is typically below the `esc` key and above the `tab` key.

For a code block, you will start with three back ticks and optionally include the abbreviation of the language you are using in the code block, and finish the code block with three backticks. For each of the example code blocks so far, I've used md as the abbreviation. Other common abbreviations are html, css, and js.

````md
```css
.color {
  color: blue;
}
```
````

The above code block will looks like this:

```css
.color {
  color: blue;
}
```

For links, you should never have a "bare" URL. If you just have a URL and don't want to specify a differnet display name for it, wrap the URL with parantheses and carrots. But if you have something else you want to display in place of hte URL (perhaps the page title), wrap the name in brackets `[]` and the URL in parantheses `()`.

```md
<www.google.com>

[Google](www.google.com)
```

Thie above code block will show the following:

www.google.com

[Google](www.google.com)

---

That covers the majority of use cases for Markdown, and at least gives a boost on getting started. A few other recommendations:

Additional Resources:

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [Daring Fireball: Markdown](https://daringfireball.net/projects/markdown/)
- [VSCode](https://code.visualstudio.com/)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
