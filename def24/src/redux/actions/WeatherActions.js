import instance from "../../apis/weatherAPI";
import ActionTypes from "../constants/ActionTypes";
import Swal from "sweetalert2";

export const GetWeatherByName = (q, appid) => async (dispatch) => {
  await instance
    .get(`?q=${q}&appid=${appid}`)
    .then((res) => {
      dispatch({
        type: ActionTypes.GETBY_CITYNAME,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.status === 404) {
        Swal.fire({
          title: "City Not Found!",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    });
};

export const GetCityById = (id, appid) => async (dispatch) => {
  await instance.get(`?id=${id}&appid=${appid}`).then((res) => {
    dispatch({
      type: ActionTypes.GETCITYBYID,
      payload: res.data,
    });
  });
};

export const DeleteCitiesById = (id, appid) => async (dispatch) => {
  await instance.get(`?id=${id}&appid=${appid}`).then((res) => {
    dispatch({
      type: ActionTypes.DELETECITY_TOMYLIST,
      payload: res.data,
    });
  });
};

export const AddCityToMyList = (q, appid) => async (dispatch) => {
  await instance
    .get(`?q=${q}&appid=${appid}`)
    .then((res) => {
      dispatch({
        type: ActionTypes.ADDCITY_TOMYLIST,
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err.response.status === 404) {
        Swal.fire({
          title: "City Not Found!",
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "#5F9EA0",
        });
      }
    });
};

export const FetchCityData = (citiesArr) => async (dispatch) => {
  dispatch({
    type: ActionTypes.FETCH_CITIES,
    payload: citiesArr,
  });
};

export const FilterCity = (q) => async (dispatch) => {
  dispatch({
    type: ActionTypes.GETBY_MYLIST,
    payload: q,
  });
};
