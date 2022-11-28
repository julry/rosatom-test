import React, { useEffect, useState, useRef, createRef } from 'react';
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { preloadImage } from './utils/preloadImage';
import { Title } from './components/shared/styledTexts';
import { LogoStyled } from './components/shared/LogoStyled';
import { Transition, CSSTransition, SwitchTransition } from 'react-transition-group';
import { screens } from './constants/screens.config';

const Wrapper = styled.div`
  ${({styles}) => styles};
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const MobileViewLandscaped = styled.div`
  display: none;
  
  @media screen and (orientation: landscape) and (max-height: 640px) and (min-width: 400px) {
    display: block;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
  }
`;

const ComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow-x: hidden;
  white-space: pre-line;
  transition: opacity 300ms;
`;


function App() {
    const [height, setHeight] = useState('100vh');
    const progress = useProgressInit();
    const {screen, answers, cards} = progress;

    useEffect(() => {
        const preloadImages = screen?.preloadImages;
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [screen]);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screen]);

    const duration = 600;

    const defaultStyle = {
        transition: `transform ${duration}ms ease-in-out`,
    }

    const transitionStyles = {
        entering: {  transform: 'translateY(0)', top: 0, left: 0 },
        entered:  {  transform: 'translateY(0)', top: 0, left: 0 },
        exiting:  { transform: 'translateY(-100%)' },
        exited:  { transform: 'translateY(-100%)'},
    };

    const getTransitionStyle = (state, id) => {
        if (Object.keys(answers).length === cards.length && id === 1) {
            const lastAnswerId = [...Object.keys(answers)].reverse()[0];
            const isLastAgreed = answers[lastAnswerId]?.isAgreed;
            const styles =  {
                ...transitionStyles,
                exiting:  { transform: isLastAgreed ? 'translateY(-100%)' : 'translateY(100%)'},
                exited:  { transform: isLastAgreed ? 'translateY(-100%)' : 'translateY(100%)'},
            };
            return styles[state]
        }
        return transitionStyles[state];
    }

    return (
        <ProgressProvider value={progress}>
            <Wrapper styles={{height}}>
                {screens.map(mappedScreen => {
                    const Component = mappedScreen.component;
                    return (
                        <Transition
                            key={mappedScreen.id}
                            in={mappedScreen.id === screen.id}
                            timeout={duration}
                            nodeRef={mappedScreen.ref}
                            mountOnEnter
                        >
                            {state => (
                                    <ComponentWrapper
                                        ref={mappedScreen.ref}
                                        style={{
                                            ...defaultStyle,
                                            ...getTransitionStyle(state, mappedScreen.id),
                                            zIndex: 10 - mappedScreen.id
                                        }}
                                    >
                                        <LogoStyled/>
                                        <Component/>
                                    </ComponentWrapper>
                                )
                            }
                            {/*<LogoWrapper>*/}
                            {/*    <Logo/>*/}
                            {/*</LogoWrapper>*/}
                            {/*<MobileViewLandscaped>*/}
                            {/*    <InfoScreen direction={'row'}>*/}
                            {/*        <InfoBackground />*/}
                            {/*        <OrientationIcon />*/}
                            {/*        <Title>Пожалуйста, переверни устройство :)</Title>*/}
                            {/*    </InfoScreen>*/}
                            {/*</MobileViewLandscaped>*/}
                        </Transition>
                    );
                })}
                {/*{isMobile && (*/}
                {/*)}*/}
                {/*{!isMobile && (*/}
                {/*    <InfoScreen direction={'column'}>*/}
                {/*        <InfoBackground/>*/}
                {/*        <InfoQr />*/}
                {/*    </InfoScreen>*/}
                {/*)}*/}
            </Wrapper>
        </ProgressProvider>
    );
}

export default App;
