
export class Upper implements Style{
    public applyStyle(text: string): string {
        text = text.toUpperCase()
        return text
    }
}