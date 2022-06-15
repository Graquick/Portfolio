import React from 'react';
import styled, { keyframes } from 'styled-components'

export default function TextAnimation() {
    const reactArray = "Web".split("")
    const reactArrayTwo = "Developer".split("")


    return (
        <Wrapper>{reactArray.map((item, index) => (
            <span className="One" key={index}>{item}</span>
        ))}
        <br/>
        {reactArrayTwo.map((item, index) => (
                    <span className="Two" key={index}>{item}</span>
                ))}
        
        </Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateY(-200px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px) }
    75% { opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    100% { opacity: 0; transform: translateY(-200px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
`

const Wrapper = styled.span`
    display: inline-block;

    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 3s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    
    .:nth-child(1) {
        animation-delay: .1s;
    }
    .:nth-child(2) {
        animation-delay: .2s;
    }
    .:nth-child(3) {
        animation-delay: .3s;
    }
    .:nth-child(4) {
        animation-delay: .4s;
    }
    .:nth-child(5) {
        animation-delay: .5s;
    }
    .:nth-child(6) {
        animation-delay: .6s;
    }
    .:nth-child(7) {
        animation-delay: .7s;
    }
    .:nth-child(8) {
        animation-delay: .8s;
    }
    .:nth-child(9) {
        animation-delay: .9s;
    }
`