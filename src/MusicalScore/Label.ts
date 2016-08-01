import {TextAlignment} from "../Common/Enums/TextAlignment";
import {OSMDColor} from "../Common/DataObjects/OSMDColor";
import {Fonts} from "../Common/Enums/Fonts";
import {FontStyles} from "../Common/Enums/FontStyles";

export class Label {
    constructor(text: string = "", alignment: TextAlignment = TextAlignment.LeftBottom, font: Fonts = Fonts.TimesNewRoman) {
        this.text = text;
        this.textAlignment = alignment;
        this.font = font;
    }
    public text: string;
    public color: OSMDColor;
    public font: Fonts;
    public fontStyle: FontStyles;
    public fontHeight: number;
    public textAlignment: TextAlignment;
    public ToString(): string {
        return this.text;
    }
}