import { combineReducers } from 'redux';
import { connectRouter } from "connected-react-router";
import voucherData from "./voucherData";
import menu from "./menu";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    voucherData,
    menu,
  });
