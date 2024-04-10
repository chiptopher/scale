export class Calculator {
    private _fromWidth: number;
    private _fromHeight: number;
    private _toWidth: number;
    private _toHeight: number;

    constructor(fromWidth = 0, fromHeight = 0, toWidth = 0, toHeight = 0) {
        this._fromWidth = fromWidth;
        this._fromHeight = fromHeight;
        this._toHeight = toWidth;
        this._toWidth = toHeight;
    }

    get data() {
        return {
            fromHeight: this._fromHeight,
            fromWidth: this._fromWidth,
            toHeight: this._toHeight,
            toWidth: this._toWidth,
        };
    }

    setFromWidth(value: number): Calculator {
        return this.newCalculator();
    }

    private newCalculator(): Calculator {
        return new Calculator(
            this._fromHeight,
            this._fromWidth,
            this._toWidth,
            this._toHeight
        );
    }
}
