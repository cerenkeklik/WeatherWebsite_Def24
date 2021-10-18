import apiKEY from "../../apis/apiKey";
import { GetCityById } from "../actions/WeatherActions";
import ActionTypes from "../constants/ActionTypes";

const initialState = {
  myCities: [],
  aCity: {},
  getCityById: {},
  filteredCities: [],
};

export const WeatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GETBY_CITYNAME:
      return {
        ...state,
        aCity: payload,
      };
    case ActionTypes.ADDCITY_TOMYLIST:
      return {
        ...state,
        myCities: [...state.myCities, payload],
      };
    case ActionTypes.GETCITYBYID:
      return {
        ...state,
        getCityById: payload,
      };
    case ActionTypes.DELETECITY_TOMYLIST:
      return {
        ...state,
        myCities: [
          ...initialState.myCities,
          ...state.myCities.filter((item) => item.id !== payload.id),
        ],
      };
    case ActionTypes.FETCH_CITIES:
      return {
        ...initialState.myCities,
        myCities: payload.filter((item) => GetCityById(item.id)),
      };
    case ActionTypes.GETBY_MYLIST:
      return {
        ...state,
        filteredCities: [
          ...initialState.filteredCities,
          ...state.myCities.filter((item) => item.name === payload),
        ],
      };
    default:
      return state;
  }
};
