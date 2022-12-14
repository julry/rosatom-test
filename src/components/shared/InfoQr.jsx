import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { colors } from '../../constants/colors';
import { BoldText } from './styledTexts';
import { BackgroundWrapper, ContentWrapper } from './wrappers';
import { DesktopGreenLine } from './svg/DesktopGreenLine';
import { desktopCat } from '../../constants/images';
import { Atom } from './svg/Atom';
import { LogoDesktop } from './svg/LogoDesktop';
import { FlexWrapper } from './FlexWrapper';
import { Modal } from './Modal';
import { DoneMark } from './svg/DoneMark';

const ContentWrapperStyled = styled(ContentWrapper)`
  margin: 0;
  max-width: none;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: relative;
  background: white;
  justify-content: space-between;
  padding: 21.9444vh 6.25vw 0;
  width: 100%;
  height: 100%;
`;

const Title = styled(BoldText)`
  font-size: 59px;
  text-transform: uppercase;
`;

const TextWrapper = styled(FlexWrapper)`
  font-size: 20px;
  justify-content: space-between;
  align-items: flex-start;
  flex-grow: 1;
  margin-left: 25px;
  flex-direction: column;
  height: 220px;
  padding: 5px 0;
`;

const TextBold = styled(BoldText)`
  text-transform: uppercase;
`;

const QrWrapper = styled(FlexWrapper)`
  margin-top: auto;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 9.16667vh;
  
  @media screen and (max-height: 690px) {
    margin-bottom: 5.16667vh;
  }

  @media screen and (max-height: 660px) {
    margin-bottom: 2.16667vh;
  }
`;

const ImageWrapper = styled(FlexWrapper)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 80vh;
  align-items: flex-end;
  max-width: calc(93.75vw - 590px);
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const CopyBtn = styled.span`
  color: ${colors.darkBlue};
  cursor: pointer;
  text-decoration: underline;
`;

const DesktopGreenLineStyled = styled(DesktopGreenLine)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  min-height: 720px;
`;

const AtomStyled = styled(Atom)`
  position: absolute;
  top: 5.8333vh;
  left: 57.4219vw;
  width: 70px;
  height: 70px;
`;

const LogoDesktopStyled = styled(LogoDesktop)`
  position: absolute;
  right: 3.2vw;
  top: 5.8333vh;
  width: 243px;
  height: 43px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
`;

const DoneMarkStyled = styled(DoneMark)`
  height: 116px;
  width: 116px;
  margin-bottom: 24px;
`;

const onLinkCopy = () => {
    const text = window.location.href?.split('?')[0];
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData('Text', text);
    } else if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const isOS = () => navigator.userAgent.match(/ipad|iphone/i);
        const textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed';
        textarea.disabled = true;
        document.body.appendChild(textarea);
        if (isOS()) {
            const range = document.createRange();
            range.selectNodeContents(textarea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textarea.setSelectionRange(0, 999999);
        } else {
            textarea.select();
        }
        try {
            return document.execCommand('copy');
        } catch (ex) {
            console.warn('Copy to clipboard failed.', ex);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

export const InfoQr = () => {
    const ref = useRef();
    const [isModal, setIsModal] = useState(false);

    const onCopyButtonClick = () => {
        onLinkCopy();
        setIsModal(true);
        setTimeout(() => setIsModal(false), 3500);
    };

    useEffect(() => {
        if (!ref?.current?.children.length) {
            const qrCode = new QRCodeStyling({
                width: 220,
                height: 220,
                type: "svg",
                dotsOptions: {
                    color: colors.blue,
                    type: 'rounded'
                },
                cornersSquareOptions: {
                    type: 'extra-rounded',
                    color: colors.green
                },
                cornersDotOptions: {
                    type: 'extra-rounded',
                    color: colors.blue
                },
                imageOptions: {
                    margin: 5,
                    imageSize: 0.5
                },
                data: window.location.href
            });
            qrCode.append(ref.current);
        }
    }, []);

    return (
        <Wrapper>
            <BackgroundWrapper>
                <DesktopGreenLineStyled />
                <AtomStyled/>
                <LogoDesktopStyled />
            </BackgroundWrapper>
            <ContentWrapperStyled>
                <Title>{'Welcome ?? ??????\nAtomic IT-??????????????'}</Title>
                <QrWrapper>
                    <div ref={ref} />
                    <TextWrapper>
                        <p>{'?????????? ????????????, ?????????? ???????????? ????????????????\n???????????????? ???????????? ????????? ' +
                            '?????? ??????????\n?????????? ?????????????? ?????? ???????? ?? ????????????????.\n' +
                            '?? ???? ???????? ?? ???????? ??????????????!'}
                        </p>
                        <TextBold>?????????????? ???????? <CopyBtn onClick={onCopyButtonClick}>????????????</CopyBtn>{'\n'}?????? ???????????????? QR-??????</TextBold>
                    </TextWrapper>
                </QrWrapper>
            </ContentWrapperStyled>
            {isModal && (
                <Modal>
                    <ModalContent>
                        <DoneMarkStyled />
                        <p>???????????? ??????????????????????</p>
                    </ModalContent>
                </Modal>
            )}
            <ImageWrapper>
                <Image src={desktopCat} alt={''} />
            </ImageWrapper>
        </Wrapper>
    );
};
