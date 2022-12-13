import React, { useState } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import {
    AtomStyled, BottomBlueLineStyled,
    ButtonStyled, ColoredTextStyled,
    DescrWrapper, GreenLineStyled, InfoSignStyled,
    InfoSignWrapper,
    InfoWrapper, ModalText, StyledCat,
    StyledTitle, TopBlueLineStyled,
    Wrapper
} from './styledComponents';
import { Modal } from '../../shared/Modal';
import { colors } from '../../../constants/colors';
import { BackgroundWrapper, ContentWrapper } from '../../shared/wrappers';
import { SWIPE_DELAY } from '../../../constants/durations';

export const StartScreen = () => {
    const {next} = useProgress();
    const [isModal, setIsModal] = useState(false);

    const onStart = () => {
        reachMetrikaGoal('start');
        setTimeout(() => {
            next();
        }, SWIPE_DELAY);
    };

    return (
        <Wrapper>
            <BackgroundWrapper>
                <TopBlueLineStyled/>
                <GreenLineStyled/>
                <BottomBlueLineStyled/>
            </BackgroundWrapper>
            <ContentWrapper>
                <StyledTitle>Какой ты{'\n'}atomic IT
                    <InfoWrapper>
                        -
                        <InfoSignWrapper onClick={() => setIsModal(true)}>
                            <InfoSignStyled/>
                        </InfoSignWrapper>
                    </InfoWrapper>
                    котик?
                </StyledTitle>
                <DescrWrapper>
                    <AtomStyled/>
                    <Description>
                        Знакомься с нашим тестом{'\n'}и отмечай лайком выражения{'\n'}про себя!
                        А мы расскажем, чем{'\n'}ты будешь заниматься в Росатоме :)
                    </Description>
                </DescrWrapper>
                <ButtonStyled onClick={onStart}> начнем </ButtonStyled>
                <StyledCat/>
            </ContentWrapper>
            {isModal && (
                <Modal onClose={() => setIsModal(false)}>
                    <ModalText>
                        <ColoredTextStyled color={colors.green}>
                            <b>Atomic IT</b>
                        </ColoredTextStyled> - это специалисты, которые работают на стыке науки и информационных
                        технологий
                    </ModalText>
                </Modal>
            )}
        </Wrapper>
    );
};
