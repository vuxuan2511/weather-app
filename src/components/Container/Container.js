import './Container.scss';
import Avatar from '../../assets/image/895438247efa788551d1919d44f176ca.png';
function Container() {
    return (
        <div className="wrapper-container">
            <div className="container-top">
                <ul>
                    <li role="button">Today</li>
                    <li role="button">Week</li>
                    <li role="button">Hour</li>
                </ul>
                <div className="avatar">
                    <img src={Avatar} alt="123" />
                </div>
            </div>
        </div>
    );
}

export default Container;
