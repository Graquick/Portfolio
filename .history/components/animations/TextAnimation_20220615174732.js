import React from 'react';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    return (
        <Wrapper>Web Developer</Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; }
    0% { opacity: 0; }
    0% { opacity: 0; }
    100% { opacity: 0; }
`

const Wrapper = styled.span``