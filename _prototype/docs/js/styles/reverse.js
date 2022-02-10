var StrategyBasic;
(function (StrategyBasic) {
    class Reverse {
        applySyle(text) {
            let splitArray = text.split("");
            let reverseArray = splitArray.reverse();
            return reverseArray.join("");
        }
    }
    StrategyBasic.Reverse = Reverse;
})(StrategyBasic || (StrategyBasic = {}));
