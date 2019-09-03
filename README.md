# Lit Pagination

Pagination component build using LitElement.

### Description ###

This component has been migrated from [plutonium-pagination](https://www.webcomponents.org/element/lordoftheflies/plutonium-pagination) Polymer-based component which is only distributed as a Bower package. 


## Usage ##


### Installation

```
npm install --save lit-pagination
```

### In an HTML file

```html
<html>
  <head>
    <script type="module">
      import 'lit-pagination.js';
    </script>
  </head>
  <body>
    <div>
      <h3>Basic lit-pagination demo</h3>
      <lit-pagination page=1 total=101 limit=10 size=2></lit-pagination>
    </div>
  </body>
</html>
```

### In a LitELement element
```js
import { LitElement, html, css } from "lit-element";
import 'lit-pagination.js';

class SampleElement extends LitElement {
  render(){
    return html`
      <lit-pagination page=1 total=101 limit=10 size=2></lit-pagination>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```


### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


