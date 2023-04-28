import { rootReducer } from './../reducers/index';
import { TWsActions } from './wsActions';
import { TUserActions } from './user';
import { TOrderActions } from './order';
import { TIngredientsActions } from './ingredients';
import { TBurgerConstructorActions } from './burgerConstructor';
import { TSetActiveTabAction } from './activeTab';
import { store } from './../../index';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';


export type RootState = ReturnType<typeof rootReducer>;

// Типизация всех экшенов приложения
type TApplicationActions = TSetActiveTabAction | TBurgerConstructorActions | TIngredientsActions | TOrderActions | TUserActions | TWsActions;

// Типизация thunk 
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>;

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch;