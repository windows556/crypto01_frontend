import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


class AddWatchlistButton extends React.Component {
    constructor(props) {
        super(props);
        this.addWatchlist = this.addWatchlist.bind(this);
    }

    async addWatchlist(e) {

        console.log("before post");
        await axios
            // .post(`${process.env.REACT_APP_API_SERVER}/market/addcrypto`)
            .post(`/market/addcrypto`)
            .then(() => {
                console.log("post success 2");
            })
            .catch(err => {
                console.error(err);
            });
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.addWatchlist}>Add to Watchlist</Button>
            </div>
        );
    }
}

export default AddWatchlistButton;