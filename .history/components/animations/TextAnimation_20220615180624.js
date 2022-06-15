import React from 'react';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    const


    return (
        <Wrapper>Web Developer</Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateX(-600px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% { opacity: 1; transform: translateX(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px) }
    75% { opacity: 1; transform: translateX(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    100% { opacity: 0; transform: translateX(600px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
`

const Wrapper = styled.span`
    display: inline-block;
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
`