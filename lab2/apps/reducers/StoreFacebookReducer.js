import FACEBOOK_ACCOUNT from '../actions/types.js'

export default (state = {}, action) => {
  switch (action.type) {
    case FACEBOOK_ACCOUNT:
      return action.facebookAccount;
    default:
      return state
  }
}
