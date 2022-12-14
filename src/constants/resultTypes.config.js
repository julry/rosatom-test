import { answerTypes } from './answersTypes';
import { LogosFinalCat } from '../components/screens/Final/svg/LogosFinalCat';
import { SmartCityFinalCat } from '../components/screens/Final/svg/SmartCityFinalCat';
import { MDFinalCat } from '../components/screens/Final/svg/MDFinalCat';
import { CourseFinalCat } from '../components/screens/Final/svg/CourseFinalCat';
import { RitaFinalCat } from '../components/screens/Final/svg/RitaFinalCat';

export const resultTypes = {
    [answerTypes.Logos]: {
        type: answerTypes.Logos,
        label: 'Суперкот',
        shortMiniLabel: true,
        miniLabel: 'Или любитель суперкомпьютеров…\nТочнее, почти профессионал!',
        description: 'В Росатоме будут тебе очень рады, ведь в проекте «Логос»\n' +
            'без твоей помощи не обойтись. Тебя ждет инженерный\nанализ и суперкомпьютерное моделирование физических\nпроцессов в высокотехнологичных отраслях\nпромышленности. Твой энтузиазм и интеллект\n' +
            'пригодятся везде!',
        image: {
            svg: LogosFinalCat,
            styles: `
                   width: 40.8vw;
                   height: 49.6vw;
                   bottom: 2.9985%;
                   left: 5.5vw;
            `
        }
    },
    [answerTypes.SmartCity]: {
        type: answerTypes.SmartCity,
        label: 'Котик-урбанист',
        miniLabel: 'Будешь спокоен, только когда переложат всю плитку, окутают город велодорожками и наладят инфраструктуру во всех районах.',
        description: 'Проект «Умный город» создан именно для тебя, ведь\n' +
            'твоя миссия – сделать любой населенный пункт удобнее\nдля его жителей. Здесь генерируются умные решения\n' +
            'по цифровизации управления целыми городами! Место\nдля современных технологий найдется везде.',
        image: {
            svg: SmartCityFinalCat,
            styles: `
                   width: 25.0667vw;
                   height: 49.8667vw;
                   bottom: 3.2984%;
                   left: 9.7667vw;
            `
        }
    },
    [answerTypes.MultiD]: {
        type: answerTypes.MultiD,
        label: 'Котик-оптимизатор',
        miniLabel: 'На каждую задачу у тебя есть безупречный алгоритм! Можешь запустить любой проект в любой отрасли, потому что все процессы ты реализовываешь поэтапно.',
        description: 'Знакомься, твой Multi-D – платформа для управления\nмасштабными сооружениями по всему миру. ' +
            'Здесь собраны цифровые продукты и гибкие инструменты\n' +
            'low-code разработки. Кажется, проект такой же\nразносторонний, как и ты!',
        image: {
            svg: MDFinalCat,
            styles: `
                   width: 49.0667vw;
                   height: 42.1333vw;
                   bottom: 6.7466%;
                   left: 5vw;
            `
        }
    },
    [answerTypes.Course]: {
        type: answerTypes.Course,
        label: 'Котик-помогатор',
        miniLabel: 'Слово «ERROR» для тебя, как красная тряпка для быка. Никто так виртуозно, как ты, не устранит ошибку. Неважно, в каком уголке планеты случилась проблема – ты всегда придешь на помощь!',
        description: 'Добро пожаловать в КУРС (Корпоративный Удалённый\nРабочий Стол) – виртуальную экосистему компании. Ты\nточно сможешь найти применение своим знаниям – тебя\nждут облачные хранилища, виртуализация, поддержка\nи биометрические системы',
        image: {
            svg: CourseFinalCat,
            styles: `
                   width: 33.6vw;
                   height: 39.2vw;
                   bottom: 5.2474%;
                   left: 5.5vw;
            `
        }
    },
    [answerTypes.Rita]: {
        type: answerTypes.Rita,
        label: 'Робокот',
        miniLabel: 'Владеешь высоким интеллектом, а код в твоих руках приобретает разум. Кто, если не ты, научит цифры работать на пользу общества?',
        description: 'Инновации в деле! В проекте Атом.РИТА ты будешь роботизировать бизнес-процессы. Технологии в твоих руках: настраивай, тестируй и внедряй! И помни: именно тебе суждено приложить руку к созданию программных роботов',
        image: {
            svg: RitaFinalCat,
            styles: `
                   width: 47.4667vw;
                   height: 59.22vw;
                   bottom: -2.3988%;
                   left: 3.9vw;
            `
        }
    },

};
