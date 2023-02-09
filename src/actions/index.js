import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'e5f1e0e91073e047bfd37039ad433153';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const fetchWeather = (lat, lon) => {
    return async (dispatch) => {
        const response = await axios.get(`${BASE_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);

        dispatch({
            type: 'FETCH_WEATHER',
            payload: response.data,
        });
    };
};

export const fetchLocation = (city) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
            if (response) {
                dispatch({
                    type: 'FETCH_LOCATION',
                    payload: response.data,
                });
            } else {
                toast.error('Not found city!');
                dispatch({
                    type: 'FETCH_LOCATION_ERROR',
                });
            }
        } catch (e) {
            toast.error('Not found city!');
            dispatch({
                type: 'FETCH_LOCATION_ERROR',
            });
        }
    };
};

export const fetchWeatherByHour = (city) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get(`${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`);
            if (response) {
                dispatch({
                    type: 'FETCH_WEATHER_HOUR',
                    payload: response.data,
                });
            } else {
                dispatch({
                    type: 'FETCH_WEATHER_HOUR_ERROR',
                });
            }
        } catch (e) {
            dispatch({
                type: 'FETCH_WEATHER_HOUR_ERROR',
            });
        }
    };
};

export const fetchWeatherAndLocation = (city) => {
    return async (dispatch, getState) => {
        await dispatch(fetchLocation(city));
        await dispatch(fetchWeatherByHour(city));
        const coords = getState().location.coord;
        await dispatch(fetchWeather(coords.lat, coords.lon));
    };
};
