
export class Reverse implements Style {
    applyStyle(text: string): string {

        let splitArray = text.split("")
        let reverseArray = splitArray.reverse()

        return reverseArray.join("")

    }
}
