import { Calculator } from './data';

describe('Calculator', () => {
    let calculator = new Calculator({});

    beforeEach(() => {
        calculator = new Calculator({});
    });

    test('shoud init with  empty data', () => {
        expect(calculator.data.fromHeight).toBeNaN();
        expect(calculator.data.fromWidth).toBeNaN();
        expect(calculator.data.toWidth).toBeNaN();
        expect(calculator.data.toHeight).toBeNaN();
        expect(calculator.data.scale).toBeNaN();
    });

    describe('setFromWidth', () => {
        test('sets the value', () => {
            const result = calculator.setFromWidth(10);
            expect(result.data.fromWidth).toEqual(10);

            expect(calculator.data.fromHeight).toBeNaN();
            expect(calculator.data.toWidth).toBeNaN();
            expect(calculator.data.toHeight).toBeNaN();
            expect(calculator.data.scale).toBeNaN();
        });
        test('can be set to 0', () => {
            const result = calculator.setFromWidth(0);
            expect(result.data.fromWidth).toEqual(0);
        });
        test('clears values', () => {
            const result = calculator
                .setFromHeight(1)
                .setFromWidth(2)
                .setToHeight(10)
                .setFromWidth(3);

            expect(result.data.toHeight).toEqual(NaN);
            expect(result.data.toWidth).toEqual(NaN);
            expect(result.data.scale).toEqual(NaN);
        });
    });

    describe('setFromHeight', () => {
        test('sets the value', () => {
            const result = calculator.setFromHeight(10);
            expect(result.data.fromHeight).toEqual(10);

            expect(calculator.data.fromWidth).toBeNaN();
            expect(calculator.data.toWidth).toBeNaN();
            expect(calculator.data.toHeight).toBeNaN();
            expect(calculator.data.scale).toBeNaN();
        });
        test('can be set to 0', () => {
            const result = calculator.setFromHeight(0);
            expect(result.data.fromHeight).toEqual(0);
        });
        test('clears values', () => {
            const result = calculator
                .setFromHeight(1)
                .setFromWidth(2)
                .setToHeight(10)
                .setFromHeight(3);

            expect(result.data.toHeight).toEqual(NaN);
            expect(result.data.toWidth).toEqual(NaN);
            expect(result.data.scale).toEqual(NaN);
        });
    });

    describe('setToHeight', () => {
        test('sets the value', () => {
            const result = calculator.setToHeight(10);
            expect(result.data.toHeight).toEqual(10);

            expect(calculator.data.fromHeight).toBeNaN();
            expect(calculator.data.fromWidth).toBeNaN();
            expect(calculator.data.toWidth).toBeNaN();
            expect(calculator.data.scale).toBeNaN();
        });
        test('can be set to 0', () => {
            const result = calculator.setToHeight(0);
            expect(result.data.toHeight).toEqual(0);
        });
        test('recalculates', () => {
            const result = calculator
                .setFromHeight(1)
                .setFromWidth(2)
                .setToHeight(10);

            expect(result.data.toWidth).toEqual(20);
            expect(result.data.scale).toEqual(10);
        });
    });

    describe('setToWidth', () => {
        test('sets the value', () => {
            const result = calculator.setToWidth(10);
            expect(result.data.toWidth).toEqual(10);

            expect(calculator.data.fromHeight).toBeNaN();
            expect(calculator.data.fromWidth).toBeNaN();
            expect(calculator.data.toHeight).toBeNaN();
            expect(calculator.data.scale).toBeNaN();
        });
        test('can be set to 0', () => {
            const result = calculator.setToWidth(0);
            expect(result.data.toWidth).toEqual(0);
        });

        test('recalculates', () => {
            const result = calculator
                .setFromHeight(1)
                .setFromWidth(2)
                .setToWidth(20);

            expect(result.data.toHeight).toEqual(10);
            expect(result.data.scale).toEqual(10);
        });
    });

    describe('setScale', () => {
        test('sets the value', () => {
            const result = calculator.setScale(10);
            expect(result.data.scale).toEqual(10);

            expect(calculator.data.fromHeight).toBeNaN();
            expect(calculator.data.fromWidth).toBeNaN();
            expect(calculator.data.toWidth).toBeNaN();
            expect(calculator.data.toHeight).toBeNaN();
        });
        test('can be set to 0', () => {
            const result = calculator.setScale(0);
            expect(result.data.scale).toEqual(0);
        });
        test('recalculates', () => {
            const result = calculator
                .setFromHeight(1)
                .setFromWidth(2)
                .setScale(10);

            expect(result.data.toHeight).toEqual(10);
            expect(result.data.toWidth).toEqual(20);
        });
    });
});
