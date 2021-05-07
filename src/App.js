// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import './App.css';
import Market from "./Components/Market.js";
// import Login from "./Components/Login/Login.js";
import { connect } from "react-redux";

import Navbar from "reactstrap/lib/Navbar";
import NavItem from "reactstrap/lib/NavItem";

import Login from "./Components/Login.js";
import NavHeader from "./Components/NavHeader.js";
import { AddHoldingForm } from "./Components/AddHoldingForm.js";

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
        {/* <Navbar dark={true}>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/market">Market</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
        </Navbar> */}
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/market">Market</Link>
          </li>
          <li>
            <Link to="/login/signup">Login</Link>
          </li>
        </ul> */}

        {/* <hr /> */}

        <NavHeader></NavHeader>

        <Route exact path="/market" component={Market} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/portfolio" component={AddHoldingForm} />
      </div>
    </Router>
  );
}

export default App;

// import * as React from "react";
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Redirect
// } from "react-router-dom";
// import { connect } from "react-redux";

// import Navbar from "reactstrap/lib/Navbar";
// import NavItem from "reactstrap/lib/NavItem";

// import Login from "./Login";
// import { UsersPage } from "./Users";
// import { GroupsPage } from "./Groups";

// import "bootstrap/dist/css/bootstrap.min.css"; // Add this line

// const PurePrivateRoute = ({ component, isAuthenticated, ...rest }) => {
//   const Component = component;
//   if (Component != null) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: props.location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   } else {
//     return null;
//   }
// };
/////////////////////////////////////////////////////////////////////////////////
// const PrivateRoute = connect(state => ({
//   isAuthenticated: state.auth.isAuthenticated
// }))(PurePrivateRoute);
/////////////////////////////////////////////////////////////////////////////////
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <Navbar dark={true}>
//             <NavItem>
//               <Link to="/users">Users</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/groups">Groups</Link>
//             </NavItem>
//             <NavItem>
//               <Link to="/login">Login</Link>
//             </NavItem>
//           </Navbar>

//           <Route path="/login" component={Login} />
//           <PrivateRoute path="/users" component={UsersPage} />
//           <PrivateRoute path="/groups" component={GroupsPage} />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

