import React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, FormText, Col, Row, Button } from 'reactstrap';
import { getSymbolsActionCreator } from "../actions/addHoldingActions";

class PureAddHoldingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symbols: [],
            amount: 0,
            print: 0
        }
        this.onChangeNumber = this.onChangeNumber.bind(this);
    }

    componentDidMount() {
        this.props.getSymbolMDP();
    }

    onChangeNumber(e) {
        const re = /^[0-9\.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ value: e.target.value })
        }
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="crypto_sym">Symbol</Label>
                    <Input type="select" name="select" id="crypto_sym">
                        {/* <option>BTC</option>
                        <option>ETH</option>
                        <option>BNB</option> */}
                        {this.props.symbolMSP.map((x) => <option key={x}>{x}</option>)}
                    </Input>

                    <FormGroup>
                        <Label for="trade_data">Date</Label>
                        <Input
                            type="date"
                            name="date"
                            id="trade_data"
                            placeholder="date placeholder"
                        />
                    </FormGroup>

                    <FormGroup tag="fieldset" row>
                        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
                        <Col sm={10}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}Long
                            </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio2" />{' '}Short
                            </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>

                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="amount">Amount</Label>
                                <Input type="text" name="amount" id="amount" placeholder="amount" value={this.state.amount} onChange={this.onChangeNumber} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="price">Price</Label>
                                <Input type="text" name="price" id="price" placeholder="price" value={this.state.price} onChange={this.onChangeNumber} />
                            </FormGroup>
                        </Col>
                    </Row>
                </FormGroup>

                <Button onClick={this.addHolding}>Add</Button>
            </Form>
        );
    }
}

// export default AddHoldingForm;
const mapStateToProp = state => {
    return {
        symbolMSP: state.symbolStore.symbolsReducer
    };
};

const mapDispatchToProp = dispatch => {
    return {
        // addLinkMDP: () => dispatch(addLinkActionCreator("Xccelerate", "https://www.xccelerate.co")),
        getSymbolMDP: () => dispatch(getSymbolsActionCreator())
    };
};

export const AddHoldingForm = connect(mapStateToProp, mapDispatchToProp)(PureAddHoldingForm);
