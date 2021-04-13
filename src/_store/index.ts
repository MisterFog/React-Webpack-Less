import { createStore, combineReducers } from 'redux';
import { historyReducer } from './history/reducers';
// import { userReducer, UserState } from './user/reducers';
// import { SummarySectionsData, siteReducer } from './site/reducers';
// import { GraphState, graphReducer } from './graph/reducers';
// import { CalendarState, calendarReducer } from './calendar/reducers';
// import { SummTargetObjectData, targetReducer } from './target/reducers';
// import { AddUserSite, addSiteReducer } from './addsite/reducers';
// import { UserCurrentSite, userCurrentSite } from './currentSite/reducers';
// import { ChooseTarget, userChooseTarget } from './chooseTarget/reducers';
// import { ErrorProfile, saveErrorProfile } from './profile/reducers';
// import { BtnShow, btnBackShow } from './btnBackHeaderMob/reducers';

/**
 *
 */
const rootReducer = combineReducers({
  history: historyReducer,
  // user: userReducer,
  // sites: siteReducer,
  // graph: graphReducer,
  // calendar: calendarReducer,
  // targets: targetReducer,
  // target: userChooseTarget,
  // addsite: addSiteReducer,
  // currentsite: userCurrentSite,
  // profile: saveErrorProfile,
  // back: btnBackShow,
});

/**
 * Export store
 */
const store = createStore(rootReducer);

/**
 *
 */
export interface StoreType {
  history: React.ReactNode[];
  // user: UserState;
  // sites: SummarySectionsData;
  // graph: GraphState;
  // calendar: CalendarState;
  // targets: SummTargetObjectData;
  // target: ChooseTarget;
  // addsite: AddUserSite;
  // currentsite: UserCurrentSite;
  // profile: ErrorProfile;
  // back: BtnShow;
}

/**
 *
 */
export default store;
