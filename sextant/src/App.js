import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from "./components/IPAddress";

function App() {
    return (
        <div className="App">
            <Banner />

            <Exhibit title="IP Addresses">
                <IPAddress version="v4" />
                <IPAddress version="v6" />
            </Exhibit>
        </div>
    );
}

export default App;
