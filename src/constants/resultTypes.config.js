import { answerTypes } from './answersTypes';

export const resultTypes = {
    [answerTypes.Logos]: {
        type: answerTypes.Logos,
        label: 'Суперкот',
        shortMiniLabel: true,
        miniLabel: 'Или любитель суперкомпьютеров… Точнее, почти профессионал!',
        description: 'В Росатоме будут тебе очень рады, ведь в проекте «Логос» без твоей помощи не обойтись. Тебя ждет моделирование и инженерный анализ высокотехнологичных отраслей. Твой энтузиазм и интеллект пригодятся везде: от авиа- до судостроения!'
    },
    [answerTypes.SmartCity]: {
        type: answerTypes.SmartCity,
        label: 'Котик-урбанист',
        miniLabel: 'Будешь спокоен, только когда переложат всю плитку, окутают город велодорожками и наладят инфраструктуру во всех районах',
        description: 'Проект «Умный город» создан именно для тебя, ведь твоя миссия – делать любой населенный пункт удобнее для его жителей. Здесь генерируются умные решения по цифровизации управления целыми городами! Место для современных технологий найдется везде – от водоканала до теплоснабжения'
    },
    [answerTypes.MultiD]: {
        type: answerTypes.MultiD,
        label: 'Котик-оптимизатор',
        miniLabel: 'На каждую задачу у тебя есть безупречный алгоритм! Можешь запустить любой проект в любой отрасли, потому что все процессы ты разбиваешь на мини-задачи',
        description: 'Знакомься, твой Multi D – платформа для управления масштабными сооружениями по всему миру. Здесь собраны цифровые продукты и гибкие инструменты low-code разработки. Кажется, проект такой же разносторонний, как и ты!'
    },
    [answerTypes.Course]: {
        type: answerTypes.Course,
        label: 'Котик-помогатор',
        miniLabel: 'Слово «ERROR» для тебя, как красная тряпка для быка. Никто так виртуозно, как ты, не устранит ошибку. Неважно, в каком уголке планеты случилась проблема – ты всегда придешь на помощь!',
        description: 'Добро пожаловать в КУРС (Корпоративный Удалённый Рабочий Стол) – виртуальную экосистему компании. Ты точно сможешь найти применение своим знаниям – тебя ждут облачные хранилища, виртуализация, поддержка и биометрические системы'
    },
    [answerTypes.Rita]: {
        type: answerTypes.Rita,
        label: 'Робокот',
        miniLabel: 'Владеешь высоким интеллектом, а код в твоих руках приобретает разум. Кто, если не ты, научит цифры работать на пользу общества?',
        description: 'Инновации в деле! В проекте Атом.РИТА ты будешь роботизировать бизнес-процессы. Технологии в твоих руках: настраивай, тестируй и внедряй! И помни: именно тебе суждено приложить руку к созданию программных роботов'
    },

};