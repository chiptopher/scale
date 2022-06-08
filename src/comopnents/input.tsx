import React from 'react';

import styled from 'styled-components';

import styles from '../styles';

export type Props = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FunctionComponent<Props> = ({ label, ...rest }) => {
    return (
        <Container>
            {label}
            <input {...rest} />
        </Container>
    );
};

const Container = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 2rem;
    font-weight: bold;

    margin: 0 1rem;

    input {
        font-size: 1.5rem;
        height: 2rem;
        width: 10rem;
        padding: 0.25rem;

        border-radius: 8px;
        border: solid 1px ${styles.fontColor};
    }
`;
