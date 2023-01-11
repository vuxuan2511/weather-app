import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { fetchWeatherAndLocation, fetchLocation } from '../../actions';

import Fluid from '../../assets/image/Clouds.png';
import ImagePeople from '../../assets/image/weather-fore-with-people.webp';
import Search from './search/search';
import './SideBar.scss';
import { timeFormat } from './timefomat';

function SideBar({ weather, location, fetchWeatherAndLocation }) {
    useEffect(() => {
        fetchWeatherAndLocation('Ha noi');
    }, [fetchWeatherAndLocation]);

    console.log('hello', weather);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateFormat = (strDate) => {
        const date = new Date(strDate * 1000);
        return days[date.getDay()];
    };

    return (
        <div className="wrapper-side-bar p-4">
            <div className="side-bar">
                <Search />
                <img src={Fluid} alt="123" />
                <div className="name-city ">{location?.name}</div>
                <div className="temperature">{weather?.current?.temp}°C</div>
                <div className="time">
                    <div className="day">
                        {dateFormat(weather?.current?.dt)} , {timeFormat(weather?.current?.dt)}
                    </div>
                </div>
                <div className="clouds">
                    {weather?.current?.weather[0]?.description} <br /> {weather?.current?.weather[0]?.main}{' '}
                    {`${weather?.current?.clouds}%`}
                </div>

                <div className="image-bottom">
                    <div className="name-city">{location?.name}</div>
                    <img src={ImagePeople} alt="123" />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { weather: state.weather, location: state.location, tempScale: state.tempScale };
};

export default connect(mapStateToProps, { fetchWeatherAndLocation })(SideBar);
