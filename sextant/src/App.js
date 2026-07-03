import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from "./components/IPAddress";
import Latency from "./components/Latency";

function App() {
    return (
        <div className="App">
            <Banner />

            <Exhibit title="IP Addresses">
                <IPAddress version="v4" />
                <IPAddress version="v6" />
            </Exhibit>
            <Exhibit title="Network Latency">
                 <Latency />
            </Exhibit>
        </div>
    );
}

export default App;
