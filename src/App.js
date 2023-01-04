import SideBar from './components/SideBar/SideBar';
import Container from './components/Container/Container';
import './App.scss';
function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="container-side-bar col-md-3 col-sm-12">
                        <SideBar />
                    </div>
                    <div className="container-container col-md-9 col-sm-12">
                        <Container />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
