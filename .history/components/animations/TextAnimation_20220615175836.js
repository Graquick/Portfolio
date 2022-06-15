import React from 'react';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
        <Wrapper>Web Developer</Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-400px);}
    25% { opacity: 1; transform: translateY(0); }
    75% { opacity: 1; transform: translateY(0);}
    100% { opacity: 0; transform: translateY(-200px);}
`

const Wrapper = styled.span`
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`