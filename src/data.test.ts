import { Calculator } from './data';

describe('Calculator', () => {
    let calculator = new Calculator();

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('setFromWidth', () => {
        calculator.setFromWidth(10);
    });
});
