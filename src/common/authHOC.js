const authHOC = (Component, isAuth, history) => {
    if (isAuth) {
        return Component;
    } else {
        return () => {
            history.push({ pathname: '/login' });
            return null;
        };
    }
};

export default authHOC;