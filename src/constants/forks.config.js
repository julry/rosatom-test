import { answerTypes } from './answersTypes';

export const forks = [
    {
        points: {
            max: {[answerTypes.Course]: 3},
            dependent: {[answerTypes.Rita]: 2}
        },
        cards: [answerTypes.Course, answerTypes.SmartCity, answerTypes.Rita],
        result: answerTypes.Course
    },
    {
        points: {
            max: {[answerTypes.Rita]: 3},
            dependent: {}
        },
        cards: [answerTypes.Rita, answerTypes.Course, answerTypes.SmartCity],
        result: answerTypes.Rita
    },
    {
        points: {
            max: {[answerTypes.SmartCity]: 3},
            dependent: {[answerTypes.Logos]: 0}
        },
        cards: [answerTypes.SmartCity, answerTypes.Course, answerTypes.MultiD],
        result: answerTypes.SmartCity
    },
    {
        points: {
            max: {[answerTypes.MultiD]: 3},
            dependent: {}
        },
        cards: [answerTypes.MultiD, answerTypes.Rita, answerTypes.SmartCity],
        result: answerTypes.MultiD
    },
    {
        points: {
            max: {[answerTypes.Course]: 4},
            dependent: {}
        },
        cards: [answerTypes.Course, answerTypes.Logos],
        result: answerTypes.Course
    },
    {
        points: {
            max: {
                [answerTypes.Course]: 3,
                [answerTypes.Logos]: 3,
            },
            dependent: {[answerTypes.SmartCity]: 0}
        },
        cards: [answerTypes.Logos, answerTypes.Course, answerTypes.Rita],
        result: answerTypes.Logos
    },
    {
        points: {
            max: {[answerTypes.Course]: 3},
            dependent: {[answerTypes.Rita]: 0}
        },
        cards: [answerTypes.Course, answerTypes.SmartCity],
        result: answerTypes.Course
    },
    {
        points: {
            max: {
                [answerTypes.Course]: 2,
                [answerTypes.MultiD]: 2,
                [answerTypes.Logos]: 2,
            },
            dependent: {}
        },
        cards: [answerTypes.Logos, answerTypes.Course, answerTypes.MultiD],
        result: answerTypes.Logos
    },
    {
        points: {
            max: {
                [answerTypes.SmartCity]: 3,
                [answerTypes.Rita]: 3,
            },
            dependent: {}
        },
        cards: [answerTypes.SmartCity, answerTypes.Rita],
        result: answerTypes.SmartCity
    },
    {
        points: {
            max: {
                [answerTypes.Course]: 3,
                [answerTypes.Logos]: 3,
            },
            dependent: {[answerTypes.SmartCity]: 2}
        },
        cards: [answerTypes.Logos, answerTypes.Course],
        result: answerTypes.Logos
    },
    {
        points: {
            max: {[answerTypes.SmartCity]: 4},
            dependent: {}
        },
        cards: [answerTypes.SmartCity, answerTypes.MultiD],
        result: answerTypes.SmartCity
    },
    {
        points: {
            max: {[answerTypes.SmartCity]: 3},
            dependent: {[answerTypes.Logos]: 2}
        },
        cards: [answerTypes.SmartCity, answerTypes.MultiD, answerTypes.Course],
        result: answerTypes.SmartCity
    },
    {
        points: {
            max: {[answerTypes.Rita]: 4},
            dependent: {}
        },
        cards: [answerTypes.Rita, answerTypes.MultiD],
        result: answerTypes.Rita
    },
    {
        points: {
            max: {[answerTypes.Logos]: 4},
            dependent: {}
        },
        cards: [answerTypes.Logos, answerTypes.Rita],
        result: answerTypes.Logos
    },
    {
        points: {
            max: {[answerTypes.MultiD]: 4},
            dependent: {}
        },
        cards: [answerTypes.MultiD, answerTypes.Rita],
        result: answerTypes.MultiD
    },
    {
        points: {
            max: {
                [answerTypes.MultiD]: 3,
                [answerTypes.Logos]: 3,
            },
            dependent: {}
        },
        cards: [answerTypes.Logos, answerTypes.MultiD, answerTypes.SmartCity],
        result: answerTypes.Logos
    },
];
