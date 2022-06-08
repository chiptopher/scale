import { useState } from 'react';

import styled from 'styled-components';

import { HoverContainer } from './comopnents/hover-container';
import { Input } from './comopnents/input';

function App() {
    const [fromWidth, setFromWidth] = useState<number | null>(null);
    const [fromHeight, setFromHeight] = useState<number | null>(null);

    const [toWidth, setToWidth] = useState<number | null>(null);
    const [toHeight, setToHeight] = useState<number | null>(null);

    const [divisor, setDivisor] = useState<number | null>(null);

    const clear = () => {
        setToWidth(null);
        setToHeight(null);
        setDivisor(null);
    };

    return (
        <Container>
            <HoverContainer>
                <Input
                    label="Width"
                    onChange={e => setFromWidth(parseInt(e.target.value))}
                    value={fromWidth || ''}
                />
                <Input
                    label="Height"
                    onChange={e => setFromHeight(parseInt(e.target.value))}
                    value={fromHeight || ''}
                />
            </HoverContainer>
            <p className="scales-to">Scales To</p>
            <HoverContainer>
                <Input
                    label="Width"
                    onChange={e => {
                        const newWidth = parseInt(e.target.value);
                        setToWidth(newWidth);
                        if (fromWidth && fromHeight) {
                            const divisor = newWidth / fromWidth;
                            setDivisor(divisor);
                            setToHeight(fromHeight * divisor);
                        }
                    }}
                    onFocus={clear}
                    value={toWidth || ''}
                />
                <Input
                    label="Height"
                    onChange={e => {
                        const newHeight = parseInt(e.target.value);
                        setToHeight(newHeight);
                        if (fromWidth && fromHeight) {
                            const divisor = newHeight / fromHeight;
                            setDivisor(divisor);
                            setToWidth(fromWidth * divisor);
                        }
                    }}
                    onFocus={clear}
                    value={toHeight || ''}
                />
            </HoverContainer>
            <p>
                <span>Scale</span>&nbsp;
                {divisor}
            </p>
        </Container>
    );
}

export default App;

const Container = styled.div`
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

    p {
        font-size: 2rem;
    }
`;
