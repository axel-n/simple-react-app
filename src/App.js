import React, {Component} from 'react';
import Tickets from "./views/Tickets";
import {Card, CardBody, CardHeader} from "reactstrap";

class App extends Component {

    render() {
        return (

            <Card>
                <CardHeader style={{backgroundColor: '#565656'}} className="text-white">
                    Simple react app
                </CardHeader>

                <CardBody>
                    <Tickets/>
                </CardBody>
            </Card>
        );
    }
}

export default App;