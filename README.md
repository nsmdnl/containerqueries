# css-container-queries

css-container-queries is a lightweight **< 750 Bytes** package for emulating [Container Queries](https://wicg.github.io/container-queries/) in order to style elements based on their own dimensions instead of the ones of the viewport.

[Changelog](CHANGELOG.md)

Demo (coming soon)

## Installation

You can either embed the file via `<script>` tag locally or from CDN, or install it via yarn/npm:

```bash
yarn add css-container-queries
# or
npm install css-container-queries
```

## Usage

### Embed

Embed it via script tag:

```html
<!-- CDN -->
<script src="https://cdn.jsdelivr.net/npm/css-container-queries/dist/css-cq.min.js"></script>
<!-- Local -->
<script src="path/to/css-cq.min.js"></script>
```

or import it in your file like this when using a JS Framework:

```js
import "css-container-queries"
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

css-container-queries uses the modern **ResizeObserver API**, which is not supported by Internet Explorer (so sad! 😿).
It is gladly supported by modern browsers. You can look up its browser support on [Caniuse](https://caniuse.com/resizeobserver)

## Contribute to this project

The main source is in `src/css-container-queries.js`. When adding and changing code, please don't forget to format it correctly via prettier and to add comments to the file that clarify what the code is doing. When commiting, please use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

Install dependencies with yarn:

```bash
yarn
```

To compile css-container-queries, [esbuild](https://github.com/evanw/esbuild) is used. just type `yarn build`, and a fresh `css-container-queries.min.js` will be generated.

---

That's all! Thank you for using sqcs in your project and/or for contributing <3

~ Nesim
