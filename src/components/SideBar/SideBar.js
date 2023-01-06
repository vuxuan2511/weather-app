import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Fluid from '../../assets/image/Clouds.png';
import ImagePeople from '../../assets/image/weather-fore-with-people.webp';
import './SideBar.scss';
import { timeFormat } from './timefomat';
import { fetchWeatherAction } from '../../redux/slices/weatherSlices';

//
function SideBar() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherAction('Ha Noi'));
    }, []);

    const state = useSelector((state) => state);
    const { weather, loading, error } = state;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateFormat = (strDate) => {
        const date = new Date(strDate * 1000);
        return days[date.getDay()];
    };
    console.log(state);
    return (
        <div className="wrapper-side-bar p-4">
            <div className="side-bar">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Press city name then Enter"
                />
                <img src={Fluid} alt="123" />
                <div className="name-city ">{weather?.name}</div>
                <div className="temperature">{weather?.main.temp}°C</div>
                <div className="time">
                    <div className="day">
                        {dateFormat(weather?.dt)} , {timeFormat(weather?.dt)}
                    </div>
                </div>
                <div className="clouds">
                    {weather?.weather[0]?.description} <br /> {weather?.weather[0]?.main}{' '}
                    {`${state?.weather?.clouds.all}%`}
                </div>

                <div className="image-bottom">
                    <div className="name-city">{weather.name}</div>
                    <img src={ImagePeople} alt="123" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
