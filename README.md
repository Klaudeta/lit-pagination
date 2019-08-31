# Vaadin Pagination

Pagination component based LitElement.

## Usage ##


### Installation

```
npm install --save vaadin-pagination
```

### In an HTML file

```html
<html>
  <head>
    <script type="module">
      import 'vaadin-pagination.js';
    </script>
  </head>
  <body>
    <div>
      <h3>Basic vaadin-pagination demo</h3>
      <vaadin-pagination page=1 total=101 limit=10 size=2></vaadin-pagination>
    </div>
  </body>
</html>
```

### In a LitELement element
```js
import { LitElement, html, css } from "lit-element";
import 'vaadin-pagination.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <vaadin-pagination page=1 total=101 limit=10 size=2></vaadin-pagination>
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

