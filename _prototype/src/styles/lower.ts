namespace StrategyBasic {
export class Lower {
    public applySyle(text: string): string {
        text = text.toLowerCase()
        return text
    }
}
}