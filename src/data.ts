interface Data {
    fromHeight: number;
    fromWidth: number;
    scale: number;
    toHeight: number;
    toWidth: number;
}

const clearCalculatedValues: Pick<Data, 'toHeight' | 'toWidth' | 'scale'> = {
    scale: NaN,
    toHeight: NaN,
    toWidth: NaN,
};

export class Calculator {
    private _fromWidth: number;
    private _fromHeight: number;
    private _toWidth: number;
    private _toHeight: number;
    private _scale: number;

    constructor(data: Partial<Data>) {
        this._fromWidth = data.fromWidth === 0 ? 0 : data.fromWidth || NaN;
        this._fromHeight = data.fromHeight === 0 ? 0 : data.fromHeight || NaN;
        this._toHeight = data.toHeight === 0 ? 0 : data.toHeight || NaN;
        this._toWidth = data.toWidth === 0 ? 0 : data.toWidth || NaN;
        this._scale = data.scale === 0 ? 0 : data.scale || NaN;
    }

    get data(): Data {
        return {
            fromHeight: this._fromHeight,
            fromWidth: this._fromWidth,
            scale: this._scale,
            toHeight: this._toHeight,
            toWidth: this._toWidth,
        };
    }

    setFromWidth(value: number): Calculator {
        return this.newCalculator({
            fromWidth: value,
            ...clearCalculatedValues,
        });
    }

    setFromHeight(value: number): Calculator {
        return this.newCalculator({
            fromHeight: value,
            ...clearCalculatedValues,
        });
    }

    setToHeight(toHeight: number): Calculator {
        const scale = toHeight / this._fromHeight;
        return this.newCalculator({
            scale,
            toHeight: toHeight,
            toWidth: this._fromWidth * scale,
        });
    }

    setToWidth(toWidth: number): Calculator {
        const scale = toWidth / this._fromWidth;
        return this.newCalculator({
            scale,
            toHeight: this._fromHeight * scale,
            toWidth,
        });
    }

    setScale(scale: number): Calculator {
        return this.newCalculator({
            scale,
            toHeight: this._fromHeight * scale,
            toWidth: this._fromWidth * scale,
        });
    }

    private newCalculator(data: Partial<Data>): Calculator {
        const newData = {
            ...this.data,
            ...data,
        };
        return new Calculator(newData);
    }
}
