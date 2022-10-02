import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { mainReducer, userReducer } from './features';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    userReducer: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
