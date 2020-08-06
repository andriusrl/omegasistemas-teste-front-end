import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import voucherData from "./voucherData";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    voucherData,
  });
