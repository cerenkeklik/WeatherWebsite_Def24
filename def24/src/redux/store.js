import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnchancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export default { store, persistor };
