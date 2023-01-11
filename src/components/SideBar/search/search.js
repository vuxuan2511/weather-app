import './search.scss';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherAndLocation } from '../../../actions';
function Search({ fetchWeatherAndLocation }) {
    const [input, setInput] = useState('');
    const onSearchChange = (e) => {
        setInput(e.target.value);
    };
    const onSearchSubmit = (event) => {
        event.preventDefault();
        try {
            fetchWeatherAndLocation(input);
        } catch (err) {
            console.log('gg');
        }
    };
    return (
        <div className="wrap-search">
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                data-toggle="tooltip"
                data-placement="top"
                title="Press city name then Enter"
                onChange={onSearchChange}
                value={input}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === 'Escape') {
                        onSearchSubmit(event);
                        setInput('');
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }}
            />
        </div>
    );
}

export default connect(null, { fetchWeatherAndLocation })(Search);
