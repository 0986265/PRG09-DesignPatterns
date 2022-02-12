export class Reverse {
    applyStyle(text) {
        let splitArray = text.split("");
        let reverseArray = splitArray.reverse();
        return reverseArray.join("");
    }
}
