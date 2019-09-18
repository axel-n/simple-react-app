import React, {Component} from 'react';
import {
    Card,
    CardBody, Col, FormGroup, Input, Label,
    Modal,
    ModalBody,
    ModalHeader, Row,
} from "reactstrap";
import CardHeader from "reactstrap/es/CardHeader";
import CustomTable from "./CustomTable";
import * as request from "../utils/request/request";

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
        let data = require('../mocks/tickets.json');

        setTimeout(() => {
            this.setState({
                data: data,
                loaded: true
            });
        }, 2000);
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

                        <Row>
                            <Col>
                                <Col>
                                    <FormGroup row>
                                        <Label>Summary</Label>
                                        <Col>
                                            <Input name="summary" defaultValue={this.state.details.summary}/>
                                        </Col>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup row>
                                        <Label>Status</Label>
                                        <Col>
                                            <Input name="status" type="select"
                                                   defaultValue={this.state.details.status}>
                                                <option value="NEW">New</option>
                                                <option value="IN_PROGRESS">In progress</option>
                                                <option value="DONE">Done</option>
                                            </Input>
                                        </Col>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup row>
                                        <Label>Description</Label>
                                        <Col>
                                            <Input name="description" defaultValue={this.state.details.description}/>
                                        </Col>
                                    </FormGroup>
                                </Col>

                                <Col>
                                    <FormGroup row>
                                        <Label>Category</Label>
                                        <Col>
                                            <Input name="category" defaultValue={this.state.details.category}/>
                                        </Col>
                                    </FormGroup>
                                </Col>
                            </Col>

                            <Col md="4">
                                <Col>
                                    <FormGroup row>
                                        <Label>ID</Label>
                                        <Col>
                                            <span>{this.state.details.id}</span>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label>Created</Label>
                                        <Col>
                                            <span>{this.state.details.cdat}</span>
                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Label>Updated</Label>
                                        <Col>
                                            <span>{this.state.details.udat}</span>
                                        </Col>
                                    </FormGroup>

                                </Col>
                            </Col>
                        </Row>


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