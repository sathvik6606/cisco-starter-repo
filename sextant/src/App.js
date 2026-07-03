import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
    return (
        <div className="App">
            <Banner />

            <Exhibit title="Welcome">
                <p>This is the Sextant dashboard.</p>
            </Exhibit>
        </div>
    );
}

export default App;
