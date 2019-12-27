import {ITextMeasurer} from "../../Interfaces/ITextMeasurer";
import {VexFlowConverter} from "./VexFlowConverter";
import { Font } from "../../../Common/DataObjects";
/**
 * Created by Matthias on 21.06.2016.
 */

export class VexFlowTextMeasurer implements ITextMeasurer {
    constructor() {
        const canvas: HTMLCanvasElement = document.createElement("canvas");
        this.context = canvas.getContext("2d");
    }
    // The context of a canvas used internally to compute font sizes
    private context: CanvasRenderingContext2D;
    public defaultFontSize: number = 20;

    /**
     *
     * @param text
     * @param font
     * @param style
     * @returns {number}
     */
    public computeTextWidthToHeightRatio(
      text: string,
      font: Font,
    ): number {
      let f: Font = font;
      if (f.Size === undefined) {
        f = f.clone();
        f.Size = this.defaultFontSize;
      }
      this.context.font = VexFlowConverter.font(font);
      return this.context.measureText(text).width / f.Size;
    }

    public setDefaultFontSize(value: number = 20): number {
      this.defaultFontSize = value;
      return value;
    }
}
