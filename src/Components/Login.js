import * as React from "react";
import { connect } from "react-redux";
import { loginUserThunk } from "../actions/actions";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class PureLogin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidUpdate() {
    if (this.props.isAuthenticatedMSP === true) {
      // this.props.history.push("/shoppingList");
      console.log("you are logged in")
    }
  }

  onChangeField = (field, e) => {
    const state = {};
    state[field] = e.currentTarget.value;

    this.setState(state);
  };

  login = () => {
    this.props.loginMDP(this.state.email, this.state.password);
  };

  render() {
    return (
      // <div>
      //   Username:
      //   <input
      //     onChange={this.onChangeField.bind(this, "email")}
      //     type="text"
      //     value={this.state.email}
      //   />
      //   <br />
      //   Password:
      //   <input
      //     onChange={this.onChangeField.bind(this, "password")}
      //     type="text"
      //     value={this.state.password}
      //   />
      //   <br />
      //   <button onClick={this.login}>Login</button>
      // </div>

      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Username" onChange={this.onChangeField.bind(this, "email")} value={this.state.email}/>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="password" onChange={this.onChangeField.bind(this, "password")} value={this.state.password}/>
        </FormGroup>
        <Button onClick={this.login}>Login</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticatedMSP: state.auth.isAuthenticated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginMDP: (email, password) => {
      dispatch(loginUserThunk(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PureLogin);
