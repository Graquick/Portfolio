import React from 'react';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
        <Wrapper>Web Developer</Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY}
    25% { opacity: 1; }
    75% { opacity: 1; }
    100% { opacity: 0; }
`

const Wrapper = styled.span`
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`