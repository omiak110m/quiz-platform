export const TYPE = {
    MAKEQUIZ:     'MAKEQUIZ',
    TOGGLEACTIVE: 'TOGGLEACTIVE',
    DROPQUIZ:     'DROPQUIZ',
    BUILDNAME:    'BUILDNAME',
    STARTQUIZ:    'STARTQUIZ',
    SEEANSWERS:   'SEEANSWERS',
    REBOOT:       'REEBOOT'
};

export const makeQuiz = (data) => {
    return {
        type: TYPE.MAKEQUIZ,
        payload : data,
    };
};

export const toggleActive = (id) => {
    return {
        type: TYPE.TOGGLEACTIVE,
        payload: id,
    };
};

export const dropQuiz = (id) => {
    return {
        type: TYPE.DROPQUIZ,
        payload: id,
    };
};

export const buildName = (name) => {
    return {
        type: TYPE.BUILDNAME,
        payload: name,
    };
};

export const startQuiz = (id) => {
    return {
        type: TYPE.STARTQUIZ,
        payload: id,
    };
};

export const seeAnswers = (ans) => {
    return {
        type: TYPE.SEEANSWERS,
        payload: ans,
    };
};

export const reBoot = () => {
    return {
        type: TYPE.REBOOT,
    };
};