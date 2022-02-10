var StrategyBasic;
(function (StrategyBasic) {
    class Upper {
        applySyle(text) {
            text = text.toUpperCase();
            return text;
        }
    }
    StrategyBasic.Upper = Upper;
})(StrategyBasic || (StrategyBasic = {}));
