export class Lower implements Style{
    public applyStyle(text: string): string {
        text = text.toLowerCase()
        return text
    }
}
