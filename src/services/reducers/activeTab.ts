import { TActiveTabState, TSetActiveTabAction } from './../types/activeTab';
import { SET_ACTIVE_TAB } from "../actions/activeTab";

const activeTabInitialState: TActiveTabState = {
  activeTab: "bun",
};

export const activeTabReducer = (state = activeTabInitialState, action: TSetActiveTabAction): TActiveTabState => {
  switch (action.type) {
    case SET_ACTIVE_TAB: {
      return {
        activeTab: action.currentTab,
      };
    }
    default: {
      return state;
    }
  }
};
