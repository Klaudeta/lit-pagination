import { LitElement, html } from "lit-element";
import '@polymer/iron-iconset-svg';

class PaginationIcons extends LitElement{

    render(){
        return html`
            <iron-iconset-svg name="pagination-icons" size="24">
                <svg>
                    <defs>
                        <g id="fast-forward">
                            <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"></path>
                        </g>
                        <g id="fast-rewind">
                            <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"></path>
                        </g>
                        <g id="navigate-before">
                            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                        </g>
                        <g id="navigate-next">
                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                        </g>
                    </defs>
                </svg>
            </iron-iconset-svg>
        `
    }
}

customElements.define('pagination-icons', PaginationIcons);
