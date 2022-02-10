namespace StrategyBasic {
    export class Txt extends HTMLElement {
    
        private text : string = ""
        private dab : Dab;
    
        constructor(text : string) {
            super()
    
            this.text = text
    
            let main = document.getElementsByTagName("main")[0]
            main.appendChild(this)
    
            this.showText()
        }
    
        public setStyle(style : Dab) {
    
            this.dab = style
            this.text = this.dab.applyStyle(this.text)
    
            this.showText()
        }
    
        private showText() : void {
            this.innerHTML = this.text
        }
    }
    
    window.customElements.define("txt-component", Txt as any)

}


