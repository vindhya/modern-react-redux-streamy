import UserActionTypes from ‘./user.types’;
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});
export const emailSignInStart = emailCredentials => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailCredentials
});
export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});
export const signUp = () => ({
    type: UserActionTypes.SIGN_UP_SUCCESS
});
export const signUpSuccess = () => ({
    type: UserActionTypes.SIGN_UP_SUCCESS
});
signUpSuccess()