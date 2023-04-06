import { combineReducers } from "@reduxjs/toolkit";
import auth from "./authSlice";
import pendingActions from "./pendingActionsSlice";

export const reducers = combineReducers({
  auth,
  pendingActions,
});
