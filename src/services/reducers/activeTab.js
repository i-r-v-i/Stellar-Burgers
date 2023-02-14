import {SET_ACTIVE_TAB} from '../actions/activeTab';

const activeTabInitialState = {
activeTab: "bun"
}

export const activeTabReducer = (
    state = activeTabInitialState,
    action
  ) => {
    switch (action.type) {
      case SET_ACTIVE_TAB: {
        return {
            activeTab: action.currentTab
        };
      }
      default: {
        return state;
      }
    }
  };
  