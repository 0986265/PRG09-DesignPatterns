var StrategyBasic;
(function (StrategyBasic) {
    class Lower {
        applySyle(text) {
            text = text.toLowerCase();
            return text;
        }
    }
    StrategyBasic.Lower = Lower;
})(StrategyBasic || (StrategyBasic = {}));
