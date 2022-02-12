export class Txt extends HTMLElement {
    constructor(text) {
        super();
        this.text = "";
        this.text = text;
        let main = document.getElementsByTagName("main")[0];
        main.appendChild(this);
        this.showText();
    }
    setStyle(style) {
        this.style1 = style;
        this.text = this.style1.applyStyle(this.text);
        this.showText();
    }
    showText() {
        this.innerHTML = this.text;
    }
}
window.customElements.define("txt-component", Txt);
