import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SEND_EMAIL,
  RESET_PASSWORD_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,
  IS_CHANGING,
  STOP_CHANGING,
  SAVE_PREVIOUS_ROUTE,
} from "../actions/user";

export type TUserData = {
  email: string;
  password: string;
  name: string;
};

export type TUserState = {
  userData: TUserData | null;

  registrationRequest: boolean;
  registrationFailed: boolean;

  loginRequest: boolean;
  loginFailed: boolean;

  getUserRequest: boolean;
  getUserFailed: boolean;

  updateUserRequest: boolean;
  updateUserFailed: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;

  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
  forgotPasswordSuccess: boolean;
  isReset: boolean;

  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
  resetPasswordSuccess: boolean;

  isChanging: boolean;
  previousRoute: string;
};

type TRegistrationRequestAction = {
  readonly type: typeof REGISTRATION_REQUEST;
};

type TRegistrationSuccessAction = {
  readonly type: typeof REGISTRATION_SUCCESS;
  readonly payload: TUserData;
};
type TRegistrationFailedAction = {
  readonly type: typeof REGISTRATION_FAILED;
};

type TLoginRequestAction = {
  readonly type: typeof LOGIN_REQUEST;
};

type TLoginSuccessAction = {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: TUserData;
};

type TLoginFailedAction = {
  readonly type: typeof LOGIN_FAILED;
};

type TLogoutRequestAction = {
  readonly type: typeof LOGOUT_REQUEST;
};

type TLogoutSuccessAction = {
  readonly type: typeof LOGOUT_SUCCESS;
};

type TLogoutFailedAction = {
  readonly type: typeof LOGOUT_FAILED;
};

type TForgotPasswordRequestAction = {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
};

type TForgotPasswordSuccessAction = {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
};

type TForgotPasswordFailedAction = {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
};

type TResetPasswordRequestAction = {
  readonly type: typeof RESET_PASSWORD_REQUEST;
};

type TResetPasswordSuccessAction = {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
};

type TSendEmailAction = {
  readonly type: typeof SEND_EMAIL;
};

type TResetPasswordFailedAction = {
  readonly type: typeof RESET_PASSWORD_FAILED;
};

type TGetUserRequestAction = {
  readonly type: typeof GET_USER_REQUEST;
};

type TGetUserSuccessAction = {
  readonly type: typeof GET_USER_SUCCESS;
  readonly payload: TUserData;
};

type TGetUserFailedAction = {
  readonly type: typeof GET_USER_FAILED;
};

type TUpdateUserRequestAction = {
  readonly type: typeof UPDATE_USER_REQUEST;
};

type TUpdateUserSuccessAction = {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: TUserData;
};

type TUpdateUserFailedAction = {
  readonly type: typeof UPDATE_USER_FAILED;
};
type TIsChangingAction = {
  readonly type: typeof IS_CHANGING;
};

type TStopChangingAction = {
  readonly type: typeof STOP_CHANGING;
};
type TSavePreviousRouteAction = {
  readonly type: typeof SAVE_PREVIOUS_ROUTE;
  readonly payload: string;
};

export type TUserActions =
  | TRegistrationRequestAction
  | TRegistrationSuccessAction
  | TRegistrationFailedAction
  | TLoginRequestAction
  | TLoginSuccessAction
  | TLoginFailedAction
  | TLogoutRequestAction
  | TLogoutSuccessAction
  | TLogoutFailedAction
  | TForgotPasswordRequestAction
  | TForgotPasswordSuccessAction
  | TForgotPasswordFailedAction
  | TResetPasswordRequestAction
  | TResetPasswordSuccessAction
  | TResetPasswordFailedAction
  | TSendEmailAction
  | TGetUserRequestAction
  | TGetUserSuccessAction
  | TGetUserFailedAction
  | TUpdateUserRequestAction
  | TUpdateUserSuccessAction
  | TUpdateUserFailedAction
  | TIsChangingAction
  | TStopChangingAction
  | TSavePreviousRouteAction;
