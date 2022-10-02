import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type mainState = {
  loading: boolean;
  overlay: boolean;
  tweetModal: boolean;
  showMore: boolean;
}

const initialState: mainState = {
  loading: false,
  overlay: false,
  tweetModal: false,
  showMore: false,
};

const mainReducer = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setOverlay: (state, action:PayloadAction<boolean>) => {
      return {
        ...initialState
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.overlay = action.payload;
    },
    setTweetModal: (state, action: PayloadAction<boolean>) => {
      state.tweetModal = action.payload;
      state.overlay = action.payload;
    },
    setShowMore: (state, action: PayloadAction<boolean>) => {
      state.showMore = action.payload;
      state.overlay = action.payload;
    }
  }
} )

export const { setTweetModal, setLoading, setOverlay, setShowMore } = mainReducer.actions;

export const selectLoading = (state: RootState) => state.main.loading;
export const selectOverlay = (state: RootState) => state.main.overlay;
export const selectTweetModal = (state: RootState) => state.main.tweetModal;
export const selectShowMore = (state: RootState) => state.main.showMore;

export default mainReducer.reducer;