import React from 'react';
import { connect } from 'react-redux';
import { timeFormat } from '../timefomat';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
} from 'chart.js';

import './Hour.scss';

function Hour({ weather }) {
    const hours = [];
    const temps = [];
    const feels = [];
    const gethours = weather.map((item) => [...hours, timeFormat(item.dt)]);
    const gettemp = weather.map((item) => [...temps, item.temp]);
    const getFeelslike = weather.map((item) => [...feels, item.feels_like]);

    ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

    const data = {
        labels: gethours,
        datasets: [
            {
                data: gettemp.flat(),
                label: ' Temp (°C)',
                borderColor: '#8e5ea2',
                fill: false,
            },
            {
                data: getFeelslike.flat(),
                label: ' Feel like (°C)',
                borderColor: '#3cba9f',
                fill: false,
            },
        ],
    };
    const options = {
        title: {
            display: true,
            text: 'Weather',
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    };
    return (
        <div className="wrap-hour">
            <Line data={data} options={options} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return { weather: state.weather.hourly };
};
export default connect(mapStateToProps)(Hour);
