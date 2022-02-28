export const initState = {
  displayCreatePopup: false,
  user: null,
  currentGroup: null,
  currentRecipient: null,
  Groups: [],
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
        currentRecipient: action.currentRecipient,
      };
    case "SET_GROUPS":
      return {
        ...state,
        Groups: action.Groups,
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
