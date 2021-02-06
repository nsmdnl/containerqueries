# scqs - Simple container queries

scqs is a lightweight package [insert size here] for emulating [Container Queries](https://wicg.github.io/container-queries/) in order to style elements based on their own dimensions instead of the ones of the viewport.

## Installation

You can either download the file `dist/scqs.min.js` and embed it locally or install it via yarn/npm:

```bash
yarn add scqs
# or
npm install scqs
```

## Usage

Embed it via script tag:

```html
<script src="path/to/scqs.min.js"></script>
```

or import it in your file like this when using a JS Framework:

```js
import "node_modules/scqs/dist"
```

## Browser support

scqs uses the modern **ResizeObserver API**, which is not supported by Internet Explorer (so sad! 😿).
It is gladly supported by modern browsers. You can look up its browser support on (Caniuse)[https://caniuse.com/mdn-api_resizeobserver]
