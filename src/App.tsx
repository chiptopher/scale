import { useMemo, useState } from 'react';

function App() {
    const [fromWidth, setFromWidth] = useState<string>('');
    const [fromHeight, setFromHeight] = useState<string>('');

    const [toWidth, setToWidth] = useState<string>('');
    const [toHeight, setToHeight] = useState<string>('');

    const divisor = useMemo((): string => {
        const hasUnsetValue = [fromWidth, fromHeight, toWidth, toHeight]
            .map(parseFloat)
            .includes(NaN);

        return hasUnsetValue
            ? ''
            : (parseFloat(toWidth) / parseFloat(fromWidth)).toFixed(2);
    }, [fromWidth, fromHeight, toWidth, toHeight]);

    const scale = parseFloat(fromHeight) / parseFloat(fromWidth);

    const clearTo = () => {
        setToWidth('');
        setToHeight('');
    };

    const clearFrom = () => {
        setFromWidth('');
        setFromHeight('');
    };

    const [scaleBy, setScaleBy] = useState<'pixels' | 'multiplier'>('pixels');

    return (
        <div className="container">
            <main>
                <h1>Dimensions Scale</h1>
                <div className="from">
                    <div className="inputs">
                        <input
                            onChange={e => setFromWidth(e.currentTarget.value)}
                            type="number"
                            value={fromWidth}
                        />
                        <span>x</span>
                        <input
                            onChange={e => setFromHeight(e.currentTarget.value)}
                            type="number"
                            value={fromHeight}
                        />
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                clearTo();
                                clearFrom();
                            }}
                        >
                            Clear
                        </button>
                    </div>
                </div>
                <div className="result">
                    <span className="title">Scales to:</span>
                    <div className="inputs">
                        <input
                            onChange={e => {
                                setToWidth(e.currentTarget.value);
                                setToHeight(
                                    (
                                        parseFloat(e.currentTarget.value) *
                                        scale
                                    ).toString()
                                );
                            }}
                            onFocus={() => clearTo()}
                            type="number"
                            value={toWidth}
                        />
                        <span>x</span>
                        <input
                            onChange={e => {
                                setToHeight(e.currentTarget.value);
                                setToWidth(
                                    (
                                        parseFloat(e.currentTarget.value) /
                                        scale
                                    ).toString()
                                );
                            }}
                            onFocus={() => clearTo()}
                            type="number"
                            value={toHeight}
                        />
                    </div>
                    <div>
                        <span>Scale: </span>
                        <input type="number" value={divisor} />
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
