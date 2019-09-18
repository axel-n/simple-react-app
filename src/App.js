import React, {Component} from 'react';
import Tickets from "./views/Tickets";
import {Card, CardBody, CardHeader} from "reactstrap";

class App extends Component {

    render() {
        return (

            <Card>
                <CardHeader>Simple react app</CardHeader>

                <CardBody>
                    <Tickets/>
                </CardBody>
            </Card>
        );
    }
}

export default App;