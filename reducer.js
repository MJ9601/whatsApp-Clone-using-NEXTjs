export const initState = {
  displayCreatePopup: false,
  user: null,
  currentGroup: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_GROUP":
      return {
        ...state,
        currentGroup: action.currentGroup,
      };
    case "SHOW_POPUP_TRUE":
      return {
        ...state,
        displayCreatePopup: true,
      };
    case "SHOW_POPUP_FALSE":
      return {
        ...state,
        displayCreatePopup: false,
      };
    default:
      return state;
  }
};
