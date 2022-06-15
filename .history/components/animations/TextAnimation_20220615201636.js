import React, { useEffect, useState } from 'react';
import { useInterval } from 'react-use';
import styled, { keyframes } from 'styled-components';

export default function TextAnimation() {
    const reactArray = "React".split("")
    const swiftArray = "Designer".split("")
    const [items, setItems] = useState(reactArray)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(false)

    useInterval (
        () => {
            // Animate React
            setItems(reactArray)
            setCount(count + 1)

            // Animate Swift, Looping
            if (count == 1) {
                setCount(0)
                setItems(swiftArray)
            }
        },
        play ? 6000 : null
    )

    useEffect(() => {
        const timer = setTimeout(() => {
            // Animate Swift after Timeout
            setItems(swiftArray)
            setPlay(true)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <Wrapper>{items.map((item, index) => (
            <span key={index}>{item}</span>
        ))}
        
        </Wrapper>
    )
}

const animation = keyframes`
    0% { opacity: 0; transform: translateX(-50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px);}
    25% { opacity: 1; transform: translateX(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px) }
    75% { opacity: 1; transform: translateX(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter: blur(0px)}
    100% { opacity: 0; transform: translateX(50px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter: blur(10px)}
`

const Wrapper = styled.span`
    display: inline-flex;
    flex-direction: row;

    span {
        display: inline-block;
        opacity: 0;
        animation-name: ${animation};
        animation-duration: 6s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-timing: cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    
    span:nth-child(1) {
        animation-delay: .1s;
    }
    span:nth-child(2) {
        animation-delay: .2s;
    }
    span:nth-child(3) {
        animation-delay: .3s;
    }
    span:nth-child(4) {
        animation-delay: .4s;
    }
    span:nth-child(5) {
        animation-delay: .5s;
    }
    span:nth-child(6) {
        animation-delay: .6s;
    }
    span:nth-child(7) {
        animation-delay: .7s;
    }
    span:nth-child(8) {
        animation-delay: .8s;
    }
    span:nth-child(9) {
        animation-delay: .9s;
    }
    
`