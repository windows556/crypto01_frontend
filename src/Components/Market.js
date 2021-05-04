import React from "react";
import Cards from "./Cards";

class Market extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Cards></Cards>
            </div>
        )
    }
}

export default Market;