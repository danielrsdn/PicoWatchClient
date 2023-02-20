import Navbar from "../components/Navbar.js";
import User from "../components/User.js";
import Photos from "../components/Photos.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="Top-navigation"></div>
        <div className="Main-view">
          <div className="Side-bar">
            <User></User>
          </div>
          <div className="Main-panel">
            <Photos></Photos>
          </div>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </div>
    </div>
  );
}

export default App;
