import React, { useState } from 'react';
import { connect } from 'react-redux';

import { timeFormat } from '../timefomat';
import './Week.scss';
function Week({ weather }) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dateFormat = (strDate) => {
        const date = new Date(strDate * 1000);
        return days[date.getDay()] + ', ' + date.getDate() + '/' + (date.getMonth() + 1);
    };
    const [item, setItem] = useState(weather[0]);
    const handleShowDetail = (elem, index) => {
        setItem(elem);
    };

    return (
        <div className="wrap-week">
            <div className="row">
                <div className="week-container">
                    {weather.map((elem, index) => (
                        <div
                            key={index}
                            className="col-xs-12 col-md-3 col-sm-6 item-container"
                            onClick={() => handleShowDetail(elem, index)}
                        >
                            <div className={`${elem.dt === item.dt ? 'bg-info' : 'bg-white'} item`}>
                                <p className="item-date">{dateFormat(elem.dt)}</p>
                                <div className="item-img-temp">
                                    <img
                                        src={`https://openweathermap.org/img/w/${elem.weather[0]?.icon}.png`}
                                        alt="icon"
                                        className="item-img"
                                    />
                                    <p className="item-temp">
                                        {Math.round(elem.temp.min)}° - {Math.round(elem.temp.max)}°
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="item-description">
                    <p className="text-date">{dateFormat(item.dt)}</p>
                    <div className="row">
                        <div className="col-md-6 col-xs-12 item-description-down">
                            <p className="text-temp-current">Temp current : {item.temp?.day} °C</p>
                            <p className="text-temp">
                                Temp : {item.temp?.min} °C - {item.temp?.max} °C
                            </p>
                            <p className="text-humidity">Humidity : {item.humidity} %</p>
                            <p className="text-wind-speed">
                                Wind speed : {Math.round(item.wind_speed * 3.6 * 100) / 100} km/h
                            </p>
                        </div>
                        <div className="col-md-6 col-xs-12 item-description-down">
                            <p className="text-sunrise">Sunrise : {timeFormat(item.sunrise)}</p>
                            <p className="text-sunset">Sunset : {timeFormat(item.sunset)}</p>
                            <p className="text-desp">Description : {item?.weather[0]?.description}</p>
                            <p className="text-pressure">Atmospheric pressure : {item?.pressure} hPa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { weather: state.weather.daily };
};
export default connect(mapStateToProps)(Week);
