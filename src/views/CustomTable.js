import React, {Component} from 'react';
import {Table} from "reactstrap";


export function getHeaders(columns) {

    let headers = columns.map((item, key) => {
        return <th key={key}>{item.text}</th>
    });

    return <tr>
        {headers}
    </tr>;
}

export function getContent(data, columns, handleClick) {

    return data.map((item, keyItem) => {
        let cells = columns.map((columnData, columnKey) => {
            let column = columnData.dataField;
            let cellData = item[column];

            return <td key={columnKey}>{cellData}</td>
        });

        return (
            <tr key={keyItem} onClick={() => handleClick(item)}>
                {cells}
            </tr>
        );
    });


}


class CustomTable extends Component {

    render() {

        let headers = getHeaders(this.props.columns);
        let content = getContent(this.props.data, this.props.columns);

        if (headers && content) {
            return <Table responsive striped hover>
                <thead>
                {headers}
                </thead>

                <tbody>
                {content}
                </tbody>
            </Table>
        } else return null;
    }
}


export default CustomTable;