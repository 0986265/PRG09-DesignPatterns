var StrategyBasic;
(function (StrategyBasic) {
    class Main {
        constructor() {
            let txt = new StrategyBasic.Txt("Hello World");
            txt.setStyle(new StrategyBasic.Upper());
        }
    }
    StrategyBasic.Main = Main;
    window.addEventListener("load", () => new StrategyBasic.Main());
})(StrategyBasic || (StrategyBasic = {}));
