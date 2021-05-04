// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Market from "./Components/Market.js";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


    // <div>
    //   <Cards />
    // </div>

    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/market" component={Market} />
      </div>
    </Router>
  );
}

export default App;
