# vue-clipboard
> clipboard directly for Vue.js


## [Live demo](http://xiaokaike.github.io/vue-clipboard/)

## Installation

### NPM
```bash
$ npm install vue-clipboard
```

## Usage

#### Using the `v-touch` directive

```js
var VueClipboard = require('vue-clipboard')

Vue.use(VueClipboard)

new Vue({
  data: {
    copyData: 'copy data'
  }
})
```

```html
<button v-clipboard:copy="copyData">Copy</button>

```
