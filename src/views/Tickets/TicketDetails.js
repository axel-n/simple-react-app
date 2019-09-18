import React, {Component} from 'react';
import {Col, FormGroup, Input, Label, Row} from "reactstrap";

class TicketDetails extends Component {

    render() {

        return <Row>
            <Col>
                <Col>
                    <FormGroup row>
                        <Label>Summary</Label>
                        <Col>
                            <Input name="summary" defaultValue={this.props.details.summary}/>
                        </Col>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup row>
                        <Label>Status</Label>
                        <Col>
                            <Input name="status" type="select"
                                   defaultValue={this.props.details.status}>
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
                            <Input name="description" defaultValue={this.props.details.description}/>
                        </Col>
                    </FormGroup>
                </Col>

                <Col>
                    <FormGroup row>
                        <Label>Category</Label>
                        <Col>
                            <Input name="category" defaultValue={this.props.details.category}/>
                        </Col>
                    </FormGroup>
                </Col>
            </Col>

            <Col md="4">
                <Col>
                    <FormGroup row>
                        <Label>ID</Label>
                        <Col>
                            <span>{this.props.details.id}</span>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label>Created</Label>
                        <Col>
                            <span>{this.props.details.cdat}</span>
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label>Updated</Label>
                        <Col>
                            <span>{this.props.details.udat}</span>
                        </Col>
                    </FormGroup>

                </Col>
            </Col>
        </Row>
    }

}

export default TicketDetails;