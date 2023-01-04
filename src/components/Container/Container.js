import { NavLink, Route, Routes } from 'react-router-dom';
import './Container.scss';
import Avatar from '../../assets/image/895438247efa788551d1919d44f176ca.png';
import Week from './Week/Week';
import Hour from './Hour/Hour';
import Today from './Today/Today';
function Container() {
    return (
        <div className="wrapper-container">
            <div className="container-top">
                <ul>
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Today
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/week" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Week
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hour" className={({ isActive }) => (isActive ? 'active' : '')}>
                            Hour
                        </NavLink>
                    </li>
                </ul>

                <div className="avatar">
                    <img src={Avatar} alt="123" />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Today />} />
                <Route path="/week" element={<Week />} />
                <Route path="/hour" element={<Hour />} />
            </Routes>
        </div>
    );
}

export default Container;
