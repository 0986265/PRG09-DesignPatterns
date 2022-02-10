var StrategyBasic;
(function (StrategyBasic) {
    class Txt extends HTMLElement {
        constructor(text) {
            super();
            this.text = "";
            this.text = text;
            let main = document.getElementsByTagName("main")[0];
            main.appendChild(this);
            this.showText();
        }
        setStyle() {
            this.text = this.text.toUpperCase();
            this.showText();
        }
        showText() {
            this.innerHTML = this.text;
        }
    }
    StrategyBasic.Txt = Txt;
    window.customElements.define("txt-component", Txt);
})(StrategyBasic || (StrategyBasic = {}));
