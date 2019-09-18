import React, {Component} from 'react';
import {
    Card,
    CardBody, Col, FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalHeader, Row,
} from "reactstrap";
import CardHeader from "reactstrap/es/CardHeader";
import CustomTable from "../CustomTable";
import * as request from "../../utils/request/request";
import TicketDetails from "./TicketDetails";

class Tickets extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            data: [],

            details: [],
            modal: false,
        };

        this.columns = [
            {text: 'ID', dataField: 'id'},
            {text: 'Status', dataField: 'status'},
            {text: 'Summary', dataField: 'summary'},
            {text: 'Category', dataField: 'category'},
            {text: 'Created at', dataField: 'cdat'},
            {text: 'Updated at', dataField: 'udat'}
        ];

        this.modalClick = this.modalClick.bind(this);
        this.getData = this.getData.bind(this);

        this.getData();
    }


    getData() {
        return request.sendRequest("GET", "/tickets")
            .then(data => {

                this.setState({
                    data: data,
                    loaded: true
                });
            })

    }


    modalClick(data) {
        this.setState({
            modal: !this.state.modal,
        });

        if (data.id) {
            this.setState({
                details: data
            })
        }
    }

    render() {

        if (this.state.loaded) {
            return <div className="animated fadeIn">

                <Modal isOpen={this.state.modal} toggle={this.modalClick}
                       className={'modal-lg ' + this.props.className}>
                    <ModalHeader
                        toggle={this.modalClick}>Ticket details</ModalHeader>
                    <ModalBody>

                        <TicketDetails
                            details={this.state.details}
                        />

                    </ModalBody>
                </Modal>

                <Card>
                    <CardHeader>Created by me</CardHeader>
                    <CardBody>

                        <CustomTable
                            data={this.state.data}
                            columns={this.columns}
                            detailsClick={this.modalClick}
                        />
                    </CardBody>
                </Card>
            </div>
        } else {
            return request.loading();
        }
    }

}

export default Tickets;