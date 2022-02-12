import { Lower } from "./styles/lower.js";
import { Reverse } from "./styles/reverse.js";
import { Upper } from "./styles/upper.js";
import { Txt } from "./txt.js";
export class Main {
    constructor() {
        let txt1 = new Txt("Hello World");
        let txt2 = new Txt("Jesse Stolk");
        let txt3 = new Txt("Bob Pikaar");
        txt1.setStyle(new Lower());
        txt2.setStyle(new Upper());
        txt3.setStyle(new Reverse());
    }
}
window.addEventListener("load", () => new Main());
