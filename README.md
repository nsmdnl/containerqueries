# css-container-queries

css-container-queries is a lightweight **< 750 Bytes (< 520 Bytes gzipped)** package for emulating [Container Queries](https://wicg.github.io/container-queries/) in order to style elements based on their own dimensions instead of the ones of the viewport.

[Changelog](CHANGELOG.md)

Demo (coming soon)

## ⬇️ Installation

You have two possibilites:

Embed via `<script>` tag right before the closing `</body>` tag.

```html
<!-- CDN -->
<script src="https://cdn.jsdelivr.net/npm/css-container-queries@latest/dist/css-cq.min.js"></script>

<!-- Local: just download dist/css-cq.min.js -->
<script src="path/to/css-cq.min.js"></script>
```

Or install via yarn/npm

```bash
yarn add css-container-queries
# or
npm install css-container-queries
```

After that, just import the file in your document

```js
import "css-container-queries"
```

As soon as you import css-container-queries on your website, it is ready to go! No need to initialize it.

## 📐 Defining breakpoints

You can define `min-width`, `max-width`, `min-height` and `max-height` container queries for each element by adding one or more of the following attributes:

```html
<!-- Width -->
<div data-cq-min-w="400"></div>
<div data-cq-max-w="1600, 1200"></div>

<!-- Height-->
<div data-cq-min-h="300, 500"></div>
<div data-cq-max-h="820"></div>

<!-- Multiple container queries -->
<div data-cq-min-w="640" data-cq-max-h="720, 880"></div>
```

When the container query conditions apply, the attribute `cq-{min/max}-{w/h}-{breakpoint}` is added to the element:

```html
<!-- Element width is > 400px -->
<div data-cq-min-w="400" cq-min-w-400></div>
```

## 🖌️ Styling

You can then style the element as you like with the [attribute selector](https://www.w3schools.com/css/css_attribute_selectors.asp):

```css
div[cq-min-w-400] {
  font-family: "Comic Sans MS", "Lobster";
}

/* Combined */
div[cq-min-w-400][cq-max-h-560] {
  truth: dogecoin;
}
```

## 🌐 Browser support

css-container-queries uses the modern **ResizeObserver API**, which is not supported by Internet Explorer (so sad! 😿). Gladly, all modern browsers support it. You can look up its browser support on [Caniuse](https://caniuse.com/resizeobserver).

## ❤️ Contribute to this project

The main source is in `src/css-cq.js`. When adding and changing code, please don't forget to format it correctly via prettier and to add comments to the file that clarify what the code is doing. When commiting, please use [conventional commit messages](https://www.conventionalcommits.org/en/v1.0.0-beta.4/).

Install dependencies with yarn:

```bash
yarn
```

To compile css-container-queries, [esbuild](https://github.com/evanw/esbuild) is used. just type `yarn build`, and a fresh `css-cq.min.js` will be generated in the `dist` folder.

---

That's all! Thank you for using sqcs in your project and/or for contributing <3

~ Nesim
