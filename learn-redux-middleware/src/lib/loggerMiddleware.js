const loggerMiddleware = store => next => action => {
    console.log(action && action.type);
    console.log('이전상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음싱태', store.getState());
    console.groupEnd();

};

export default loggerMiddleware;