export const UPDATE_LOGGED_USER_STATE = "UPDATE_LOGGED_USER_STATE";

export default function loggedUserState(
  state = {
    pending: true,
    logged: false
  },
  action
) {
  switch (action.type) {
    case UPDATE_LOGGED_USER_STATE:
      console.log(action);
      return {
        ...state,
        ...action.data
      };
    default:
      return state;
  }
}
