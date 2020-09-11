export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to the database
        dispatch({type: 'CREATE_PROJECT', project });
    }
};