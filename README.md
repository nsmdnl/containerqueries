# [WIP] scqs - Simple container queries

scqs is a lightweight **< 750 Bytes** package for emulating [Container Queries](https://wicg.github.io/container-queries/) in order to style elements based on their own dimensions instead of the ones of the viewport.

[Changelog](CHANGELOG.md)

## Installation

You can either download the file `dist/scqs.min.js` and embed it locally, or install it via yarn/npm:

<!-- TODO: Via CDN -->

```bash
yarn add scqs
# or
npm install scqs
```

## Usage

### Embed

Embed it via script tag:

```html
<script src="path/to/scqs.min.js"></script>
```

or import it in your file like this when using a JS Framework:

```js
import "sqcs"
```

### Define queries

You can define `min-width`, `max-width`, `min-height` and `max-height` media queries for each element by adding the following attributes, of wich each can also have multiple values:

```html
<!-- Width -->
<div data-cq-min-w="400, 800"></div>
<div data-cq-max-w="1200"></div>
<!-- Height -->
<div data-cq-min-h="300"></div>
<div data-cq-max-h="800, 1000"></div>
```

### Styling

When the conditions apply to each element, the attribute `cq-{min/max}-{w/h}-{breakpoint}` is added to the element.

```html
<div data-cq-min-w="400, 800" cq-min-w-400></div>
```

Then, you can style the element as you like with the [attribute selector](https://www.w3schools.com/css/css_attribute_selectors.asp):

```css
div[cq-min-w-400] {
  font-family: "Comic Sans MS"; /* trolololol  */
}
```

## Browser support

scqs uses the modern **ResizeObserver API**, which is not supported by Internet Explorer (so sad! 😿).
It is gladly supported by modern browsers. You can look up its browser support on [Caniuse](https://caniuse.com/resizeobserver)

## Contribute to this project

The main source is in `src/scqs.js`. When adding and changing code, please don't forget to format it correctly via prettier and to add comments to the file that clarify what the code is doing. When commiting, please use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

Install dependencies with yarn:

```bash
yarn
```

To compile scqs, [esbuild](https://github.com/evanw/esbuild) is used. just type `yarn build`, and a fresh `scqs.min.js` will be generated.

---

That's all! Thank you for using sqcs in your project and/or for contributing <3

~ Nesim
