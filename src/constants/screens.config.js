import { StartScreen } from '../components/screens/StartScreen';
import { QuestionScreen } from '../components/screens/Questions/QuestionScreen';
import { Final } from '../components/screens/Final';

export const screens = [
    {
        id: 0,
        component: StartScreen,
        preloadImages: [],
    },
    {
        id: 1,
        component: QuestionScreen,
        preloadImages: [],
    },
    {
        id: 2,
        component: Final,
        preloadImages: [],
    }
];
