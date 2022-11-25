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
}

export const cards = [
    {
        id: 'startCard-' + CARD_TYPES.code,
        text: 'Покоряю параллельное программирование. Скоро моему мастерству будут завидовать лучшие повелители кода',
        type: QUESTION_TYPES.common,
        image: {
            svg: CodeCat,
            addictiveElement: true,
            styles: `
                   width: 53.333vw;
                   height: 32.5337vh;
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
        text: 'Error404? Спешу на помощь! Научу дружить с компьютером даже бабушку',
        type: QUESTION_TYPES.common,
        image: {
            svg: CommunicationCat,
            styles: `
                   width: 57.8667vw;
                   height: 32.9835vh;
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
        text: 'Не могу стерпеть, когда кнопка на сайте криво-косо…',
        type: QUESTION_TYPES.common,
        image: {
            svg: DesignCat,
            addictiveElement: true,
            styles: `
                   width: 72vw;
                   height: 37.6312vh;
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
        text: 'Пятерка по математике всегда моя!',
        type: QUESTION_TYPES.common,
        image: {
            svg: MathCat,
            styles: `
                   width: 69.6vw;
                   height: 32.2338vh;
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
        text: 'Так много всего интересного вокруг, что я даже не знаю, за что мне взяться!',
        type: QUESTION_TYPES.common,
        image: {
            svg: FunCat1,
            addictiveElement: true,
            styles: `
                   width: 67.5333vw;
                   height: 37.7229vh;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Course,
        text: 'Готов поддержать в трудную минуту компьютерного коллапса даже на дистанции в десятки тысяч километров',
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: CourseCat,
            styles: `
                   margin-right: -25vw;
                   width: 73.8667vw;
                   height: 35.6821vh;
            `
        },
        answer: {
            agree: [answerTypes.Course],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Logos,
        text: 'Не стану изобретать велосипед – спроектирую нечто масштабное и инновационное',
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: LogosCat,
            addictiveElement: true,
            styles: `
                   margin-top: -5.997vh;
                   width: 49.0667vw;
                   height: 37.931vh;
            `
        },
        answer: {
            agree: [answerTypes.Logos],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.SmartCity,
        text: 'Всегда хотелось сделать свой город лучше',
        image: {
            svg: CityCat,
            addictiveElement: true,
            styles: `
                   width: 50.9333vw;
                   height: 41.0795vh;
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
        text: 'Мысленно соединю в единое целое множество частичек в масштабе 100 к 1',
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: MDCat,
            styles: `
                   width: 59.7333vw;
                   height: 40.1799vh;
            `
        },
        answer: {
            agree: [answerTypes.MultiD],
            disagree: [],
        },
    },
    {
        id: 'card-' + answerTypes.Rita,
        text: 'Я за то, чтобы роботы помогали человеку в повседневной жизни',
        type: QUESTION_TYPES.differentiating,
        image: {
            svg: RitaCat,
            styles: `
                   width: 64.8vw;
                   height: 31.3343vh;
            `
        },
        answer: {
            agree: [answerTypes.Rita],
            disagree: [],
        },
    },
    {
        id: `card-${CARD_TYPES.fun}-1`,
        text: 'Хочу участвовать\nв технологических\nпроектах мирового\nмасштаба',
        type: QUESTION_TYPES.random,
        image: {
            svg: FunCat2,
            addictiveElement: true,
            styles: `
                   width: 59.7333vw;
                   height: 37.2819vh;
                   margin-right: -20vw;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-2',
        text: 'Хочу создать высокотехнологичные решения для наших потомков',
        type: QUESTION_TYPES.random,
        image: {
            svg: (props) => CodeCat({...props, color: colors.green}),
            addictiveElement: true,
            styles: `
                   width: 53.333vw;
                   height: 32.5337vh;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-3',
        text: 'Кто, если не я – самый яркий представитель поколения интеллекта?',
        type: QUESTION_TYPES.random,
        image: {
            svg: DesignCat,
            addictiveElement: true,
            styles: `
                   transform: scale(-1, 1);
                   margin: -2vh -18vw 0 0;
                   width: 72vw;
                   height: 37.6312vh;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
    {
        id: 'card-fun-4',
        text: 'Знаю, что возраст нейтронов измеряется не в секундах',
        type: QUESTION_TYPES.random,
        image: {
            svg: FunCat3,
            styles: `
                   margin-top: 2vh;
                   width: 81.6vw;
                   height: 34.7826vh;
            `
        },
        answer: {
            agree: [],
            disagree: [],
        },
    },
];
