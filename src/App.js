import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { preloadImage } from './utils/preloadImage';
import { Title } from './components/shared/styledTexts';
import { LogoStyled } from './components/shared/LogoStyled';
import { Transition } from 'react-transition-group';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  white-space: pre-line;
`;


function App() {
    const [height, setHeight] = useState('100vh');
    const progress = useProgressInit();
    const {screen, updateProgress, hasAllAnswers} = progress;
    const Component = screen?.component || (() => null);
    const wrapperRef = useRef(null);
    const animatedScreens = [3];

    useEffect(() => {
        updateProgress('wrapperRef', wrapperRef);
    }, []);

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

    const duration = 300;

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered:  { opacity: 1 },
        exiting:  { opacity: 0 },
        exited:  { opacity: 0 },
    };

    return (
        <ProgressProvider value={progress}>
            <Wrapper styles={{height}}>
                <Transition
                    nodeRef={wrapperRef}
                    in={true}
                    appear={true}
                    timeout={duration}
                >
                        {state =>(
                            <ComponentWrapper
                                ref={wrapperRef}
                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            >
                                <LogoStyled/>
                                <Component/>
                            </ComponentWrapper>
                        )}

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
