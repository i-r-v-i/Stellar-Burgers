import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
//   LOGOUT,
//   LOGOUT_SUCCESS,
//   LOGOUT_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  //  AUTH_CHECKED,
   UPDATE_USER_REQUEST,
   UPDATE_USER_SUCCESS,
   UPDATE_USER_FAILED,
} from "../actions/user";

const initialState = {
  isAuthChecked: false,
  userData: null,

  registrationRequest: false,
  registrationFailed: false,

  loginRequest: false,
  loginFailed: false,

  getUserRequest: false,
  getUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  // logoutRequest: false,
  // logoutFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  sentEmail: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,

  
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        registrationRequest: true,
      };
    }
    case REGISTRATION_SUCCESS: {
      return {
        ...state,
        registrationRequest: false,
        userData: action.payload.user,
      };
    }
    case REGISTRATION_FAILED: {
      return {
        ...state,
        registrationRequest: false,
        registrationRequestFailed: true,
      };
    }
    case FORGOT_PASSWORD_REQUEST: {
        return {
          ...state,
          forgotPasswordRequest: true,
        };
      }

      case FORGOT_PASSWORD_SUCCESS: {
        return {
          ...state,
          forgotPasswordRequest: false,
          sentEmail: action.payload
        };
      }
      case FORGOT_PASSWORD_FAILED: {
        return {
          ...state,
          forgotPasswordRequest: false,
          forgotPasswordFailed: true,
          sentEmail: false
        };
      }
      case RESET_PASSWORD_REQUEST: {
        return {
          ...state,
          resetPasswordRequest: true,
        };
      }
      case RESET_PASSWORD_SUCCESS: {
        return {
          ...state,
          resetPasswordRequest: false,
        };
      }
      case RESET_PASSWORD_FAILED: {
        return {
          ...state,
          resetPasswordRequest: false,
          resetPasswordFailed: true,
        };
      }
      case LOGIN_REQUEST: {
        return {
          ...state,
          loginRequest: true,
  
        };
      }
      case LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthChecked: true,
          userData: action.payload.user,
          loginRequest: false,
        };
      }
      case LOGIN_FAILED: {
        return {
          ...state,
          isAuthChecked: false,
          loginFailed: true,
          loginRequest: false,
        };
      }
      case GET_USER_REQUEST: {
        return {
          ...state,
          getUserRequest: true
        };
      }
      case GET_USER_SUCCESS: {
        return {
          ...state,
          
          userData: action.payload,
          getUserRequest: false
        
        };
      }
      case GET_USER_FAILED: {
        return {
          ...state,
          getUserRequest: false,
          getUserFailed: true,
        };
      }
      case UPDATE_USER_REQUEST: {
        return {
          ...state,
          updateUserRequest: true,
  
        };
      }
      case UPDATE_USER_SUCCESS: {
        return {
          ...state,
          userData: action.payload,
          updateUserRequest: false
        
        };
      }
      case UPDATE_USER_FAILED: {
        return {
          ...state,
          updateUserRequest:false,
          updateUserFailed: true,
        };
      }

      // case AUTH_CHECKED: {
      //   return {
      //     ...state,
      //     isAuthChecked: true,
          
      //   };
      // }
    default: {
      return state;
    }
  }
};
