export const initialState = {
  // user: JSON.parse(localStorage.getItem("user")),
  loading: false,
  name: localStorage.getItem("name"),
};

export const actionTypes = {
  //SET_USER: 'SET_USER',
  SET_LOADING: "SET_LOADING",
  SET_NAME: "SET_NAME",
};

const reducer = (state, action) => {
  switch (action.type) {
    /*  case actionTypes.SET_USER:
          return {
            ...state,
            user: action.user,
          }; */

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };

    case actionTypes.SET_NAME:
      return {
        ...state,
        name: action.name,
      };

    default:
      return state;
  }
};

export default reducer;
