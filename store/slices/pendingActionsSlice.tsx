import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pendingActions: null,
};

const pendingActionsSlice = createSlice({
  name: "pendingActions",
  initialState,
  reducers: {
    setPendingAction: (state, action) => {
      state.pendingActions = action.payload;
    },
    clearPendingActions: (state, action) => {
      state.pendingActions = null;
    },
  },
});
export const { setPendingAction, clearPendingActions } =
  pendingActionsSlice.actions;
export default pendingActionsSlice.reducer;
