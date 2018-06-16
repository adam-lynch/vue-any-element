# vue-any-element

A Vue.js component which allows you to dynamically change the tag of a child element saving loads of awkward code.


## Installation

You can just copy it ([`AnyElement.js`](AnyElement.js)) into your project (it's really short) or you can install it from npm;

```
npm install vue-any-element
```


## API

It accepts a `tag` prop (e.g. `div`) and whatever inner HTML you pass will be output within that (`div`) element.


## Example

### Input

`Example.vue`:

```html
<template>
  <any-element :tag="rootTag">
    Hello <any-element class="b" :tag="innerTag"> World!</any-element>
  </any-element>
</template>
<script src="./Example.js"></script>
```

`Example.js`:

```javascript
import AnyElement from 'vue-any-element';

export default {
  components: {
    AnyElement,
  },
  data() {
    return {
      rootTag: 'p',
      innerTag: 'span',
    }
  }
}
```

### Output

```html
<p>Hello <span class="b">World</span></p>
```


---

Learn more about [render functions](https://vuejs.org/v2/guide/render-function.html).
