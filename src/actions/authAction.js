export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({type: 'LOGIN_SUCCESS'});
    }).catch((err) => {
      dispatch({type: 'LOGIN_ERROR', err})
    })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();

    firebase.auth().signOut().then(()=>{
      dispatch({type: 'SIGNOUT_SUCCESS'})
    });
  }
}

export const signUp = (new_user) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      new_user.email,
      new_user.password
    ).then((res) => {
      // res contains data about the new user signed up and this returns a promise
      return firestore.collection('users').doc(res.user.uid).set({
        firstName: new_user.firstName,
        lastName: new_user.lastName,
        initials: new_user.firstName[0] + new_user.lastName[0]
      })
    }).then(() => {
      dispatch({type: 'SIGNUP_SUCCESS'})
    }).catch((err)=>{
      dispatch({type: 'SIGNUP_ERROR', err})
    })
  }
}