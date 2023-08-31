/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
const formTemplate = document.createElement("template");
formTemplate.innerHTML = /* html */`
    <style>
        .btn {
            background-color:rgb(0, 145, 255);
            color: white;
            border: none;
            border-radius: 15px;
            padding: 0 2rem;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            box-shadow: 0 4px 14px 0 rgb(0, 145, 255);
        }
    </style>
    <form>
        <label for="fname">Agent Data:</label><br>
        <input type="text"><br>
        <label for="fname">More Agent Data:</label><br>
        <input type="text"><br>
        <input class="btn" type="submit">
    </form>
`


class Form extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
      this.attachShadow({mode: 'open'});
      // write element functionality in here
    }

    connectedCallback() {
        console.log("connectedcallback");
        this.shadowRoot.appendChild(formTemplate.content.cloneNode(true));
    }
  }

  customElements.define("app-form", Form);
/******/ })()
;