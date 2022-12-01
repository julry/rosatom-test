import { createRef } from 'react';
import { StartScreen } from '../components/screens/StartScreen';
import { QuestionScreen } from '../components/screens/Questions/QuestionScreen';
import { Final } from '../components/screens/Final';

export const screens = [
    {
        id: 0,
        component: StartScreen,
        preloadImages: [],
        ref: createRef(),
    },
    {
        id: 1,
        hasOwnLogo: true,
        component: QuestionScreen,
        preloadImages: [],
        ref: createRef(),
    },
    {
        id: 2,
        component: Final,
        preloadImages: [],
        ref: createRef(),
    }
];
