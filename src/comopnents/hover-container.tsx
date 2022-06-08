import React from 'react';

import styled from 'styled-components';

interface Props {
    children: React.ReactNode;
}

export const HoverContainer: React.FunctionComponent<Props> = ({
    children,
}) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    display: flex;
    background-color: white;

    --shadow-color: 0deg 0% 58%;

    box-shadow: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
        0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
        2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
        5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    border-radius: 8px;
    padding: 1rem;
`;
