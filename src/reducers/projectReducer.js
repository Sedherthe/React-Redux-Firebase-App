const initState = {
  projects: [
    {id: '1', title: 'Machine Learning', content: 'blah blah blah haha'},
    {id: '2', title: 'Deep Learning', content: 'blah blah blah haha'},
    {id: '3', title: 'Artificial Intelligence', content: 'blah blah blah haha'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log("created project", action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state
  }
}

export default projectReducer