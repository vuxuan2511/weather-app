import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../../actions';

import Fluid from '../../assets/image/Clouds.png';
import ImagePeople from '../../assets/image/weather-fore-with-people.webp';
import Search from './search/search';
import './SideBar.scss';

import { timeFormat } from '../Container/timefomat';

function SideBar({ weather, location, fetchWeatherAndLocation }) {
    useEffect(() => {
        fetchWeatherAndLocation('Ha noi');
    }, [fetchWeatherAndLocation]);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dateFormat = (strDate) => {
        const date = new Date(strDate * 1000);
        return days[date.getDay()];
    };
    const nameCity = location.name === 'Hanoi' ? 'Ha Noi' : location.name;
    return (
        <div className="wrapper-side-bar p-4">
            <div className="side-bar">
                <Search />
                <img src={Fluid} alt="123" />
                <div className="name-city ">{nameCity}</div>
                <div className="temperature">{weather?.temp}°C</div>
                <div className="time">
                    <div className="day">
                        {dateFormat(weather?.dt)} , {timeFormat(weather?.dt)}
                    </div>
                </div>
                <div className="clouds">
                    {weather?.weather[0]?.description} <br /> {weather?.weather[0]?.main} {`${weather?.clouds}%`}
                </div>

                <div className="image-bottom">
                    <div className="name-city">{nameCity}</div>
                    <img src={ImagePeople} alt="123" />
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { weather: state.weather.current, location: state.location, tempScale: state.tempScale };
};

export default connect(mapStateToProps, { fetchWeatherAndLocation })(SideBar);
