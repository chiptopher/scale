import { useState } from 'react';

import { Calculator } from './data';

function App() {
    const [calculator, setCalculator] = useState(new Calculator({}));

    return (
        <div className="container">
            <main>
                <h1>Dimensions Scale</h1>
                <div className="from">
                    <div>
                        <button
                            onClick={() => {
                                setCalculator(new Calculator({}));
                            }}
                        >
                            Clear
                        </button>
                    </div>
                    <div className="inputs">
                        <input
                            onChange={e =>
                                setCalculator(
                                    calculator.setFromWidth(
                                        parseFloat(e.currentTarget.value)
                                    )
                                )
                            }
                            type="number"
                            value={
                                calculator.data.fromWidth === 0
                                    ? 0
                                    : calculator.data.fromWidth || ''
                            }
                        />
                        <span>x</span>
                        <input
                            onChange={e =>
                                setCalculator(
                                    calculator.setFromHeight(
                                        parseFloat(e.currentTarget.value)
                                    )
                                )
                            }
                            type="number"
                            value={
                                calculator.data.fromHeight === 0
                                    ? 0
                                    : calculator.data.fromHeight || ''
                            }
                        />
                    </div>
                </div>
                <div className="result">
                    <span className="title">Scales to:</span>
                    <div className="inputs">
                        <input
                            onChange={e =>
                                setCalculator(
                                    calculator.setToWidth(
                                        parseFloat(e.currentTarget.value)
                                    )
                                )
                            }
                            type="number"
                            value={
                                calculator.data.toWidth === 0
                                    ? 0
                                    : calculator.data.toWidth || ''
                            }
                        />
                        <span>x</span>
                        <input
                            onChange={e =>
                                setCalculator(
                                    calculator.setToHeight(
                                        parseFloat(e.currentTarget.value)
                                    )
                                )
                            }
                            type="number"
                            value={
                                calculator.data.toHeight === 0
                                    ? 0
                                    : calculator.data.toHeight || ''
                            }
                        />
                    </div>
                    <div>
                        <span>Scale: </span>
                        <input
                            onChange={e => {
                                setCalculator(
                                    calculator.setScale(
                                        parseFloat(e.currentTarget.value)
                                    )
                                );
                            }}
                            type="number"
                            value={
                                calculator.data.scale === 0
                                    ? 0
                                    : calculator.data.scale || ''
                            }
                        />
                    </div>
                </div>
            </main>
            <footer>
                <ul>
                    <li>
                        <a
                            href="https://github.com/chiptopher/scale"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Source
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://chrismboyer.com"
                            rel="noreferrer"
                            target="_blank"
                        >
                            &copy; {new Date().getFullYear()} Christopher M.
                            Boyer
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
