import axios from 'axios';

const API_KEY = 'e5f1e0e91073e047bfd37039ad433153';

export const fetchWeather = (lat, lon) => {
    return async (dispatch) => {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
        );
        console.log(response);
        dispatch({
            type: 'FETCH_WEATHER',
            payload: response.data,
        });
    };
};

export const fetchLocation = (city) => {
    return async (dispatch, getState) => {
        await axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
            .then((response) => {
                dispatch({
                    type: 'FETCH_LOCATION',
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_LOCATION_ERROR',
                });
            });
    };
};

export const fetchWeatherByHour = (city) => {
    return async (dispatch, getState) => {
        await axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`)
            .then((response) => {
                dispatch({
                    type: 'FETCH_WEATHER_HOUR',
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'FETCH_WEATHER_HOUR_ERROR',
                });
            });
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
