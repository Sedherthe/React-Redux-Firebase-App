export const createProject = (project) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to the database
    const fireStore = getFirestore(); // gives us a ref to our firestore database
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    fireStore.collection('projects').add({
      ...project, // this has project title and content
      author_first_name: profile.firstName,
      author_last_name: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(
      // when promise is resolved 
      () => {
        dispatch({type: 'CREATE_PROJECT', project})
    }).catch((err) => {
      dispatch({type: 'CREATE_PROJECT_ERROR', err})
    })
  }
};