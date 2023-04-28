import { AppDispatch, AppThunk, RootState } from './store';
import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';


// Теперь этот хук знает структуру хранилища
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;

// Хук не даст отправить экшен, который ему не знаком
export const useAppDispatch: () => AppDispatch | AppThunk = dispatchHook;
