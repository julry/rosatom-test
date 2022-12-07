import { answerTypes } from './answersTypes';
import { CodeCat } from '../components/screens/Questions/svg/CodeCat';
import { MathCat } from '../components/screens/Questions/svg/MathCat';
import { CommunicationCat } from '../components/screens/Questions/svg/CommunicationCat';
import { DesignCat } from '../components/screens/Questions/svg/DesignCat';
import { FunCat1 } from '../components/screens/Questions/svg/FunCat1';
import { CityCat } from '../components/screens/Questions/svg/CityCat';
import { LogosCat } from '../components/screens/Questions/svg/LogosCat';
import { MDCat } from '../components/screens/Questions/svg/MDCat';
import { CourseCat } from '../components/screens/Questions/svg/CourseCat';
import { RitaCat } from '../components/screens/Questions/svg/RitaCat';
import { FunCat2 } from '../components/screens/Questions/svg/FunCat2';
import { colors } from './colors';
import { FunCat3 } from '../components/screens/Questions/svg/FunCat3';
import { HighlightedText } from '../components/shared/HighlightedText';

export const CARD_TYPES = {
    math: 'math',
    code: 'code',
    design: 'design',
    communication: 'communication',
    fun: 'fun'
};

export const QUESTION_TYPES = {
    common: 'common',
    differentiating: 'differentiating',
    random: 'random'
};

export const cards = [
    {
        id: 'startCard-' + CARD_TYPES.code,
        text: () => (
            <p>
                {'Покоряю параллельное\n'}
                <HighlightedText padding={'0 0.11em 0 0.22em'}>{'программирование.'}</HighlightedText>&nbsp;{' Скоро\n'}
                {'моему мастерству будут\nзавидовать лучшие\nповелители '}&nbsp;
                <HighlightedText>{'кода'}</HighlightedText>
            </p>
        ),
        type: QUESTION_TYPES.common,
        image: {
            svg: CodeCat,
            addictiveElement: true,
            styles: `
                   width: 53.333vw;
                   height: 57.8667vw;
                   bottom: 4.1979%;
            `
        },
        answer: {
            agree: [answerTypes.SmartCity, answerTypes.Rita, answerTypes.Logos, answerTypes.MultiD],
            disagree: [answerTypes.Course],
        },
        isDepending: true,
        dependType: QUESTION_TYPES.common,
        cardsDepending: [CARD_TYPES.communication, CARD_TYPES.math]
    },
    {
        id: 'startCard-' + CARD_TYPES.communication,
        text: () => (
            <p>
                <HighlightedText>{'Error404?'}</HighlightedText>
                {'\nСпешу на помощь! Научу\nдружить с '}&nbsp;
                <HighlightedText>{'компьютером'}</HighlightedText>{'\nдаже бабушку'}
            </p>
        ),
        type: QUESTION_TYPES.common,
        image: {
            svg: CommunicationCat,
            styles: `
                   width: 57.8667vw;
                   height: 58.6666vw;
                   bottom: 5.2474%;
            `
        },
        isDepending: true,
        answer: {
            agree: [answerTypes.Course, answerTypes.Logos],
            disagree: [answerTypes.SmartCity, answerTypes.Rita, answerTypes.MultiD],
        },
    },
    {
        id: 'startCard-' + CARD_TYPES.design,
        text: () => (
            <p>
                {'Не могу стерпеть,\nкогда '}&nbsp;<HighlightedText>{'кнопка'}</HighlightedText>&nbsp;{' на сайте\n'}
                <HighlightedText>криво-косо…</HighlightedText>
            </p>
        ),
        type: QUESTION_TYPES.common,
        image: {
            svg: DesignCat,
            addictiveElement: true,
            styles: `
                   width: 72vw;
                   height: 66.9333vw;
                   bottom: 1.6492%;
            `
        },
        answer: {
            agree: [answerTypes.MultiD, answerTypes.SmartCity],
            disagree: [answerTypes.Rita, answerTypes.Course, answerTypes.Logos],
        },
        dependType: QUESTION_TYPES.differentiating
    },
    {
        id: 'startCard-' + CARD_TYPES.math,
        text: () => (
            <p>
                {'Пятерка по '}&nbsp;<HighlightedText>математике</HighlightedText>{'\nвсегда моя!'}
            </p>
        ),
        type: QUESTION_TYPES.common,
        image: {
            svg: MathCat,
            styles: `
                   width: 69.6vw;
                   height: 57.3333vw;
                   bottom: 3.5982%;
            `
        },
        isDepending: true,
        answer: {
            agree: [answerTypes.Rita, answerTypes.MultiD, answerTypes.Logos],
            disagree: [answerTypes.Course, answerTypes.SmartCity],
        },
    },
    {
        id: 'startCard-' + CARD_TYPES.fun,
        text: () => (
            <p>
                {'Так много всего\n'}<HighlightedText>{'интересного вокруг,'}&nbsp;</HighlightedText>
                {'\nчто я даже '}&nbsp;<HighlightedText>не знаю,</HighlightedText>{'\nза что мне взяться!'}
            </p>
        ),
        type: QUESTION_TYPES.common,
        image: {
            svg: FunCat1,
            addictiveElement: true,
            styles: `
                   width: 76.5333vw;
                   height: 76vw;
                   bottom: 0;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Course,
        text: () => (
            <p>
                {'Готов '}&nbsp;<HighlightedText>поддержать</HighlightedText>{'\nв трудную минуту\nкомпьютерного '}
                &nbsp;<HighlightedText>коллапса</HighlightedText> {'\nдаже на дистанции в\nдесятки тысяч километров'}
            </p>
        ),
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: CourseCat,
            styles: `
                   width: 73.8667vw;
                   height: 63.4666vw;
                   bottom: 3.7481%;
                   left: 18.4vw;
                   transform: none;
            `
        },
        answer: {
            agree: [answerTypes.Course],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Logos,
        text: () => (
            <p>
                {'Не стану изобретать\nвелосипед – '}&nbsp;<HighlightedText>спроектирую</HighlightedText>
                {'\nнечто масштабное\nи '}&nbsp;<HighlightedText>инновационное</HighlightedText>
            </p>
        ),
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: LogosCat,
            addictiveElement: true,
            styles: `
                   width: 49.0667vw;
                   height: 67.4666vw;
                   bottom: 4.7976%;
            `
        },
        answer: {
            agree: [answerTypes.Logos],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.SmartCity,
        text: () => (
            <p>
                {'Всегда хотелось сделать\nсвой '}&nbsp;<HighlightedText>город лучше</HighlightedText>
            </p>
        ),
        image: {
            svg: CityCat,
            addictiveElement: true,
            styles: `
                   width: 50.9333vw;
                   height: 73.06666vw;
                   bottom: 1.0495%;
            `
        },
        type: QUESTION_TYPES.differentiating,
        answer: {
            agree: [answerTypes.SmartCity],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.MultiD,
        text: () => (
            <p>
                {'Мысленно соединю\nв '}&nbsp;<HighlightedText>единое</HighlightedText>&nbsp;
                {' целое\nмножество '}&nbsp;<HighlightedText>частичек</HighlightedText>{'\nв масштабе 100 к 1'}
            </p>
        ),
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: MDCat,
            styles: `
                   width: 59.7333vw;
                   height: 71.4666vw;
                   bottom: 0;
            `
        },
        answer: {
            agree: [answerTypes.MultiD],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Rita,
        text: () => (
            <p>
                {'Я за то, чтобы '}&nbsp;<HighlightedText>роботы</HighlightedText> {'\nпомогали '}&nbsp;
                <HighlightedText>человеку</HighlightedText>{'\nв повседневной жизни'}
            </p>
        ),
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: RitaCat,
            styles: `
                   width: 64.8vw;
                   height: 55.7333vw;
                   bottom: 6.5967%;
            `
        },
        answer: {
            agree: [answerTypes.Rita],
            disagree: [],
        },
    },
    {
        id: `card-${CARD_TYPES.fun}-1`,
        text: () => (<p>
            {'Хочу '}&nbsp;<HighlightedText>участвовать</HighlightedText>
            {'\nв технологических проектах\n'}<HighlightedText>мирового</HighlightedText>&nbsp;{' масштаба'}
        </p>),
        type: QUESTION_TYPES.random,
        image: {
            svg: FunCat2,
            addictiveElement: true,
            styles: `
                   width: 59.7333vw;
                   height: 64.5333vw;
                   bottom: 0;
                   left: auto;
                   right: -1.2666vw;
                   transform: none;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-2',
        text: () => (<p>
            {'Хочу создать\n'}<HighlightedText>высокотехнологичные</HighlightedText> {'\nрешения для наших\n'}
            <HighlightedText>потомков</HighlightedText>
        </p>),
        type: QUESTION_TYPES.random,
        image: {
            svg: (props) => CodeCat({...props, color: colors.green}),
            addictiveElement: true,
            styles: `
                   width: 53.333vw;
                   height: 57.8667vw;
                   bottom: 4.1979%;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-3',
        text: () => (
            <p>
                <HighlightedText>Кто, если не я</HighlightedText>{' — самый\nяркий представитель\n'}
                <HighlightedText>поколения интеллекта?</HighlightedText>
            </p>
        ),
        type: QUESTION_TYPES.random,
        image: {
            svg: DesignCat,
            addictiveElement: true,
            styles: `
                   transform: scale(-1, 1);
                   width: 72vw;
                   height: 66.9333vw;
                   bottom: 1.6492%;
                   left: auto; 
                   right: -0.8vw;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-4',
        text: () => (
            <p>
                {'Знаю, что возраст\n'}<HighlightedText>нейтронов</HighlightedText>&nbsp;{' измеряется\nне в секундах'}
            </p>
        ),
        type: QUESTION_TYPES.random,
        image: {
            svg: FunCat3,
            styles: `
                   width: 81.6vw;
                   height: 61.8666vw;
                   bottom: 1.049%;
                   left: -4.8vw;
                   transform: none;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
];
