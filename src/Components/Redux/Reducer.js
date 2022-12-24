import { TYPE } from "./Actions";

const initialState = {
    quiz: "",
    name: [],
    playQuiz: "",
    answer: "",
};

const reducer = (state = initialState, actions) => {
    if (actions.type === TYPE.MAKEQUIZ) {
        return {
            ...state, quiz: [...state.quiz, actions.payload]
        };
    };

    if (actions.type === TYPE.TOGGLEACTIVE) {
        const findEl = state.quiz.find((el) => el.id === actions.payload);

        const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);

        const newArr = [
            { ...findEl, isActive: !findEl.isActive },
            ...filteredArr,
        ];

        return {
            ...state,
            quiz: newArr,
        };
    }

    if (actions.type === TYPE.DROPQUIZ) {
        const filteredArr = state.quiz.filter((el) => el.id !== actions.payload);

        return {
            ...state,
            quiz: filteredArr,
        };
    }

    if (actions.type === TYPE.BUILDNAME) {
        return {
            ...state,
            name: actions.payload,
        };
    }

    if (actions.type === TYPE.STARTQUIZ) {
        const findElem = state.quiz.find((el) => el.id === actions.payload);

        return {
            ...state,
            playQuiz: findElem,
        };
    }

    if (actions.type === TYPE.SEEANSWERS) {
        console.log(actions.payload);
        return {
            ...state,
            answers: [...state.answer, actions.payload],
        };
    }

    if (actions.type === TYPE.REBOOT) {
        return {
            ...state,
            name: "",
            playQuiz: [],
            answer: [],
        };
    }

    return state;
};

export default reducer