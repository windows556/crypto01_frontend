import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ApexChart from "./CandlestickChart.js";
import AddWatchlistButton from "./AddWatchlistButton.js";

const CardList = props => {
    console.log("inside");
    console.log(props.list);
    const listItems = props.list.map((item, index) => (
        <Card key={item.symbol}>
            <Card.Header>
                <Row>
                    <Col lg="2">
                        {item.symbol}
                    </Col>
                    <Col lg="2">
                        {item.closing_price}
                    </Col>
                    <Col lg="2">
                        {item.change_of_percentage}
                    </Col>
                    <Col lg="2">
                        {item.volume}
                    </Col>
                    <Col lg="2">
                        <AddWatchlistButton></AddWatchlistButton>
                    </Col>
                    <Col lg="2">
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            Expand
                        </Accordion.Toggle>
                    </Col>
                </Row>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
                {/* <Card.Body>{index}. There should be a graph</Card.Body> */}
                <Card.Body>
                    <ApexChart title={item.symbol} data={item.candlestick_data}></ApexChart>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    ));

    return (
        <div>
            {listItems}
        </div>
    );
};

export default CardList;