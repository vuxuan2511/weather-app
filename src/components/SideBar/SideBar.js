import Fluid from '../../assets/image/Clouds.png';
import ImagePeople from '../../assets/image/weather-fore-with-people.webp';
import './SideBar.scss';
function SideBar() {
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
                <div className="name-city ">Ha Noi</div>
                <div className="temperature">22°C</div>
                <div className="time">
                    <div className="day">Wednesday , 11:58 am</div>
                </div>
                <div className="clouds">
                    Broken Clouds <br /> Clouds 67%
                </div>
                <div className="image-bottom">
                    <div className="name-city">Ha Noi</div>
                    <img src={ImagePeople} alt="123" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
