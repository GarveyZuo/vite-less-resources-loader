# vite-less-resources-loader
[![npm version](https://img.shields.io/npm/v/vite-less-resource-loader.svg?style=flat-square)](https://www.npmjs.com/package/vite-less-resource-loader)
[![license](https://img.shields.io/npm/l/sass-resources-loader.svg?style=flat-square)](https://www.npmjs.com/package/sass-resources-loader)

This loader will load your LESS resources into every `required` LESS module. So you can use your shared variables, mixins and functions across all LESS styles without manually loading them in each file.

* Made to work with CSS Modules!
* Supports **Vite 1**


## Installation

Get it via npm:

```bash。
npm install vite-less-resources-loader
```
Get it via yarn:

```bash。
yarn add vite-less-resources-loader
```

## Usage

Create your file (or files) with resources, which are snippets of LESS that you want available to places like CSS modules Sass:

```scss
/* resources.less */

@section-width: 700px;

@mixin section-mixin {
  margin: 0 auto;
  width: @section-width;
}
```

### Option Examples

#### `resources`
Specify resources, contents of these will be prepended to each file.

If file `resources/a.scss` has content of `@my-variable: #fff`, we could modify the `vite.config.js`
```js
var lessLoader = require('vite-less-resources-loader')
module.exports = {
  cssPreprocessOptions: {
    less: {
      plugins: [new lessLoader(['./resources.less'])],
    }
  }
}
````



Now you can use these resources without manually import them:

```less
/* component.less */

.section {
  .section-mixin(); // <--- `section-mixin` is defined here
}
```

## License
_vite-less-resources-loader_ is available under MIT. See [LICENSE](LICENSE) for more details.
