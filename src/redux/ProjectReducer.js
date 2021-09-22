const projectState = {
  data: [],
};

const ProjectReducer = (state = projectState, action) => {
  switch (action.type) {
    case "SEARCH":
      const { data } = action;
      return { ...state, data };
    default:
      return { ...state };
  }
};

export default ProjectReducer;
