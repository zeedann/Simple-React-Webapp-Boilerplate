import {
  CHANGE_LANGUAGE,
} from '../action_types'

// change the language of the app
export const changeAppLanguage = (languageCode) => {
  // dispatch lets you send actions to Redux
  return (dispatch) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: languageCode,
    })
  }
}
