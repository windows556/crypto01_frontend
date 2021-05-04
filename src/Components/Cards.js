import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import axios from 'axios';
import CardList from "./CardList";


class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
        };
    }

    async componentDidMount() {
        let tmp = await this.getcontent();
    }

    async getcontent() {
        // let tmp = await axios.get(`${process.env.REACT_APP_API_SERVER}/market`)
        let tmp = await axios.get(`/market`)
            .then((data) => {
                this.setState({
                    content: data.data
                })
            })
    }

    render() {
        console.log(this.state.content);

        return (
            <Accordion>
                <CardList list={this.state.content}></CardList>
            </Accordion>
        );
    }
}

export default Cards;