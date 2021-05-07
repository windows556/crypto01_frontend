import * as React from "react";
import { connect } from "react-redux";
import Navbar from "reactstrap/lib/Navbar";
import NavItem from "reactstrap/lib/NavItem";
// import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { logoutUserThunk } from "../actions/actions";

export class PureNavHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginElement: ""
        }
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
        if (this.props.isAuthticated === true) {
            console.log("componentDidMount isAuthticated === true");
            this.setState({
                loginElement: <Link to="/" onClick={this.logout}>Logout</Link>
            })
        }
        else {
            console.log("componentDidMount isAuthticated === false");
            this.setState({
                loginElement: <Link to="/login">Login</Link>
            })
        }

        // if (this.props.isAuthticated === true) {
        //     this.setState({
        //         loginElement: <Link to="/">Logout</Link>
        //     })
        // }
        // else {
        //     this.setState({
        //         loginElement: <Link to="/login_testing">Login</Link>
        //     })
        // }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
        // if (JSON.stringify(prevState.loginElement) !== JSON.stringify(this.state.loginElement)) {
        //     if (this.props.isAuthticated === true) {
        //         console.log("componentDidUpdate isAuthticated === true");
        //         this.setState({
        //             loginElement: <Link to="/" onClick={this.logout}>Logout</Link>
        //         });
        //     }
        //     else{
        //         console.log("componentDidUpdate isAuthticated === false");
        //         this.setState({
        //             loginElement: <Link to="/login">Login</Link>
        //         });
        //     }
        // }

        console.log("componentDidUpdate");
        if (this.props.isAuthticated === true) {
            if (JSON.stringify(this.state.loginElement) !== JSON.stringify(<Link to="/" onClick={this.logout}>Logout</Link>)){
                this.setState({
                    loginElement: <Link to="/" onClick={this.logout}>Logout</Link>
                });
            }
        }
        else{
            if (JSON.stringify(this.state.loginElement) !== JSON.stringify(<Link to="/login">Login</Link>)){
                this.setState({
                    loginElement: <Link to="/login">Login</Link>
                });
            }
        }
    }

    logout = () => {
        console.log("try to logout");
        this.props.logoutMDP();
        this.setState({
            loginElement: <Link to="/login">Login</Link>
        })
    };

    render() {
        // let loginElement2 = <Link to="/login">Login</Link>;
        // if (this.state.isAuthenticated) {
        //     loginElement2 = <Link to="/" onClick={this.logout}>Logout</Link>;
        // }

        return (
            <Navbar dark={true}>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/market">Market</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portfolio">Portfolio</Link>
                </NavItem>
                <NavItem>
                    {this.state.loginElement}
                </NavItem>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthticated: state.auth.isAuthenticated,
        // loginElement: state.loginElement
    };
};

const mapDispatchToProps = dispatch => {
    console.log("header mapDispatchToProps")
    return {
        logoutMDP: () => {
            dispatch(logoutUserThunk());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PureNavHeader);
// export default connect(mapStateToProps)(PureNavHeader);
