import { WeatherReducer } from "./WeatherReducers";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["allWeathers"],
};

const rootReducer = combineReducers({ allWeathers: WeatherReducer });

export default persistReducer(persistConfig, rootReducer);
