import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UserState {
  userName: string;
  userId: string;
}

const initialState: UserState = {
  userName: "Hamza Sorani",
  userId: "@hamza_sorani"
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action:PayloadAction<string>) => {
      return {
        ...state,
        [action.type]: action.payload,
      }
    }
  },
});

export const { setUserName } = userSlice.actions;

export const selectUserName = (state: RootState) => state.userReducer.userName;
export const selectUserId = (state: RootState) => state.userReducer.userId;

export default userSlice.reducer;
