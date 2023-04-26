import { SET_ACTIVE_TAB } from "../actions/activeTab";

export type TActiveTabState = {
  activeTab: string;
};

export type TSetActiveTabAction = {
    readonly type: typeof  SET_ACTIVE_TAB;
    readonly currentTab: string;
  };