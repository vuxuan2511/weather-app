import React from 'react';
import { connect } from 'react-redux';
import { timeFormat } from '../timefomat';

import Sun from '../../../assets/image/sun.svg';
import SunWind from '../../../assets/image/sunwind.svg';
import SunRise from '../../../assets/image/sunrise.svg';
import SunSet from '../../../assets/image/sunset.svg';
import Humidity from '../../../assets/image/humidity.svg';
import Visibility from '../../../assets/image/visiblity.svg';
import Pressure from '../../../assets/image/pressure.svg';

import './Today.scss';

function Today({ weather }) {
    return (
        <div className="row">
            <div className="today-container">
                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="uv-index">
                        <p>UV index</p>
                        <div className="text-center content">
                            <img src={Sun} alt="123" className="image" />
                            <p>{weather?.uvi}</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="wind-status">
                        <p>Wind Status</p>
                        <div className="text-center content">
                            <img src={SunWind} alt="123" className="image" />
                            <p>{`${Math.round(weather?.wind_speed * 3.6 * 100) / 100} km/h`}</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="sun-rise-set">
                        <p>Sunrise & Sunset</p>
                        <div className="sun-rise">
                            <img src={SunRise} alt="123" className="image" />
                            <p>{timeFormat(weather?.sunrise)}</p>
                        </div>
                        <div className="sun-set">
                            <img src={SunSet} alt="123" className="image" />
                            <p>{timeFormat(weather?.sunset)}</p>
                        </div>
                    </div>
                </div>

                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="humidity">
                        <p>Humidity</p>
                        <div className="text-center content">
                            <img src={Humidity} alt="123" className="image" />
                            <p>{weather?.humidity} %</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="visibility">
                        <p>Visibility</p>
                        <div className="text-center content">
                            <img src={Visibility} alt="123" className="image" />
                            <p>{`${weather?.visibility / 1000} km`}</p>
                        </div>
                    </div>
                </div>
                <div className=" col-md-6 col-xl-4  col-sm-12 p-3">
                    <div className="pressure">
                        <p>Pressure</p>
                        <div className="text-center content">
                            <img src={Pressure} alt="123" className="image" />
                            <p>{weather?.pressure} hPa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return { weather: state.weather.current };
};

export default connect(mapStateToProps)(Today);
