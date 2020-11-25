---
title: "How To: Custom Properties aka CSS Variables"
date: "2020-10-16"
draft: false
path: "/blog/how-to-css-variables"
---

## First: Why use CSS Variables

* Easily achieve consistency
* Easily update in the future
* Reduce errors
* Reduce clutter
* Easily work with designer recommendations

When working with styling a site or app, consistency is key. This can include everything from font style, font size, colors, padding, and more.

This is achievable if you know what your set styles are, but if one of those styles change, it can mean combing through your entire code base to find the values that need to be changed. For example, let's say your text color is `#181515`. You use this value throughout your file as needed, and may have it in several different CSS files. Then one day your boss (or client or self) decides that `#0e0c0c` would be a better color. Now you have to go through and change every instance of `#181515` to `#0e0c0c`. And this is just one small example, and doesn't consider the boss (or client or self) changing their mind again.

Accidents happen. I meant to type `#181515` but I accidentally typed `#181815`. Or I meant to have `3px` but I wrote `3em`. Using a variable name instead of remembering the exact value is much easier, and helps make it clear the intention of a certain style.

## Now: How to use CSS Variables

First, declare your variables in `:root`. Then use those throughout the stylesheet where needed.

```css
:root {
  --header-color: #0e0c0c;
  --header-margin: 2.75rem 0 1.05rem;
  --header-font: 'Poppins', sans-serif;
}

h1 {
  color: var(--header-color);
  margin: var(--header-margin);
  font-family: var(--header-font);
}
```

Using an editor like VSCode you also get auto-suggestions even when just typing `--` so you don't have to memorize all of your variables. For example, when I typed `color: --head`, the auto-suggestion included different header variables that I could choose from.

![VSCode Auto Suggest for Header variables](../images/vscode-autosuggest-var.jpg)

This only scratches the surface. You can also have fallbacks in case a variable is used but not actually defined, and you can use these variables with JavaScript as well for getting and setting properties. But this is a good start to making CSS easier and cleaner - without needing a preprocessor.

## Further Reading

* [Using CSS custom properties (variables) | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* [CSS Variables: Why Should You Care? | developers.google](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
