namespace StrategyBasic {
export class Reverse {
    public applySyle(text: string): string {

        let splitArray = text.split("")
        let reverseArray = splitArray.reverse()

        return reverseArray.join("")

    }
}
}