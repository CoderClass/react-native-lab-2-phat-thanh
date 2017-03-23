import {FACEBOOK_ACCOUNT} from './StoreFacebookAction.js'

export const StoreFacebook = (facebookAccount) => {
  return(
    type: FACEBOOK_ACCOUNT,
    facebookAccount: facebookAccount
  )
}
